---
title: 'Module Size and You: Is Bigger Better?'
summary: 'Pros and Cons of large and small node modules.'
date: 2016-10-06T00:00
---
<post-header />

Ah, the age old question: "Is bigger better?". Node has flipped it on its head: "Is smaller better?".

This article is going to go over the various module sizes and discuss the reasons developers would use or choose each one.

![Small vs Big Dogs](./images/924797_878671665545667_385439750_n.webp)

## Tiny Modules

A simple module. Does 1 thing and does it well.
The [UNIX philosophy](http://www.catb.org/esr/writings/taoup/html/ch01s06.html).

The nails and a hammer to build a house, but scattered around the yard.
I hope you can find the tools and know how to build a house.

Create a tiny module when you want to abstract a detail into English.

One common misnomer is that tiny modules are about lines of code.
Tiny modules are actually about complexity minimalism and not about how few lines of code there are.

### Examples

- [pad-left](https://github.com/jonschlinkert/pad-left)
- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes)
- [List of AWesome Micro npm Package](https://github.com/parro-it/awesome-micro-npm-packages)

### Pros

- Easy to maintain
- Easy to compose

### Cons

- Hard to find
- Does not solve complex problems

![Cats of various sizes](./images/tumblr_lpseff4tbm1qi805wo1_500.jpg)

## Monolithic Modules

A complex module.
Does more than 1 thing.
Sometimes many things.
Has many opinions baked in.

The [modular home](https://en.wikipedia.org/wiki/Modular_building) to build a house.
I hope the plans fit what you wanted in your house.

Create a monolithic module when you want to abstract an architectural decision into a framework.

A large module solves a complex problem by abstracting something large from the user.
It exposes a simpler API to allow the user to perform complex tasks by interacting.

### Examples

- [Angular](https://github.com/angular/angular/tree/afb4bd9ef60dcc0ac4c7acde16fca3d48d2129ee)
- [jQuery](https://github.com/jquery/jquery)

### Pros

- Makes specific complex tasks easier
- Easy to find

### Cons

- Hard to compose
- Hard to maintain

![Pug dogs of various sizes](./images/1353440635851774.jpg)

## Meta Modules

A collection of modules meant to work together.
Modules can either be curated or produced as a package.
Has many modules that do small things.

The [tool set](https://www.amazon.com/Williams-WSC-167TB-Electrical-Maintenance-167-Piece/dp/B00GRGF1WI/ref=sr_1_6?s=power-hand-tools&rps=1&ie=UTF8&qid=1475807479&sr=1-6&keywords=toolbox+piece&refinements=p_85%3A2470955011)
that includes nails and a hammer to build a house.
I hope you know how to build a house.

Create a meta module when you want to abstract many individual solutions into a package.

A tiny module solves 1 thing and a monolithic module solves a complex thing,
but what if you want to solve many things in a single problem domain?
A meta module allows users to bring in a collection of tiny modules packaged together with each other in mind.
A user can try and create a game by bringing in a game engine meta module.
This game engine meta module would include all of the things needed to make a game,
but would still require many architectural decisions.

### Examples

- [Lodash](https://github.com/lodash/lodash)
- [React](https://github.com/facebook/react/tree/master/packages)

### Pros

- Easy to maintain
- Easy to compose
- Easy to find

### Cons

- Does not solve complex architectural problems

## Popular Opinion

Sindre Sorhus says [modules should be small](http://dailyjs.com/2015/07/02/small-modules-complexity-over-size/).

> "Think of node modules as lego blocks.
> You don’t necessarily care about the details of how it’s made.
> All you need to know is how to use the lego blocks to build your lego castle."

Eran Hammer says [tiny modules aren’t a slam dunk](https://hueniverse.com/2014/05/30/the-fallacy-of-tiny-modules/).

> "The bottom line is simple – at some point, someone has to put it all together and then,
> all the complexity is going to surface and the shit will hit the fan."

James Halliday also thinks [small modules are cool](https://gist.github.com/substack/5075355).

> "As much as possible, I try to build large-scale projects using lots of tiny
> modules so I just repeat this process whenever I need some reusable component
> that doesn’t yet exist in quite the form I need it to exist."

Rich Harris says [it’s not that simple](https://medium.com/@Rich_Harris/small-modules-it-s-not-quite-that-simple-3ca532d65de4#.gn3k26gc5).

> "Yes, small modules are easier to write.
> Yes, they’re easier to test.
> Yes, it’s easier to adhere to semver.
> These are all things that make your life as a library author easier.
> As we’ve seen, they come at a cost for others."

From these quotes, it wouldn’t look like there is a popular opinion, but there really is.
The popular opinion is on the side of tiny modules [currently](http://thenodeway.io/introduction/#build-small-single-purpose-modules).

## Which One is Best?

Hopefully your conclusion was none of them.
If someone tells you there is one type of module you should write, you should probably stop listening to them.

When you set out to create a module, you need to look at the problem domain and
decide what kind of module would best suit your users and not your philosophy.

So there you have it.
The best module type is tiny modules, monolithic modules, and meta modules.
Just know when to use them.

