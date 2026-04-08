import { useState, useRef, useEffect, useCallback } from 'react';

interface HistoryEntry {
  type: 'input' | 'output' | 'error';
  text: string;
}

const COMMANDS = [
  'help', 'about', 'projects', 'books',
  'scale-yourself', 'scale-intelligence', 'scale-business',
  'hire', 'contact', 'substack', 'github', 'clear', 'whoami',
];

// Strip leading slash so /help and help both resolve
function normalize(input: string): string {
  return input.trim().replace(/^\//, '').toLowerCase();
}

function getCompletionCandidate(input: string): string {
  if (!input) return '';
  const trimmed = input.trim();
  if (!trimmed) return '';
  const hasSlash = trimmed.startsWith('/');
  const bare = hasSlash ? trimmed.slice(1) : trimmed;
  const match = COMMANDS.find(cmd => cmd.startsWith(bare) && cmd !== bare);
  if (!match) return '';
  // Complete the rest of the command (not the slash — user typed that)
  return match.slice(bare.length);
}

function trackCLI(command: string) {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('cli_command', { props: { command } });
  }
}

function handleCommand(cmd: string): { output: string; navigate?: string; newTab?: string } {
  const c = normalize(cmd);

  switch (c) {
    case 'help':
      return {
        output: `Available commands:

  /help              → list commands
  /about             → who is Assaf
  /projects          → all products built
  /books             → all books
  /scale-yourself    → Human OS vertical
  /scale-intelligence→ AI Stack vertical
  /scale-business    → Execution vertical
  /hire              → work with me
  /contact           → get in touch
  /substack          → newsletter
  /github            → code
  /whoami            → something unexpected
  /clear             → clear terminal`,
      };

    case 'about':
      return {
        output: `Engineer in the gap between technical teams and the humans
they serve. CS, Solutions Engineering, Support, TAM —
built from scratch, scaled, learned what works.

3 verticals. 4 books. 13+ products. One thesis:
performance = Human OS + AI Stack + Execution.`,
      };

    case 'projects':
      return {
        output: `Scale Yourself:
  Vessel          → wellness tracking, vessel.here.now + github.com/assafbar2/Vessel
  Nuudge          → human-to-human nudges (nuudge.app)
  Gram-Reaper     → singular focus tool, github.com/assafbar2/gram-reaper

Scale Intelligence:
  Agent Switchboard → learn, find, route & orchestrate AI agents (agentswitchboard.dev)
  GitHub          → 13+ projects (github.com/assafbar2)

Scale Business:
  upgrAIde        → AI upskilling (upgrAIde.co)
  barnirhired     → CS hiring, barnirhired.com
  GiFOC           → get in front of customers (gifoc.com)`,
      };

    case 'books':
      return {
        output: `UNSCARED: AI     → live alongside AI, without fear (unscaredai.com)
Emotions Soup    → understand the signals driving your decisions (emotions-soup.carrd.co)
Beyond the Rules → mental models for people who write their own script (beyond-the-rules.carrd.co)
* 4 books.`,
      };

    case 'scale-yourself':
      return { output: 'Navigating to Human OS...', navigate: '/scale-yourself' };

    case 'scale-intelligence':
      return { output: 'Navigating to AI Stack...', navigate: '/scale-intelligence' };

    case 'scale-business':
      return { output: 'Navigating to Execution...', navigate: '/scale-business' };

    case 'hire':
      return { output: 'Navigating to work with me...', navigate: '/work-with-me' };

    case 'contact':
      return {
        output: `Email: assafbar@gmail.com or barnir@agentmail.to
Or just type 'hire' to go straight to the work-with-me page.`,
      };

    case 'substack':
      return { output: 'Opening Substack...', newTab: 'https://barnir.substack.com' };

    case 'github':
      return { output: 'Opening GitHub...', newTab: 'https://github.com/assafbar2' };

    case 'whoami':
      return {
        output: `unscared. building. tired in the good way.`,
      };

    case 'clear':
      return { output: '__CLEAR__' };

    default: {
      // Fuzzy: suggest partial matches
      const suggestions = COMMANDS.filter(cmd => cmd.includes(c) || c.includes(cmd.slice(0, 3)));
      if (suggestions.length > 0 && suggestions[0] !== c) {
        return { output: `command not found: ${c}\nDid you mean: ${suggestions.slice(0, 3).join(', ')}? Type 'help' for all commands.` };
      }
      return { output: `command not found: ${c}. Type 'help' for options.` };
    }
  }
}

export default function CLI() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: 'output', text: 'Unscared OS v1.0 — type /help to explore' },
  ]);
  const [input, setInput] = useState('');
  const [ghost, setGhost] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-focus on mount without scrolling the page
    inputRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    // Scroll within the CLI body only — never scroll the page
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleInput = useCallback((value: string) => {
    setInput(value);
    setGhost(getCompletionCandidate(value));
    setHistoryIndex(-1);
  }, []);

  const submit = useCallback(() => {
    const cmd = input.trim();
    if (!cmd) return;

    trackCLI(cmd);
    const result = handleCommand(cmd);

    setCmdHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);
    setInput('');
    setGhost('');

    if (result.output === '__CLEAR__') {
      setHistory([{ type: 'output', text: 'Unscared OS v1.0 — type /help to explore' }]);
      return;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: cmd },
      { type: result.navigate || result.newTab ? 'output' : 'output', text: result.output },
    ]);

    if (result.navigate) {
      setTimeout(() => {
        window.location.href = result.navigate!;
      }, 400);
    }

    if (result.newTab) {
      window.open(result.newTab, '_blank', 'noopener,noreferrer');
    }
  }, [input]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (ghost) {
        setInput(prev => prev + ghost);
        setGhost('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, cmdHistory.length - 1);
      setHistoryIndex(newIndex);
      const cmd = cmdHistory[newIndex] ?? '';
      setInput(cmd);
      setGhost(getCompletionCandidate(cmd));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      const cmd = newIndex >= 0 ? (cmdHistory[newIndex] ?? '') : '';
      setInput(cmd);
      setGhost(getCompletionCandidate(cmd));
    }
  }, [submit, ghost, historyIndex, cmdHistory]);

  return (
    <div
      className="cli-terminal"
      onClick={() => inputRef.current?.focus()}
      role="application"
      aria-label="Unscared OS terminal — type commands to navigate"
    >
      <div className="cli-header">
        <span className="cli-dot cli-dot--red" />
        <span className="cli-dot cli-dot--yellow" />
        <span className="cli-dot cli-dot--green" />
        <span className="cli-title">unscared-os — bash</span>
      </div>

      <div className="cli-body" ref={bodyRef}>
        {history.map((entry, i) => (
          <div key={i} className={`cli-line cli-line--${entry.type}`}>
            {entry.type === 'input' && <span className="cli-prompt">❯ </span>}
            <span className="cli-text">{entry.text}</span>
          </div>
        ))}

        <div className="cli-input-row">
          <span className="cli-prompt">❯ </span>
          <span className="cli-input-wrap">
            <input
              ref={inputRef}
              className="cli-input"
              value={input}
              onChange={e => handleInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal input"
              maxLength={120}
              style={{ width: `${Math.max(1, input.length)}ch` }}
            />
            {ghost && (
              <span className="cli-ghost" aria-hidden="true">
                {ghost}
              </span>
            )}
            <span className="cli-cursor" aria-hidden="true" />
          </span>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
