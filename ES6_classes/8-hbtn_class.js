export default class HolbertonClass {
  constructor(size, alocation) {
    this._size = size;
    this._location = alocation;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
