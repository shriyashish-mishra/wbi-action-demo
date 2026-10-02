# Project Constitution

Durable rules every human and agent must follow. Edit freely; this file is yours.

Rule syntax: `- **C<n>** text` followed by optional directives in backticks:
`paths: glob, glob` scopes a rule to matching files, `forbid: /regex/` makes it
machine-checkable (enforced by `wbi verify` on a task's diff and by `wbi drift` on the whole repo),
`except: glob` exempts files from a forbid rule. Regexes use Go (RE2) syntax.

- **C1** Contracts first: never change a shared contract (see `.wbi/contracts/`) without declaring a CHANGE_CONTRACT intent and recording it in the handoff.
- **C2** Stay inside your task's allowed paths. If you need something outside them, declare an intent or ask the owner.
- **C3** Database migrations are only edited by the task that owns them. `paths: migrations/**`
- **C4** No hard-coded secrets in source. `forbid: /(api[_-]?key|secret|password)\s*[:=]\s*["'][A-Za-z0-9_\-]{16,}["']/i`
- **C5** Every task ships with tests that exercise its acceptance criteria.
- **C6** All billing mutations must go through BillingService. `paths: **/*` `except: src/api/billing/**` `forbid: /\b(stripe\.(charges|subscriptions|invoices)\.(create|update|cancel)|db\.billing\.(insert|update|delete))/`
