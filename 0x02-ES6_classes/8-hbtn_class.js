const _sizeSymbol = Symbol('size');
const _locationSymbol = Symbol('location');

export default class HolbertonClass {
  constructor(size, location) {
    this[_sizeSymbol] = size;
    this[_locationSymbol] = location;
  }

  // Cast to Number, Cast to String
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this[_sizeSymbol];
    }
    if (hint === 'string') {
      return this[_locationSymbol];
    }
    return this[_locationSymbol];
  }
}
