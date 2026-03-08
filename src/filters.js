
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

  const popup = createProgressPopup(filter.label);
  filtersContainer.appendChild(label);
  label.appendChild(popup);
});

function createProgressPopup(labelText) {
  const popup = document.createElement("div");
  const text = document.createElement("h3");
  const barContainer = document.createElement("div");
  const bar = document.createElement("div");

  popup.className = "progress-popup";
  text.className = "item-progression-text";
  barContainer.className = "progress-bar-container";
  bar.className = "progress-bar";

  text.textContent = labelText;

  barContainer.appendChild(bar);
  popup.append(text, barContainer);

  return popup;
}
