export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // iterate over the report iterator;
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  return employeeNames.join(' | ');
}
