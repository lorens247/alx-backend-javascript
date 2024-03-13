function getListStudentIds(arrayOfObjects) {
  // check for whether the input is an array
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }

  const studentIds = arrayOfObjects.map((student) => student.id);

  return studentIds;
}

export default getListStudentIds;
