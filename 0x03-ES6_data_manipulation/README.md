# ES6 Data Manipulation Guide

In ECMAScript 2015 (ES6), several new data manipulation features were introduced to JavaScript, enhancing the capabilities of the language. This guide provides an overview of ES6 features for manipulating arrays, typed arrays, set data structure, map data structure, and weak map.

## Array

The Array object in JavaScript is a global object that is used to store multiple values in a single variable. ES6 introduced several new methods for manipulating arrays:

1. **`Array.from()`**: Creates a new, shallow-copied Array instance from an array-like or iterable object.

   ```javascript
   const set = new Set(['foo', 'bar']);
   const array = Array.from(set);
   console.log(array); // Output: ['foo', 'bar']

    Array.of(): Creates a new Array instance with a variable number of arguments, regardless of the number or type of the arguments.

    javascript

const array = Array.of(1, 2, 3);
console.log(array); // Output: [1, 2, 3]

Array.prototype.find(): Returns the value of the first element in the array that satisfies the provided testing function.

javascript

    const numbers = [10, 20, 30];
    const result = numbers.find(num => num > 15);
    console.log(result); // Output: 20

2. Typed Array

Typed arrays provide a way to work with binary data in JavaScript. They are array-like objects that provide a mechanism for accessing raw binary data.

    Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array: These typed array constructors create new typed array objects representing an array of the specified numeric type.

    javascript

    const buffer = new ArrayBuffer(16);
    const int8View = new Int8Array(buffer);
    int8View[0] = 42;
    console.log(int8View); // Output: Int8Array [42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

3. Set Data Structure

The Set object in JavaScript allows you to store unique values of any type, whether primitive values or object references.

    add(): Adds a new element with the specified value to the Set.

    javascript

const set = new Set();
set.add('foo');
set.add('bar');
console.log(set); // Output: Set {'foo', 'bar'}

delete(): Removes the specified element from the Set.

javascript

set.delete('foo');
console.log(set); // Output: Set {'bar'}

has(): Returns a boolean indicating whether an element with the specified value exists in the Set.

javascript

    console.log(set.has('foo')); // Output: false

4. Map Data Structure

The Map object in JavaScript is a collection of key-value pairs where both the keys and values can be objects or primitive values.

    set(): Sets the value for the key in the Map object. Returns the Map object.

    javascript

const map = new Map();
map.set('foo', 'value1');
map.set('bar', 'value2');
console.log(map); // Output: Map {'foo' => 'value1', 'bar' => 'value2'}

get(): Returns the value associated with the specified key.

javascript

console.log(map.get('foo')); // Output: value1

delete(): Removes the specified element from the Map.

javascript

    map.delete('foo');
    console.log(map); // Output: Map {'bar' => 'value2'}

5. WeakMap

WeakMap is a collection of key-value pairs where the keys must be objects and the values can be arbitrary values.

    Usage: WeakMap is useful for creating private properties in JavaScript classes because the keys are weakly referenced.

    javascript

    let key1 = {};
    let key2 = {};
    const weakMap = new WeakMap([[key1, 'value1']]);
    weakMap.set(key2, 'value2');
    console.log(weakMap.get(key1)); // Output: value1

    Weakness: Unlike Map, WeakMap does not support iteration, clear(), or size.
