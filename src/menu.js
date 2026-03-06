import { map } from "./map";
import { categoryMarkers } from "./markers";
import { allMarkerIds } from "./markers";
import { getFoundMarkers } from "./save-manager";

const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const checkAllBtn = document.querySelector(".check-all-btn");
const uncheckAllBtn = document.querySelector(".uncheck-all-btn");
const labels = document.querySelectorAll("label");
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

  // Progress popup content display
  const itemProgressionText = document.querySelector(".item-progression-text");
});

// Global progression display
const progressionText = document.querySelector(".progression-text");
const progressBar = document.querySelector(".progress-bar");

export function updateProgression() {
  const totalMarkers = allMarkerIds.length;
  const foundedMarkersId = getFoundMarkers();
  const foundedMarkersNumber = foundedMarkersId.length;
  const percent = (foundedMarkersNumber / totalMarkers) * 100;

  progressionText.textContent =
    "Items trouvés : " + foundedMarkersNumber + " / " + totalMarkers;
  progressBar.style.width = percent + "%";

  return progressionText;
}

function getCategoryProgress(categoryMarkers) {
  const foundMarkers = getFoundMarkers();

  const found = categoryMarkers.filter((id) =>
    foundMarkers.includes(id),
  ).length;

  const total = categoryMarkers.length;

  const percent = (found / total) * 100;

  return { found, total, percent };
}
