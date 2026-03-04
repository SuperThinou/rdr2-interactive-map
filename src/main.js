import "./style.css";
import rdr2Map from "./rdr2-map.jpg";
import * as L from "leaflet";

const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -2.6,
});

const imageWidth = 9000;
const imageHeight = 7004;

const bounds = [
  [0, 0],
  [imageHeight, imageWidth],
];
const image = L.imageOverlay(rdr2Map, bounds).addTo(map);

map.fitBounds(bounds);
