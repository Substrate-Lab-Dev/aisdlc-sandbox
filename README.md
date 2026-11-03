# aisdlc-sandbox

Private sandbox repository for the aisdlc control plane. Agents run real tasks here, so the
project is small on purpose: a few pure text helpers in `src/text.ts` with tests.

## Commands

- `pnpm install` installs the pinned dependencies (Node 22, pnpm 9).
- `pnpm verify` runs lint (Biome), typecheck (tsc) and tests (Vitest). CI runs the same command.
