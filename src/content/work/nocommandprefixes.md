---
title: NoCommandPrefixes
summary: A Minecraft plugin that removes command fallback prefixes, so removed commands can't be run or tab-completed.
org: independent
kind: plugins
status: archived
period: "2022"
stack: [Java, Spigot]
repo: zacharyk812/NoCommandPrefixes
featured: true
order: 20
---

Every plugin command on a Minecraft server is also reachable through a prefixed form such as `plugin:command`. Blocking the short form of a command leaves the prefixed one open, and tab-completion lists both.

NoCommandPrefixes hides the prefixed forms and blocks them. A command you have removed can't be run and doesn't show up when a player presses tab.
