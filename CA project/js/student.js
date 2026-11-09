class Faculty {
  constructor(
    name,
    department,
    courses,
    overallRating,
    overallCourseDifficulty,
  ) {
    this.name = name;
    this.department = department;
    this.courses = courses;
    this.overallRating = overallRating;
    this.overallCourseDifficulty = overallCourseDifficulty;
  }
  renderFacultyCard() {
    const cardElement = document.createElement("div");
    cardElement.className = "faculty-card";
    cardElement.innerHTML = `
        <span class="faculty-card__name">${this.name}</span>
        <span class="faculty-card__department">Department of ${this.department}</span>
        <span class="faculty-card__courses">${this.courses}</span>
        <span class="faculty-card__overall-rating">Rating: ${this.overallRating}</span>
        <span class="faculty-card__overall-course-difficulty">Difficulty: ${this.overallCourseDifficulty}</span>
        <button class="faculty-rating__btn--open">rate this faculty</button>
        `;
    return cardElement;
  }
}

function openFacultyRatingMenu() {
  facultyRatingMenu.classList.remove("hidden")
}

const facultyCardContainer = document.getElementById("facultyCardContainer");
const facultyRatingMenu = document.getElementById("facultyRatingMenu")

const facultyList = [
  new Faculty(
    "Dr. Meow Paw",
    "Computer Science",
    ["CSE119", "CSE410"],
    9.4,
    7.8,
  ),
  new Faculty("Dr. Yo Gurt", "Physics", ["PHY120", "MTH320"], 8.4, 9.8),
];

facultyList.forEach((faculty) => {
  facultyCardContainer.appendChild(faculty.renderFacultyCard());
});

function closeFacultyRatingMenu() {
  facultyRatingMenu.classList.add("hidden")
}

const rateFacultyButtons = document.querySelectorAll(".faculty-rating__btn--open");
const closeFacultyRatingMenuButton = document.getElementById("closeFacultyRatingMenu");

rateFacultyButtons.forEach((button) => {
  button.addEventListener("click", openFacultyRatingMenu);
});

closeFacultyRatingMenuButton.addEventListener("click", closeFacultyRatingMenu);
