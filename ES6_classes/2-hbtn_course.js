export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }
  set name(n) {
    if (typeof n != "string") {
      throw new Error("TypeError", "Name must be a string");
    }
    this._name = n;
  }

  get length() {
    return this._length;
  }
  set length(l) {
    if (typeof l != "number") {
      throw new Error("TypeError", "Length must be a number");
    }
    this._length = l;
  }

  get students() {
    return this._students;
  }
  set students(s) {
    if (typeof s != "array") {
      throw new Error("TypeError", "Students must be an array of strings");
    }
    for (const i of s) {
      if (typeof i != "string") {
        throw new Error("TypeError", "Students must be an array of strings");
      }
    }
    this._students = s;
  }
}
