const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    mobileMenu.classList.toggle("active");
  } else {
    sidebar.classList.add("active");
  }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
