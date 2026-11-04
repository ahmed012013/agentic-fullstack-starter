# Agentic Full-Stack Starter

A Next.js template for building full-stack apps with AI coding agents (Claude Code, Cursor). The agent rules ship with the repo, so every new project starts with the same standards.

## What's inside

- **Next.js** (App Router, `src/` directory, `@/*` alias) + **TypeScript** (strict)
- **Tailwind CSS v4** + **shadcn/ui** (Radix): button, card, dialog, dropdown-menu, form, input, label, sonner (toasts)
- **Zod** + **react-hook-form** for validation, **lucide-react** icons
- **Vitest** + **Testing Library** (jsdom)
- Agent rules: [`CLAUDE.md`](./CLAUDE.md) (Claude Code), [`.cursorrules`](./.cursorrules) (Cursor), [`AGENTS.md`](./AGENTS.md)
- An example feature (`src/features/contact`) showing a shared Zod schema, a Server Action, loading/error/success states and a behavior test

## Start a new project from this template

```bash
gh repo create my-app --template ahmed012013/agentic-fullstack-starter --private --clone
cd my-app
npm install
cp .env.example .env.local
npm run dev
```

Or click **Use this template** on GitHub.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server at http://localhost:3000 |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm test` / `npm run test:watch` | Vitest |
| `npm run build` | Production build |
| `npm run check` | Lint + typecheck + test + build |

## Adding UI components

```bash
npx shadcn@latest add select tabs sheet
```

## Project structure

```
src/
  app/            routes, layouts (Server Components by default)
  components/ui/  shadcn primitives
  features/<x>/   feature code: components, actions, lib
  lib/            shared utils (cn) and Zod schemas
```

---

## بالعربي

تمبلت جاهز لأي مشروع Full-Stack جديد. اعمل منه نسخة بزرار **Use this template** على GitHub أو بالأمر اللي فوق، وبعدين `npm install` و`npm run dev`. قواعد الـ Agent موجودة في `CLAUDE.md` و`.cursorrules`، وقبل ما تخلص أي مهمة شغّل `npm run check`.
