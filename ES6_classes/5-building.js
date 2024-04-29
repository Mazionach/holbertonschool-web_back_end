export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    try {
      this.evacuationWarningMessage();
    } catch (error) {
      throw error;
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw Error('Class extending Building must override evacuationWarningMessage');
  }
}
