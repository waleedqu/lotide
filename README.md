# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @waleedq/lotide`

**Require it:**

`const _ = require('@waleedq/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

head() - returns the first element of a given array 

tail() - returns everything in an array except the first element

middle() - returns the middle element(s) in an array 

assertArraysEqual() - assertion for whether two arrays are equal 

assertEqual() - assertion to test if two values are equal 

eqArrays() - tests whether two arrays are equal or not

assertObjectsEqual() - assertion for whether two objects are equal or not

countLetters() - counts all the instances of a letter in a string

countOnly() - takes in items and returns a specific subset

eqObjects() - compares two objects

findKey() - scans an object and returns the first key from the callback 

findKeyByValue() - searches an object for a specific key 

flatten() - flattens a nested array in to a single level array 

letterPositions() - returns all the indices in a string where each character is found 

map() - creates a new array with the results from calling a functiion on every element in an array

takeUntil() - returns a slice of an array with elements from the beginning

without - removes elements from an array
