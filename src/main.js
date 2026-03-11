import "./style.css";
import "./map";
import "./icons";
import "./markers";
import "./menu";
import "./save-manager";

import { updateGlobalProgression } from "./menu";
import { updateItemProgression } from "./filters";

updateGlobalProgression();

document.querySelectorAll(".item-progression-text").forEach((text) => {
  updateItemProgression(text);
});
