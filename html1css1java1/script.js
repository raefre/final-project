const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const name = document.getElementById("nom");
const nameError = document.getElementById("nom-error");
const myElement1 = document.getElementById("nom-error1");
const myElement2 = document.getElementById("mdp");
const btn = document.getElementById("register-btn");

btn.addEventListener("click", function () {
  // houni chaine vide heya valeur false donc namel aksha (!) bch inajzm yotkhol lil if
  // donc ken name.value feragh kharej erreur
  console.log("err");
  if (!name.value) {
    nameError.innerHTML = "Name is Required";
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myElement1.value)) {myElement1 .innerHTML = "email is Required";
    
  }
});
const emailError = document.getElementById("email-error")
const tbn = document.getElementById("connexion-tbn")
tbn.addEventListener("click", function (event) {
  console.log("err");
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailError.value)) {emailError.innerHTML = "email is Required";
}
});
