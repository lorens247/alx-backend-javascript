// define an interface for Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Lawrence",
  lastName: "Ikhidero",
  age: 35,
  location: "Niger Delta, Nigeria",
};

const student2: Student = {
  firstName: "Anthony",
  lastName: "Ikhidero",
  age: 30,
  location: "Lagos, Nigeria",
};

// create array containing the two students
const studentsList: Student[] = [student1, student2];

// Vanilla JS function to render a table with student data
function renderTable() {
  const table = document.createElement("table");

  // Create and append the table header
  const headerRow = table.insertRow();
  const headerCell1 = headerRow.insertCell(0);
  const headerCell2 = headerRow.insertCell(1);
  headerCell1.textContent = "First Name";
  headerCell2.textContent = "Location";

  // Iterate through the studentsList and create a row for each student
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

renderTable();
