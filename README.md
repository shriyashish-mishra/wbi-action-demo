# wbi-action-demo

A tiny repo showing the [Who Broke It?](https://github.com/shriyashish-mishra/who-broke-it) merge gate.
The open pull requests are deliberate: one is clean, two break the rules. Look at their checks.

* PR "clean": a task PR that stays in scope and carries its handoff record → **passes**
* PR "scope + constitution": a web-shell task that edits billing code and bypasses `BillingService` → **fails**
* PR "contract tampering": bumps a contract it does not own → **fails**
