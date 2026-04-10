# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint via Next.js
```

There are no tests configured yet.

## Architecture

Next.js 16 App Router project with Tailwind CSS v4 and TypeScript.

**Routing:** `app/` uses the App Router file-system convention. `app/page.tsx` immediately redirects to `/login`. Routes: `/login` → `app/login/page.tsx`, `/signup` → `app/signup/page.tsx`.

**Shared auth UI:** Both routes render `<AuthForm mode="login"|"signup" />` (`app/components/AuthForm.tsx`), which handles the form layout, submit handler (logs to console), and navigation link. Password visibility toggling is isolated in `<PasswordInput />` (`app/components/PasswordInput.tsx`).

**Styling:** Tailwind CSS v4 imported via `app/globals.css` (`@import "tailwindcss"`), processed through `@tailwindcss/postcss`.

**Specs:** Feature specs live in `_specs/` and describe acceptance criteria for planned or in-progress features.

**Custom slash commands:** `.claude/commands/commit-message.md` defines a `/commit-message` command that analyses staged changes and proposes a commit message.