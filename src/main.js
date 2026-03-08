import "./style.css";
import "./map";
import "./icons";
import "./markers";
import "./menu";
import "./save-manager";

import { updateProgression } from "./menu";
updateProgression();

import { categoryMarkers } from "./markers";
console.log(categoryMarkers);
import { getFoundMarkers } from "./save-manager";
console.log(getFoundMarkers());
