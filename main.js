// const xhttp = new XMLHttpRequest();
// xhttp.open("GET", "https://www.youtube.com/embed/zsCD5XCu6CM", true);
// popup

function myFunction() {
  const popup = document.querySelector(".popup");
  popup.classList.toggle("show");
}

// navbar

const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");
toggleButton.addEventListener("click", function () {
  for (let i = 0; i < navbarLinks.length; i++)
    navbarLinks[i].classList.toggle("active");
});

// form

const form = document.getElementById("form");
const locations = document.getElementById("locations");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  checking();
  inputControl.classList.remove("error");
};

let counter = 0;

function checking() {
  counter++;
  if (counter === 4) console.log("przesłanie formularza");
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const locationValue = locations.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (locationValue === "") {
    setError(locations, "Location is required");
  } else {
    setSuccess(locations);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};
