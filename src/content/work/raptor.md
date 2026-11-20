---
title: Raptor
summary: Turns any Linux machine you own or rent into a game server host, with 350+ games and apps and no panel to host yourself.
org: xena
kind: tool
status: shipped
role: Creator and maintainer
period: 2025 – present
stack: [Go, Linux]
repo: xena-studios/raptor
links:
  - { label: raptorpanel.net, href: "https://raptorpanel.net" }
  - { label: Docs, href: "https://docs.raptorpanel.net" }
featured: true
order: 1
---

Raptor is for people who want to run game servers on hardware they control. You run one install command on a Linux box, pick from a library of more than 350 games and apps, and manage everything from the web. There is no panel to install, secure or keep updated.

Plugins, mods, modpacks, backups and databases are built in. Raptor runs its own library and any Pterodactyl egg, so an existing setup carries over.

## How it's put together

Raptor is three pieces, split by where they run.

| Piece | Runs on | What it does |
| --- | --- | --- |
| Panel | Raptor's infrastructure | The web app and API: accounts, organisations, billing, and linking your machines. |
| Wings | Your machine | The daemon that runs the servers: schedules, backups, SFTP and crash recovery. |
| `raptor` CLI | Your machine | Status, power, console, logs, backups and restores, and a `doctor` command. |

The split is the point of the design. Wings keeps working when the Panel can't be reached, so an outage on Raptor's side never takes your servers down with it.

Raptor is open source under AGPL-3.0.
