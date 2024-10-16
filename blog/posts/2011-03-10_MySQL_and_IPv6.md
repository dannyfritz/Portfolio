---
title: "MySQL and IPv6"
summary: "How to represent large numbers in MySQL"
date: 2011-03-10T00:00
---
<post-header />

I work on DNS Management software for Purdue's network security department called [Roster](http://code.google.com/p/roster-dns-management/).
It is a very fun and interesting project to work on.
I'm constantly finding myself way over my head on features I am implementing.
Making it a learning experience in the process.

My current issue once again requires me to read up on key issues.
I will be [indexing and keying ipv6](http://code.google.com/p/roster-dns-management/issues/detail?id=79) from a MySQL database.

Easy you say, just insert the IP in the database and be done with it! But wait!
This works just fine for [IPv4](http://en.wikipedia.org/wiki/Ipv4) because an IPv4 address as a decimal is only 32 bits.
Soon, you will find it doesn't work so easily for the 128bit [IPv6](http://en.wikipedia.org/wiki/Ipv6) counterpart.

Get ready for a doozy of a post.

We're going to be using our fun friend, [bit ops](http://en.wikipedia.org/wiki/Bitwise_operation).
Now, don't be confusing that with sarcasm, I actually do love bit ops.
But beware, we will be doing maths very soon!
And we will be using the [<<](http://en.wikipedia.org/wiki/Bitwise_operation#Logical_shift) and
[&](http://en.wikipedia.org/wiki/Bitwise_operation#AND) binary operations,
the magical mathematical functions computer science majors like to keep to themselves.

## How big is IPv4?

- $255.255.255.255$ is four sets of $2^8$.
- Therefore, the biggest IPv4 address is $2^{(8*4)} = 2^{32} = 4,294,967,295$.
- $4,294,967,296-1$ is half the size a SQL long int. This causes no hurdles for the database.

## Converting an IPv4 address to a decimal number.

- Let's convert $192.168.0.1$ into a decimal number.
- First, we will split the IP address into 4 parts by '.' resulting in $A1=192$ $A2=168$ $A3=0$ $A4=1$.
- $Dec$ denotes our resulting decimal representation of the IP address.
- $Dec = A4+A3<<8+A2<<16+A1<<24$ $= 1+0<<8+168<<16+192<<24$ $= 1+0+11010048+3221225472 = 3232235521$

## How big is IPv6?

- $\textrm{FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF}$ is eight sets of $2^{16}$.
- Therefore, the biggest IPv6 address is $2^{(16*8)}$ $= 2^{128}$ $= 340,282,366,920,938,463,463,374,607,431,768,211,456$.
  A very large number.
- This is twice the size as a SQL long int. Uh oh.

## Converting an IPv6 address to a decimal number.

- Let's convert $\textrm{2001:1::200:1}$ $= \textrm{2001:1:0:0:0:0:200:1}$ into a decimal number.
- First, we will split the IP address into 8 parts by ':' resulting in
  $A1=2001$ $A2=1$ $A3=0$ $A4=0$ $A5=0$ $A6=0$ $A7=200$ $A8=1$.
- $Dec$ denotes our resulting decimal representation of the IP address.
- $Dec = A8 + A7 << 16 + A6 << 32 + A5 << 48$
  $+ A4 << 64 + A3 << 80 + A2 << 96 + A1 << 112$
  $= 1 + 200 << 16 + 0 << 32 + 0 << 48$
  $+ 0 << 64 + 0 << 80 + 1 << 96 + 2001 << 112$
  $= 1 + 200 << 16 + 1 << 96 + 2001 << 112$
  $= 1 + 13107200$
  $+ 79228162514264337593543950336$
  $+ 10389786013928190084689523154769412096$
  $= 10389786093156352598953860748326469633$

Oh no, so it can not be done!
IPv6 is simply far too large to insert into a 64bit int space! But wait,
maybe we can split it into two 64bit integers for upper and lower and use that!
And that would be the answer:

## How do you split an IPv6 into 2 64bit ints?

- We want to store $\textrm{2001:1:0:0:0:0:200:1}$ as a key in SQL
- $Upper$ denotes the upper 64 bits and $Lower$ denotes the bottom 64 bits.
- $Upper$ $= \textrm{2001:1:0:0:0:0:200:1 \&}$ $\textrm{FFFFFFFFFFFFFFFF0000000000000000}$ $= \textrm{2001:1:0:0}$
- $Lower$ $= \textrm{2001:1:0:0:0:0:200:1 \&}$ $\textrm{FFFFFFFFFFFFFFFF}$ $= \textrm{0:0:200:1}$

Now comes the fun part: [CIDR Blocks](http://en.wikipedia.org/wiki/CIDR).
However, CIDR blocks isn't so bad of a guy.

The reason for keying the database by IP address is that we can do selections
on blocks of IP addresses quickly.
Currently, the process is to dump the entire database into a python data
structure and then to [exhaustively check if each IP exists](http://code.google.com/p/roster-dns-management/source/browse/trunk/roster-core/roster_core/core_helpers.py?r=524#208)
or not.

This works, but when you are asking for larger [subnets](http://en.wikipedia.org/wiki/Subnetwork),
it starts becoming incredibly taxing and takes a long time.
A class C subnet, $255.255.255.0$, includes 256 IP addresses.
A class B subnet, $255.255.0.0$, includes $255^2 = 65026$ IP addresses.
And a class A subnet, $255.0.0.0$, includes $255^3 = 16581376$ IP addresses.
Not to mention the possibility to try and grab a CIDR block of the subnet $0.0.0.0$
and checking for $255^4 = 4228250626$ IP addresses by literally checking each one.
This is not a good solution.
And I'll just throw it out there that an IPv6 class A subnet $FFFF:0:0:0:0:0:0:0$
is about $2 x 10^149$ IP addresses.
Not something you want to exhaustively check for.

With the database keyed by IP address, you just insert the lower IP address
and the upper IP address and the database will do what it does best and return
the according range of IP addresses.
Simple.
