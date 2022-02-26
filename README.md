# hash-id-js
hash-id-js is a command line program for identifying hash types based on [Zion3R's implementation](https://github.com/blackploit/hash-identifier).
This software is meant for enumeration, this is not a hash cracking tool, and it isn't definitive, the only way to be sure of the algorithm is after the hash has been reversed.

## Install
Using npm:
```
npm i @tashima42/hash-id
```

## Usage
* Import the package
* Pass a string as the argument
* Receive an array with possible hashing algorithms
* The array is ordered from most likely to less likely
```js
import hashId from "@tashima42/hash-id"

const possibleAlgorithms = hashId("571b4ba928ae62e103b54727721ebe56")
```

You can also import the individual algorithms, and the individual function will return true or false.    
Attention! you have to make sure to pass a valid string as the argument.
```js
import {MD5} from "@tashima42/hash-id/algorithms"

const isMD5 = MD5("571b4ba928ae62e103b54727721ebe56")
```
Or
```js
import * as algorithms from "@tashima42/hash-id/algorithms"

const isMD5 = algorithms.MD5("571b4ba928ae62e103b54727721ebe56")
```