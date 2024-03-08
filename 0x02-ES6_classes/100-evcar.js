import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  // override the cloneCar method to return an instance of Car
  cloneCar() {
    this._car = new Car();
    return this._car;
  }
}
