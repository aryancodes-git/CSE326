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

  renderFacultySelector() {
    const option = document.createElement("option");
    option.value = this.name;
    option.innerText = this.name;
    return option;
  }
}

let selectedFaculty = null;

function openFacultyRatingMenu() {
  facultyRatingMenu.classList.remove("hidden");
  selectedFaculty = this.parentElement.querySelector(
    ".faculty-card__name",
  ).textContent;
  renderMenuCourses(selectedFaculty);
}

const facultyCardContainer = document.getElementById("facultyCardContainer");

// faculty rating form
const facultyRatingMenu = document.getElementById("facultyRatingMenu");
const ratingMenuFacultySelector = document.getElementById(
  "ratingMenuFacultySelector",
);
const ratingMenuCourseSelector = document.getElementById(
  "ratingMenuCourseSelector",
);

function renderMenuCourses(facultyName) {
  // Clear the existing options
  ratingMenuCourseSelector.innerHTML = "";

  // Find the faculty by name
  const faculty = facultyList.find((f) => f.name === facultyName);

  if (faculty) {
    ratingMenuFacultySelector.value = faculty.name; // Set the selected faculty in the dropdown
    // Add each course as an option
    faculty.courses.forEach((course) => {
      const option = document.createElement("option");
      option.value = course;
      option.innerText = course;
      ratingMenuCourseSelector.appendChild(option);
    });
  }
}

const facultyList = [
  new Faculty(
    "Dr. Meow Paw",
    "Computer Science",
    ["CSE119", "CSE410"],
    9.4,
    7.8,
  ),
  new Faculty("Dr. Yo Gurt", "Physics", ["PHY120", "MTH320"], 8.4, 9.8),
  new Faculty("Dr. Mike", "Chemistry", ["CHE110", "CAP441"], 8.2, 8.8),
];

facultyList.forEach((faculty) => {
  facultyCardContainer.appendChild(faculty.renderFacultyCard());
  ratingMenuFacultySelector.appendChild(faculty.renderFacultySelector());
});

function closeFacultyRatingMenu() {
  facultyRatingMenu.classList.add("hidden");
}

const rateFacultyButtons = document.querySelectorAll(
  ".faculty-rating__btn--open",
);
const closeFacultyRatingMenuButton = document.getElementById(
  "closeFacultyRatingMenu",
);

rateFacultyButtons.forEach((button) => {
  button.addEventListener("click", openFacultyRatingMenu);
});

closeFacultyRatingMenuButton.addEventListener("click", closeFacultyRatingMenu);

// home button
const homeButton = document.getElementById("topbarCenterButtonHome");

homeButton.addEventListener("click", function () {
  window.location.href = "index.html";
});
