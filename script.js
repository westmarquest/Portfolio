// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Enlarge first application image
const firstApplicationImage = document.querySelector("#work img:first-child");
if (firstApplicationImage) {
  firstApplicationImage.classList.add("enlarged");
}

// Add more JavaScript functionality as needed
