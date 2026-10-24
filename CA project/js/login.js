const loginDropdown = document.getElementById("login-selection")
const loginButton = document.getElementById("login-button")


redirectUrl = "feedback.html"

loginDropdown.addEventListener("change", function(event){
    const selectedValue = event.target.value;

    if (selectedValue == "admin"){
        redirectUrl = "admin.html"
    } else if (selectedValue == "student"){
        redirectUrl = "index.html"
    }
})

loginButton.addEventListener("click", function(){
    window.location.href = redirectUrl
})

