import { categoryMarkers } from "./markers";
import { getFoundMarkers } from "./save-manager";

const filters = [
  { value: "card", label: "Cartes de cigarettes" },
  { value: "bone", label: "Os de dinosaure" },
  { value: "dreamcatcher", label: "Attrape-rêves" },
  { value: "easter", label: "Easter eggs" },
  { value: "hideout", label: "Hideout" },
  { value: "item", label: "Item" },
  { value: "request", label: "Item request" },
  { value: "landmark", label: "Landmark" },
  { value: "fish", label: "Poissons légendaires" },
  { value: "loot", label: "Loot" },
  { value: "misc", label: "Misc" },
  { value: "interest", label: "Points d'intérêts" },
  { value: "roberry", label: "Braquages" },
  { value: "carving", label: "Sculptures rocheuses" },
  { value: "shack", label: "Shack" },
  { value: "stranger", label: "Stranger" },
  { value: "treasure", label: "Trésors" },
  { value: "weapon", label: "Armes" },
];

const filtersContainer = document.querySelector(".filters-container");

filters.forEach((filter) => {
  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = filter.value;
  checkbox.checked = true;

  label.appendChild(checkbox);
  label.append(" " + filter.label);

  const popup = createProgressPopup(filter.value);
  filtersContainer.appendChild(label);
  label.appendChild(popup);
});

function createProgressPopup(category) {
  const popup = document.createElement("div");
  const text = document.createElement("h3");
  const barContainer = document.createElement("div");
  const bar = document.createElement("div");

  popup.className = "progress-popup";
  text.className = "item-progression-text";
  text.dataset.category = category;
  barContainer.className = "progress-bar-container";
  bar.className = "item-progress-bar";

  updateItemProgression(text);

  barContainer.appendChild(bar);
  popup.append(text, barContainer);

  return popup;
}

function getCategoryProgress(category) {
  const total = categoryMarkers[category].length;

  const found = getFoundMarkers().filter((id) =>
    id.startsWith(category + "-"),
  ).length;

  return { found, total };
}

export function updateItemProgression(text) {
  const category = text.dataset.category;
  const { found, total } = getCategoryProgress(category);

  text.textContent = `${found} / ${total}`;

  const percent = (found / total) * 100;

  // Need to put these conditions to make sure all DOM is loaded before calling bar
  const barContainer = text.nextElementSibling;
  if (!barContainer) return;

  const bar = barContainer.querySelector(".item-progress-bar");
  if (!bar) return;
  bar.style.width = percent + "%";
}
