export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify types of attributes;
    if (typeof name === 'string' && typeof length === 'number' && Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._name = name;
      this._length = length;
      this._students = students;
    } else {
      throw TypeError('Invalid attribute type');
    }
  }

  // getter for name attribute
  get name() {
    return this._name;
  }

  // setter for name attribute
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  // getter for length attribute
  get length() {
    return this._length;
  }

  // setter for length attribute
  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  // getter for students attribute
  get students() {
    return this._students;
  }

  // setter for students attribute
  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw TypeError('Students must be an array of strings');
    }
  }
}
