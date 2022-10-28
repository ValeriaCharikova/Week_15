function changeColour() {
  switch (document.getElementById("theme").value) {
    case "light":
      document.body.style.background = "white";
      break;
    case "dark":
      document.body.style.background = "black";
      break;
    case "grey":
      document.body.style.background = "grey";
      break;
  }
}
function check() {
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let passwordcheck = document.getElementById("passwordcheck");

  document.getElementById("errorMessage").innerHTML = "";

  if (name.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "Поле имя не заполнено <br/>";
  }
  if (surname.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "Поле фамилия не заполнено <br/>";
  }
  if (email.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "Поле имейл не заполнено <br/>";
  }
  if (password.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "Поле пароль не заполнено <br/>";
  }
  if (password.value.length <= 6) {
    document.getElementById("errorMessage").innerHTML +=
      "Пароль должен содержать больше 6 знаков <br/>";
  }
  if (passwordcheck !== password) {
    document.getElementById("errorMessage").innerHTML +=
      "Введённые пароли не совпадают";
  } else {
    alert("Добро пожаловать, " + name.value + surname.value + "!");
  }
}
