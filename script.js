let toggleButton = document.querySelector('.dark-button');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

let signInBtn = document.getElementById("signIn");
let signUpBtn = document.getElementById("signUp");
let app = document.querySelector(".app");
signInBtn.addEventListener("click", () => {
  app.classList.remove("swap");
});
signUpBtn.addEventListener("click", () => {
  app.classList.add("swap");
});