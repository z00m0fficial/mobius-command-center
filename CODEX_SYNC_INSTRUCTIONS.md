# Codex Sync Instructions

Codex must work from the latest GitHub repository state before implementing UI changes.

## Required First Step

In the local Codex workspace, run git pull origin main.

Then confirm CODEX_UI_COMPLETION_BRIEF.md exists in the repository root.

## If the Brief Is Missing

The workspace is not synced to GitHub. Pull the latest main branch again or clone the repository fresh.

## Execution Task

After syncing, open CODEX_UI_COMPLETION_BRIEF.md and complete the UI implementation exactly from that brief.

## Build Requirement

The final implementation must pass npm run build.
