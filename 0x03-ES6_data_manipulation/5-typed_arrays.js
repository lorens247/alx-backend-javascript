function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // ArrayBuffer with the spec-length
  const buffer = new ArrayBuffer(length);

  // a DataView to manipulate the ArrayBuffer
  const dataView = new DataView(buffer);

  // set the Int8 value at the spec-position
  dataView.setInt8(position, value);

  return dataView;
}

export default createInt8TypedArray;
