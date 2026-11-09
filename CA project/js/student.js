const homeButton = document.getElementById("home-button");
const rateProfessorButtons = document.querySelectorAll(".rate-professor-button");
const rateProfessorModalContainer = document.getElementById("rateProfessorModalContainer");
const closeModalButton = document.getElementById("closeModalButton");
const cancelModalButton = document.getElementById("cancelModalButton");
const rateProfessorForm = document.getElementById("rateProfessorForm");
const facultySelect = document.getElementById("facultySelect");
const ratingRange = document.getElementById("ratingRange");
const ratingValue = document.getElementById("ratingValue");
const difficultyRange = document.getElementById("difficultyRange");
const difficultyValue = document.getElementById("difficultyValue");

function openRateProfessor(e) {
  if (e && e.target) {
    const card = e.target.closest(".faculty-card");
    if (card) {
      const nameElem = card.querySelector(".teacher-name");
      if (nameElem && facultySelect) {
        const teacherName = nameElem.textContent.trim();
        let matched = false;
        for (let option of facultySelect.options) {
          if (option.text.includes(teacherName) || option.value.includes(teacherName)) {
            facultySelect.value = option.value;
            matched = true;
            break;
          }
        }
        if (!matched) {
          const newOpt = new Option(teacherName, teacherName);
          facultySelect.add(newOpt);
          facultySelect.value = teacherName;
        }
      }
    }
  }

  if (rateProfessorModalContainer) {
    rateProfessorModalContainer.classList.remove("hidden");
  }
}

function closeRateProfessor() {
  if (rateProfessorModalContainer) {
    rateProfessorModalContainer.classList.add("hidden");
  }
}

rateProfessorButtons.forEach((button) => {
  button.addEventListener("click", openRateProfessor);
});

const sidebarButtons = document.querySelectorAll(".sidebar-button");
sidebarButtons.forEach((button) => {
  if (button.textContent.trim() === "Submit Feedback") {
    button.addEventListener("click", openRateProfessor);
  }
});

if (closeModalButton) {
  closeModalButton.addEventListener("click", closeRateProfessor);
}

if (cancelModalButton) {
  cancelModalButton.addEventListener("click", closeRateProfessor);
}

if (rateProfessorModalContainer) {
  rateProfessorModalContainer.addEventListener("click", (e) => {
    if (e.target === rateProfessorModalContainer) {
      closeRateProfessor();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    rateProfessorModalContainer &&
    !rateProfessorModalContainer.classList.contains("hidden")
  ) {
    closeRateProfessor();
  }
});

if (ratingRange && ratingValue) {
  ratingRange.addEventListener("input", () => {
    ratingValue.textContent = Number(ratingRange.value).toFixed(1);
  });
}

if (difficultyRange && difficultyValue) {
  difficultyRange.addEventListener("input", () => {
    difficultyValue.textContent = Number(difficultyRange.value).toFixed(1);
  });
}

if (rateProfessorForm) {
  rateProfessorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const professor = facultySelect ? facultySelect.value : "Professor";
    alert(`Thank you for submitting your feedback for ${professor}!`);
    rateProfessorForm.reset();
    if (ratingValue && ratingRange) ratingValue.textContent = Number(ratingRange.value).toFixed(1);
    if (difficultyValue && difficultyRange) difficultyValue.textContent = Number(difficultyRange.value).toFixed(1);
    closeRateProfessor();
  });
}

if (homeButton) {
  homeButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
