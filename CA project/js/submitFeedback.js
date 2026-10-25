const rateProfessorButton = document.querySelectorAll(".rate-professor-button");

rateProfessorButton.forEach(button => {
    button.addEventListener("click", function(){
        window.location.href = "feedback.html"
    })
})