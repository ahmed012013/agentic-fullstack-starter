<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Multi-Agent Orchestration & Working Agreement

This project is built for dual-agent pair programming combining **Antigravity** (Tech Lead & Coordinator) and **OpenAI Codex** (Core Implementation Engine).

## 1. Division of Labor

- **Antigravity (Tech Lead & Coordinator):**
  - **Planning & Architecture:** Breaks user goals into small, verifiable implementation steps.
  - **Environment & Git:** Manages packages, dev server lifecycle, git commits, and remote syncing.
  - **Quality Gate:** Runs `npm run check` (Lint + Typecheck + Tests + Build) after changes.
  - **Reporting & Updates:** Relays status, reviews code diffs, and keeps the user informed in the main conversation.

- **Codex (Implementation Specialist):**
  - **Core Coding:** Generates UI components, Server Actions, API routes, and Zod schemas.
  - **Refactoring & Algorithms:** Handles heavy multi-file modifications and complex logic.
  - **Test Suite:** Writes behavior-focused tests (Vitest + Testing Library).

## 2. Model Selection Strategy (Codex CLI)

- **Default Execution: `gpt-6.1-sol`**
  - Used for fast, precise, daily feature additions, component building, and routine refactors.
  - Fastest latency and cleanest token economy for iterative changes.

- **On-Demand Escalation: `gpt-6-astra` (`-m gpt-6-astra`)**
  - **Trigger Conditions:**
    1. **Heisenbugs / Elusive Errors:** Complex race conditions, memory leaks, or recurring build failures (escalated automatically after 2 failed attempts).
    2. **Deep Algorithmic Work:** Protocol reverse-engineering, binary parsing, or cryptographic checksums.
    3. **Large Architectural Shifts:** Restructuring multiple subsystem boundaries simultaneously.
    4. **Explicit User Request:** User asks to use Astra for a demanding problem.

## 3. Reverse Engineering & Tools (REA)

- Integrated with the **REA (`reverse-engineer-anything`)** MCP server.
- Supports passive analysis of shipped binaries, .NET assemblies, Electron/JavaScript bundles, and network captures.
