## Verification

`npm run check` is the repo's whole verification, and the pre-commit hook runs it. Run it before you report a change as complete. A new check (tests, lint, build) goes into it.

## Software factory

Four label-triggered agent workflows in `.github/workflows/`, with their scripts and prompts in `.sandcastle/agent-workflows/`:

| Label                  | Goes on | Result                                                   |
| ---------------------- | ------- | -------------------------------------------------------- |
| `agent:explore`        | issue   | Findings comment; duplicates closed. No code.            |
| `agent:implement`      | issue   | Draft PR for that ticket.                                |
| `agent:review`         | PR      | Fix commits, verdict, inline comments; PR marked ready.  |
| `agent:implement-spec` | issue   | Spec cut into a ticket queue, each built as a draft PR.  |

`agent:in-progress` and `agent:blocked` are the factory's own; re-add the trigger label to retry.

## Agent skills

### Issue tracker

Issues live in this repo's GitHub Issues (via the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `GLOSSARY.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.
