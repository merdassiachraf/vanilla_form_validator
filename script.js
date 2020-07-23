const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

//Show success outline
const showSuccess = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check email is valid
const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

// Check match password
const matchPasswords = (password, password2) => {
  console.log (password === password2);
};

// Event listeners
form.addEventListener(
  "submit",
  (submit = (e) => {
    e.preventDefault();

    username.value === ""
      ? showError(username, "User name is required !!!")
      : showSuccess(username);

    email.value === ""
      ? showError(email, "Email is required !!!")
      : !isValidEmail(email.value)
      ? showError(email, "Email is not valid !!!")
      : showSuccess(email);

    password.value === ""
      ? showError(password, "Password is required !!!")
      : showSuccess(password);
    !matchPasswords(password, password2)
      ? showError(password2, "Passwords must be match")
      : showSuccess(password2);
  })
);
