class Faculty {
  constructor(name, department, courses, rating, difficulty) {
    this.name = name;
    this.department = department;
    this.courses = courses;
    this.rating = rating;
    this.difficulty = difficulty;
  }
  renderFacultyCard() {
    const cardNode = document.createElement("div");
    cardNode.className = "faculty-card";
    cardNode.innerHTML = `
    <span>${this.name}</span>
    <span>${this.department}</span>
    <span>${this.courses}</span>
    <span>${this.rating}</span>
    <span>${this.difficulty}</span>
    `;

    return cardNode;
  }
}

const facultyList = [
  new Faculty(
    "Dr. Alan Turing",
    "Computer Science",
    ["CS101", "CS301"],
    4.8,
    3.5,
  ),
  new Faculty(
    "Prof. Ada Lovelace",
    "Mathematics",
    ["MATH201", "CS102"],
    4.9,
    4.0,
  ),
  new Faculty(
    "Dr. Grace Hopper",
    "Computer Science",
    ["CS202", "CS404"],
    4.7,
    3.2,
  ),
];

const container = document.getElementById("facultyContainer");

facultyList.forEach((faculty) => {
  container.appendChild(faculty.renderFacultyCard());
});
