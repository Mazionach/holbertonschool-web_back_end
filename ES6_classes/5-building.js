export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this.sqft;
  }

  evacuationWarningMessage() {
    throw Error('Class extending Building must override evacuationWarningMessage');
  }
}
