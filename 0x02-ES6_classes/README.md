# ES6 Classes

### 1. Defining a Class:

To define a class in ES6, you use the `class` keyword:

```javascript
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}
```

### 2. Adding Methods to a Class:

You can add methods to a class by defining them within the class block:

```javascript
class Animal {
  // constructor...

  eat(food) {
    console.log(`${this.name} is eating ${food}`);
  }
}
```

### 3. Adding a Static Method to a Class:

Static methods are called on the class itself, not on instances of the class. You define static methods using the `static` keyword:

```javascript
class MathOperations {
  static add(x, y) {
    return x + y;
  }
}
// Call static method
let result = MathOperations.add(3, 5);
console.log(result); // Outputs: 8
```

### 4. Extending a Class:

You can create a subclass that inherits from another class using the `extends` keyword:

```javascript
class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound); // Call the constructor of the superclass
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks loudly!`);
  }
}
```

### 5. Metaprogramming and Symbols:

Metaprogramming involves writing code that manipulates code. Symbols in JavaScript are unique and immutable data types often used for metaprogramming. They can be used as property keys to prevent accidental name clashes.

```javascript
const mySymbol = Symbol('mySymbol');
const obj = {
  [mySymbol]: 'Hello, Symbol!',
};

console.log(obj[mySymbol]); // Outputs: Hello, Symbol!
```

Symbols can also be used in metaprogramming to define custom behaviors using methods like `Symbol.iterator` for custom iteration, `Symbol.toPrimitive` for custom conversion to a primitive value, etc.