const homeButton = document.getElementById("home-button")
const rateProfessorButton = document.querySelectorAll(".rate-professor-button");

rateProfessorButton.forEach(button => {
    button.addEventListener("click", function(){
        window.location.href = "feedback.html"
    })
})

homeButton.addEventListener("click", function(){
    window.location.href = "index.html"
})