function getStudentIdsSum(students) {
  // accumulator - (uses this)the reduce function iterates over the elements in the array.
  // inti'd (second arg to reduce) and is updated during each iteration.
  const sumOfIds = students.reduce((accumulator, student) => accumulator + student.id, 0);

  return sumOfIds;
}

export default getStudentIdsSum;
