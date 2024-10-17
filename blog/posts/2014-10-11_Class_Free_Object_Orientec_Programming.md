---
title: "Class Free Object Oriented Programming"
summary: "Augmenting with MixIns"
date: 2014-10-11T00:00
---

<post-header />

> I used to think that the important innovation of JavaScript was prototypal inheritance.
> I now think it is class free object oriented programming.
> I think that is JavaScript's _gift_ to humanity.
> That is the thing that makes it really interesting, special, and an important language.

[Douglas Crockford: The Better Parts – JSConfUY 2014](https://www.youtube.com/watch?v=bo36MrBfTk4#t=2020)

## Tell Me More

I think Douglas Crockford is not only on to something here, but completely right.
Let's talk about what it means, why it is hard to grasp for some programmers, and how it can benefit you.

## What Class Free Object Oriented Programming Means

First, we need to cover what [Object Oriented Programming](http://en.wikipedia.org/wiki/Object-oriented_programming) (OOP) means.
There are many types of OOP that are in use today.

### Class Based OOP

This is your classical example of OOP.
The easiest to understand form is [single inheritance](http://docs.oracle.com/javase/tutorial/java/concepts/inheritance.html).
You make a class and inherit from it.
And subsequent classes can inherit from that class.
One root class, and a tree of classes stemming from there.

![Class Hierarchy](./images/oop_hierarchy.gif)

This paradigm is super easy to grasp, but also super easy to create traps for yourself.
Like JavaScript, this methodology is full of [foot-guns](http://www.urbandictionary.com/define.php?term=footgun&defid=7493319).

> A podiatric penetration purposed pistol.
> A gun which is apparently designed for shooting yourself in the foot.

## A Duck, an Alligator, and a Goat

Let's say we want to create a `Duck` class in this paradigm.

1. Inherit from the base `Object` and create an `Animal` class.
2. Inherit from the `Animal` class and create a `Duck` class.
3. Define `swim`, `walk`, `talk`, and `fly` methods on `Duck`.

Easy right?
But wait a second.
New requirements have come in and you need to define `Alligator` and `Goat` now.

1. Inherit from `Animal` and create an `Alligator` class.
2. Define `walk`, `swim`, and `talk` on `Alligator`.
3. Inherit from `Animal` and create a `Goat` class.
4. Define `walk` and `talk` on `Goat`.

All done! Okay, time to refactor and clean up.
`walk`, `swim`, `fly`, and `talk` are not specific to those animals are they?
We should probably move them to a shared class to be more [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself).
We should move the methods to `Animal` so they can be shared among the animals and written once.
Cool, now `walk`, `talk`, `fly`, and `swim` are written only once!

But wait, `Alligator` shouldn't be able to `fly`!
We need an additional class between `Animal` and the animals to account for this.
Let's create a `FlyingAnimal` inheriting from `Animal` so we can account for the `Duck` that flies.
Oh, and `Goat` doesn't `swim` like `Duck` and `Alligator`.
So we need to create a `SwimmingAnimal` to account for that and assign `Alligator` and `Duck` to it, but not `Goat`.
But wait, `Duck` can't inherit from `FlyingAnimal` in addition to `SwimmingAnimal` and `WalkingAnimal`!

![Psyduck](./images/oop_psyduck.gif)

This is why a single inheritance taxonomy is not a good way of organizing our objects in programming.
Most of the languages have ways of accounting for this.
But to me, they at
[best](http://www.learncpp.com/cpp-tutorial/117-multiple-inheritance/)
[feel](http://stackoverflow.com/questions/21824402/java-multiple-inheritance)
[like](http://stackoverflow.com/questions/9163341/multiple-inheritance-prototypes-in-javascript)
[workarounds](http://stackoverflow.com/questions/178333/multiple-inheritance-in-c-sharp).
It is almost certainly _possible_ in all the most common languages,
but they really get in the way and require you to write tons of boilerplate to do it.

## Class Free OOP

This is where languages like JavaScript really help out.
JavaScript `Functions` are first-class citizens in the language,
so this method just feels natural and is relatively frictionless.

If you want a `Duck`, you create a Function that returns an `Object` that looks like a Duck.
If you also want an `Alligator` and a `Goat`, you create those two `Functions`.
The difference is you do not inherit any classes or implement any interfaces.
Inside the functions, you add methods and properties and return an `Object` that looks like what you want.

But this time around, when you refactor out the reusable portions,
you just take the pieces out into their own `Objects`:
`withFlying`, `withAnimal`, `withWalking`, and `withSwimming`.
Then for each `Object` that needs the functionalty,
you just copy the methods on them to your own `Object`.
And if you want to reuse any of them in another `object`, you just do.
No compiler is going to complain about it or tell you that you can't.
It is just going to work and [act like a duck](http://en.wikipedia.org/wiki/Duck_typing#In_JavaScript).

## Why Class Free OO is Hard To Grasp

### It is a Whole School of Thought

Most students in Computer Science or people that have self-taught themselves
programming have learned or picked up a popular OO language.
Whether that is Java, C#, C++, etc. does not matter.
These languages have inheritance built into them and strongly rely on you using
their pattern to properly use the language.
JavaScript even has its own paradigm of it: [Object.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype).

For many, the current paradigm for handling complexity is by utilizing interfaces and parent classes.
This works, but can get hairy when trying to call methods of
parents or parent's parents to extend functionality or
trying to decide what should be in a class, parent, or interface.

### Tools are Geared Around Inheritance

People are too dependent on their OOP focused IDE's to even want to do it another way.
Many of the restrictions and constraints of some languages
make programming so difficult an IDE is more-or-less required.
If I had to program C# code without an IDE, I would probably go nuts.
The sheer amount of ceremony, boilerplate, keywords, system libraries, constraints,
and gotchas in the language are too much for me to try and program with a text-editor and a compiler.
The IDE's offer all these tools for refactoring in an OOP sense it is hard to stray away.
Some people spin this as a benefit for the language because it has such an amazing IDE,
but I see it as a negative that the IDE is basically required to use the language in a proficient way.
The language is so complicated, not even the programmers can trust themselves.

## How Class Free OOP Can Benefit You

It actually can't benefit you if your language of choice can't do it in an easy way.
But if it is like JavaScript, there are lots of niceties you get out of it.
The weirdest thing for me is how simple of a language JavaScript is,
yet how flexible it is and how confusing it is to even experienced developers.

But in JavaScript at least, here are some things it gives you:

1. Smaller amounts of code
2. Simpler code that saves time
3. No crazy inheritance/interface graphs
4. Easily composable objects

Let's go over those real quickly.

You will write less.
You aren't writing boilerplate to define interfaces and figuring out the hierarchy
and implementing the functions on the class.
You are copying the properties straight to your object.
You can sort of view it as multi-inheritance limited to a single level
where all of the parents are merely describers.

Your code will be much simpler and flexible.
After you're done not writing tons of boilerplate and ceremony,
pat yourself on the back for saving that time and being able to see your bugs more easily.

You won't be making any decisions about if your parent's parent's parent class is doing too much or too little.
You'll be looking at the immediate thing you included and deciding if it is enough.

Do you have a button that needs rounded corners?
Cool, make a rounded-corners object.
Do you need a duck that has rounded corners too?
Cool, then include your rounded-corners object without worrying about what they
were inherited from.
Nobody cares about what you do with your objects in your private time.

## A Duck, an Alligator, and a Goat Revisited

```ts
function newAlligator() {
  var alligator = {
    name: "alligator",
    word: "grrr",
  };
  extend(alligator, withAnimal);
  extend(alligator, withWalking);
  extend(alligator, withSwimming);
  return alligator;
}

function newDuck() {
  var duck = {
    name: "duck",
    word: "quack",
  };
  extend(duck, withAnimal);
  extend(duck, withWalking);
  extend(duck, withFlying);
  extend(duck, withSwimming);
  return duck;
}

function newGoat() {
  var goat = {
    name: "goat",
    word: "baa",
  };
  extend(goat, withAnimal);
  extend(goat, withWalking);
  return goat;
}

var alligator = newAlligator();
alligator.talk();
alligator.swim();
alligator.walk();

var duck = newDuck();
duck.talk();
duck.fly();
duck.walk();

var goat = newGoat();
goat.talk();
goat.walk();

function extend(target, source) {
  Object.keys(source).forEach(function (key) {
    if (typeof target[key] !== "undefined") {
      return;
    }
    target[key] = source[key];
  });
}

var withAnimal = {
  name: "name",
  word: "word",
  talk: function () {
    console.log(this.name + " says " + this.word);
  },
};

var withFlying = {
  fly: function () {
    console.log("flap flap");
  },
};

var withSwimming = {
  swim: function () {
    console.log("splish splash");
  },
};

var withWalking = {
  walk: function () {
    console.log("stomp stomp");
  },
};
```
