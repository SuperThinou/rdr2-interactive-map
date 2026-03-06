import { allMarkerIds } from "./markers";
import { categoryMarkers } from "./markers";
import { updateProgression } from "./menu";

const overlay = document.querySelector(".map-overlay");
const saveManagerBtn = document.querySelector(".save-manager-btn");
const saveManagerPopup = document.querySelector(".save-manager-popup");
const closePopupBtn = document.querySelector(".close-popup-btn");

saveManagerBtn.addEventListener("click", () => {
  saveManagerPopup.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

closePopupBtn.addEventListener("click", () => {
  saveManagerPopup.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

export function getFoundMarkers() {
  return allMarkerIds.filter(
    (id) => localStorage.getItem("found-" + id) === "true",
  );
}

const exportBtn = document.querySelector(".save-download-btn");
const importInput = document.getElementById("importInput");
const importBtn = document.querySelector(".save-import-btn");

// Download an object containing saving informations
exportBtn.addEventListener("click", () => {
  const saveData = {
    version: "1.0",
    map: "rdr2",
    lastUpdated: Date.now(),
    foundMarkers: getFoundMarkers(),
  };

  const blob = new Blob([JSON.stringify(saveData, null, 2)], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const timestamp = Date.now();
  const formattedDate = formatDateForFilename(timestamp);
  const foundCount = getFoundMarkers().length;

  const a = document.createElement("a");
  a.href = url;
  a.download = `rdr2-save-${formattedDate}_${foundCount}collectibles-trouves.json`;
  a.click();

  URL.revokeObjectURL(url);
});

// Save Importation
importBtn.addEventListener("click", () => {
  importInput.value = "";
  importInput.click();
});

importInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);

      validateSave(data);
      loadSave(data);
    } catch (error) {
      alert("Fichier invalide.");
    }
  };

  reader.readAsText(file);
});

function validateSave(data) {
  if (!data.version) throw new Error("Version manquante");
  if (!Array.isArray(data.foundMarkers))
    throw new Error("Format de marqueurs invalide");
}

function loadSave(data) {
  // Reset all the markers on the map
  if (!confirm("Ta progression en cours va être écrasée. Continuer ?")) {
    return;
  }
  allMarkerIds.forEach((id) => {
    localStorage.setItem("found-" + id, "false");
  });

  // Apply the save
  data.foundMarkers.forEach((id) => {
    localStorage.setItem("found-" + id, "true");
  });

  alert("Sauvegarde importée avec succès !");
  updateProgression();
  refreshMap();
}

function refreshMap() {
  Object.values(categoryMarkers).forEach((markers) => {
    markers.forEach((marker) => {
      const isFound =
        localStorage.getItem("found-" + marker.customId) === "true";

      marker.setOpacity(isFound ? 0.4 : 1);
    });
  });
}

// Date formater for file name
function formatDateForFilename(timestamp) {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, "0");

  // Mois en lettres
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const month = months[date.getMonth()];

  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year}_${hours}h${minutes}`;
}
