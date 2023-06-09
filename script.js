const buttonSubscribe = document.getElementById("button");
const buttonDismiss = document.getElementById("button-2");
const mainContainer = document.querySelector(".main-container");
const emailInput = document.getElementById("email");
const success = document.querySelector(".main-container_success");
const emailForm = document.getElementById("email-form");
const errorM = document.querySelector(".errorM");
const sucessEmail = document.getElementById("pass-through");
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// Validation function: checks if theres any information in the email input the uses the is email valid fucntion to check if the email provided is valid
function validateInput() {
  // Email validation
  if (emailInput.value.trim() === "") {
    // Displays error message is no information is provided
    errorM.style.display = "block";
    emailInput.style.borderColor = "red";
    emailInput.style.backgroundColor = "#F2C4BA";
    return;
  } else {
    // Chexks if provided email is valid
    if (!isValidEmail(emailInput.value.trim())) {
      errorM.style.display = "block";

      errorM.innerText = "Provide a valid email";
      emailInput.style.borderColor = "red";
      return;
    }
  }
  // Displays the success container and hides the main
  // Hide container
  mainContainer.style.display = "none";
  success.style.display = "block";
  sucessEmail.innerText = emailInput.value;
}

function isValidEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Event listenr for the 'Subcribe' button
buttonSubscribe.addEventListener("click", function (event) {
  event.preventDefault();
  validateInput();
});

// Event listener for the 'Dismiss message' button, this restes the form.
buttonDismiss.addEventListener("click", function () {
  mainContainer.style.display = "flex";
  success.style.display = "none";
  errorM.style.display = "none";
  emailInput.value = "";
  emailInput.style.borderColor = "black";
  emailInput.style.backgroundColor = "";
});
