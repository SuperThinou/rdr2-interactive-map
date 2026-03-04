import "./style.css";
import "./map";
import "./icons";
import "./markers";

const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

hamburgerBtn.addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("hidden");
});
closeMenuBtn.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("hidden");
});
