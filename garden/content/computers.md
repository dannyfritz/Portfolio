---
layout: layout
tags: path
title: 'Computers & Software'
date: 2026-03-30T00:00
---

# Computers & Software

## Using Large Language Models for Coding

## My Low-Power PC

I bought a [Raspberry Pi 4 Model B](https://en.wikipedia.org/wiki/Raspberry_Pi_4)
with 8GB of RAM to use as my self-hosted software server.
I intentionally bought something that was both cheap and low power.
Bought an alluminum case with active fan for it.
It uses between 3W at idle and 15W at full throttle.
I calculated that out to cost between 2.63$ and 13.15$ per year in electricity
(2026 US-WI rates).

### Fedora

I chose Fedora to run on it despite Raspbian being the official distro.
I've run Fedora on my main computer for many years and chose it because of
familiarity.
But, one of the cons is that there didn't appear to be any working fan control
layers.
One [fish script](https://codeberg.org/dannyfritz/raspberry-pi-4_utils) and
a service unit later, and the Pi will cool itself automatically when it gets
hot.

### Services

One thing different about running a low-power PC is you have to be really
careful about what software you choose to run on it.
The current en vogue software stack for self-hosting is Docker, but that would
bring my system to its knees almost immediately.
So in a twist of something fun, something educational, and necessity I have
chosen to make my services bespoke and tiny.

Technologies that are good for low-end servers:
- SQLite
- Compiled binaries from languages like C, Rust, Nim, Go, etc.
- Shell scripts like Bash, Fish, Nu, etc.
- Invoked on-demand instead of daemonized (my server is mostly idle)

Technologies to avoid:
- Interpretted runtimes like Node and Python
- Virtualization like Docker

