const dropdownDescription = document.querySelector(".dropdown-description");
const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", () => {
  dropdownDescription.classList.toggle("dropdown-description--toggle");
});
