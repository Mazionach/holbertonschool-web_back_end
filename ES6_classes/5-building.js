export abstract class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  abstract evacuationWarningMessage() {
    void;
  }
}
