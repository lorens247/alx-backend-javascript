export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // override the toString method to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}
