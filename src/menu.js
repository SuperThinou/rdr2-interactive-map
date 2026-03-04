import { map } from "./map";
import { categoryMarkers } from "./markers";

const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const checkAllBtn = document.querySelector(".check-all-btn");
const uncheckAllBtn = document.querySelector(".uncheck-all-btn");
const checkboxes = document.querySelectorAll(".menu input[type=checkbox]");

hamburgerBtn.addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("hidden");
});
closeMenuBtn.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("hidden");
});

// Filter Menu
checkAllBtn.addEventListener("click", () => {});
uncheckAllBtn.addEventListener("click", () => {});

checkAllBtn.addEventListener("click", () => {
  checkboxes.forEach((cb) => {
    cb.checked = true;
    const category = cb.value;
    if (categoryMarkers[category]) {
      categoryMarkers[category].forEach((marker) => {
        marker.addTo(map);
      });
    }
  });
});

uncheckAllBtn.addEventListener("click", () => {
  checkboxes.forEach((cb) => {
    cb.checked = false;
    const category = cb.value;
    if (categoryMarkers[category]) {
      categoryMarkers[category].forEach((marker) => {
        map.removeLayer(marker);
      });
    }
  });
});

checkboxes.forEach((cb) => {
  cb.addEventListener("change", () => {
    const category = cb.value;
    const show = cb.checked;

    if (categoryMarkers[category]) {
      categoryMarkers[category].forEach((marker) => {
        if (show) marker.addTo(map);
        else map.removeLayer(marker);
      });
    }
  });
});
