import * as L from "leaflet";

import card from "./icons/cigarette-card.png";
import bone from "./icons/dinosaure-bone.png";
import dreamcatcher from "./icons/dreamcatcher.png";
import easter from "./icons/easter-egg.png";
import hideout from "./icons/gang-hideout.png";
import item from "./icons/item.png";
import request from "./icons/item-request.png";
import landmark from "./icons/landmark.png";
import fish from "./icons/legendary-fish.png";
import loot from "./icons/loot.png";
import misc from "./icons/misc.png";
import interest from "./icons/point-of-interest.png";
import roberry from "./icons/roberry.png";
import carving from "./icons/rock-carving.png";
import shack from "./icons/shack.png";
import stranger from "./icons/stranger.png";
import treasure from "./icons/treasure.png";
import weapon from "./icons/weapon.png";

const iconFiles = {
  card,
  bone,
  dreamcatcher,
  easter,
  hideout,
  item,
  request,
  landmark,
  fish,
  loot,
  misc,
  interest,
  roberry,
  carving,
  shack,
  stranger,
  treasure,
  weapon,
};

export const icons = {};

Object.keys(iconFiles).forEach((key) => {
  icons[key] = L.icon({
    iconUrl: iconFiles[key],
    iconSize: [33, 44],
    iconAnchor: [16, 44],
  });
});
