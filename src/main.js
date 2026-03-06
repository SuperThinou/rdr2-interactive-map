import "./style.css";
import "./map";
import "./icons";
import "./markers";
import "./menu";
import "./save-manager";

import { updateProgression } from "./menu";
updateProgression();

import { getCategoryProgress } from "./menu";
import { categoryMarkers } from "./markers";
console.log(categoryMarkers);
