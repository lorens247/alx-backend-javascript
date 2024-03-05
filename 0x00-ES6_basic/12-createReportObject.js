export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    // arrow func;
    getNumberOfDepartments: (employees) => Object.keys(employees).length,
  };
}
