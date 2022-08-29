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
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const guest = document.getElementById("guest");

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

// const isValidEmail = (email) => {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

const validateInputs = () => {
  const locationValue = locations.value.trim();
  const checkinValue = checkin.value.trim();
  const checkoutValue = checkout.value.trim();
  const guestValue = guest.value.trim();

  if (locationValue === "") {
    setError(locations, "Location is required");
  } else {
    setSuccess(locations);
  }

  if (checkinValue === "") {
    setError(checkin, "Check in is required");
  } else {
    setSuccess(checkin);
  }

  if (checkoutValue === "") {
    setError(checkout, "Check out is required");
  } else {
    setSuccess(checkout);
  }

  if (guestValue === "") {
    setError(guest, "Guest is required");
  } else {
    setSuccess(guest);
  }
};
