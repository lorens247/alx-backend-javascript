export default class Building {
  constructor(sqft = 0) {
    // abstract method - evacuation warning message
    if (this.constructor !== Building
          && typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
