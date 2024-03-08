const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneCarSymbol]() {
    // create a new instance of the same class
    return new this.constructor();
  }

  // expose the cloneCar method to the public
  cloneCar() {
    return this[cloneCarSymbol]();
  }
}
