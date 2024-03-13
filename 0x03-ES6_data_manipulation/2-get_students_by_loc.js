function getStudentsByLocation(students, city) {
  // check against the city passed in as arg;
  const cityStudents = students.filter((student) => student.location === city);

  return cityStudents;
}

export default getStudentsByLocation;
