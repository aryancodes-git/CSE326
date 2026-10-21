const loginForm = document.querySelector(".login-field");
const profileName = document.querySelector("#profile-name");

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = loginForm.querySelector("#username").value.trim();

        if (!username) {
            return;
        }

        sessionStorage.setItem("username", username);
        window.location.href = "index.html";
    });
}

if (profileName) {
    profileName.textContent = sessionStorage.getItem("username") || "User";
}
