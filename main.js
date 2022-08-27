const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");
toggleButton.addEventListener("click", function () {
  for (let i = 0; i < navbarLinks.length; i++)
    navbarLinks[i].classList.toggle("active");
});
