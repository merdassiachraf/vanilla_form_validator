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
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Check email is valid
const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value.length !== 0
    ? re.test(input.value.toLowerCase())
      ? showSuccess(input)
      : showError(input, "Email is not valid !!!")
    : null;
};

// Check match password
const matchPasswords = (password, password2) => {
  console.log(password2.value === password.value);
};

//Check required fields
const checkRequired = (inputArr) => {
  inputArr.map((input) => {
    input.value.trim() === ""
      ? showError(input, `${getFieldName(input)} is required`)
      : showSuccess(input);
  });
};

//Check input length
const checkLength = (input, min, max) => {
  input.value.length !== 0
    ? input.value.length < min
      ? showError(
          input,
          `${getFieldName(input)} must be at least ${min} characters`
        )
      : input.value.length > max
      ? showError(
          input,
          `${getFieldName(input)} must be less than ${max} characters`
        )
      : showSuccess(input)
    : null;
};

// Get passwords match
const checkPasswordsMatch = (input1, input2) => {
  input2.value.length !== 0
    ? input1.value !== input2.value
      ? showError(input2, "Passwords must match")
      : showSuccess(input2)
    : null;
};

// Get fieldname
const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Event listeners
form.addEventListener(
  "submit",
  (submit = (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  })
);
