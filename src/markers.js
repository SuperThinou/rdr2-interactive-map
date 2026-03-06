import * as L from "leaflet";
import { map } from "./map";
import { icons } from "./icons";
import { updateProgression } from "./menu";

export let allMarkerIds = [];
export const categoryMarkers = {};

function createMarker(id, lat, lng, label, category) {
  allMarkerIds.push(id);

  const isFound = localStorage.getItem("found-" + id) === "true";

  const options = {
    opacity: isFound ? 0.4 : 1,
    icon: icons[category] ?? icons.item,
  };
  const marker = L.marker([lat, lng], options).addTo(map);
  marker.category = category;
  marker.customId = id;

  marker.bindPopup(label);

  marker.on("click", () => {
    const current = localStorage.getItem("found-" + id) === "true";

    // Confirmation ask
    const confirmChange = window.confirm("T'as trouvé ??");
    if (confirmChange) {
      localStorage.setItem("found-" + id, !current);
      marker.setOpacity(!current ? 0.4 : 1);
      updateProgression();
    }
  });

  // Automatically put the marker in the right category
  if (!categoryMarkers[category]) categoryMarkers[category] = [];
  categoryMarkers[category].push(marker);

  return marker;
}

// Marqueurs : Cartes de cigarettes
createMarker("card-1", 1875, 1228, "Desert Fan Palm", "card");
createMarker("card-2", 1867, 1299, "Carolina Lupine", "card");
createMarker("card-3", 1926, 1319, "Jesse Raymond", "card");
createMarker("card-4", 1857, 1389, "Billy Midnight", "card");
createMarker("card-5", 1820, 2870, "The Grizzlies", "card");
createMarker("card-6", 2127, 2795, "Landon Rickets", "card");
createMarker("card-7", 2147, 2728, "Armadillo", "card");
createMarker("card-8", 2178, 2763, "Hungarian Halfbred", "card");
createMarker("card-9", 2286, 3707, "Irene Grubb", "card");
createMarker("card-10", 3019, 5042, "Aldous Bramley", "card");
createMarker("card-11", 3136, 5026, "Sadie Russell", "card");
createMarker("card-12", 3180, 5028, "Blackwater", "card");
createMarker("card-13", 3215, 5112, "Black Belle", "card");
createMarker("card-14", 3154, 4941, "Typewriter", "card");
createMarker("card-15", 3213, 4917, "Evelyn Miller", "card");
createMarker("card-16", 3753, 4814, "Stage coach", "card");
createMarker("card-17", 3863, 4286, "Coastal Redwood", "card");
createMarker("card-18", 3915, 4279, "Elephant Carriage", "card");
createMarker("card-19", 3915, 4252, "Elsie Rose", "card");
createMarker("card-20", 4581, 3815, "Black Widow Spider", "card");
createMarker("card-21", 4593, 3808, "Blazing Star", "card");
createMarker("card-22", 4788, 3911, "Augusta Tremlow", "card");
createMarker("card-23", 4789, 3922, "Geraldine Emerson", "card");
createMarker("card-24", 4769, 3957, "Bart Love", "card");
createMarker("card-25", 4781, 3960, "Electrical Execution", "card");
createMarker("card-26", 4517, 4648, "Ardennes", "card");
createMarker("card-27", 4150, 5187, "Andalusian", "card");
createMarker("card-28", 4476, 5003, "Mustang", "card");
createMarker("card-29", 4484, 5036, "Dutch Warmblood", "card");
createMarker("card-30", 5124, 4588, "Agnes Guyon", "card");
createMarker("card-31", 5549, 4877, "Felix Hawley", "card");
createMarker("card-32", 5585, 5351, "Jack Hall Gang", "card");
createMarker("card-33", 5035, 5128, "Capt. Jack Page", "card");
createMarker("card-34", 5028, 5138, "Edwin A. Rowe", "card");
createMarker("card-35", 4940, 5385, "Charles Chatenay", "card");
createMarker("card-36", 4859, 5493, "Franck Heck", "card");
createMarker("card-37", 4845, 5449, "Cylinder Photograph", "card");
createMarker("card-38", 4780, 5385, "Isadore Reid", "card");
createMarker("card-39", 4763, 5409, "Nettie Palmer", "card");
createMarker("card-40", 4734, 5349, "Leviticus Cornwall", "card");
createMarker("card-41", 4715, 5479, "Fay Delaro", "card");
createMarker("card-42", 4710, 5544, "Valentine", "card");
createMarker("card-43", 5180, 5660, "Otis Miller Boys", "card");
createMarker("card-44", 4991, 5861, "Snapping Turtle", "card");
createMarker("card-45", 3922, 5422, "Tall Trees", "card");
createMarker("card-46", 3946, 5415, "Rio Bravo", "card");
createMarker("card-47", 3675, 5959, "Large Mouth Bass", "card");
createMarker("card-48", 5542, 6144, "Pauline Henderson", "card");
createMarker("card-49", 4703, 6081, "William Sleicher", "card");
createMarker("card-50", 4703, 6085, "Maud Engel", "card");
createMarker("card-51", 4770, 6158, "General Quincy Harris", "card");
createMarker("card-52", 4881, 6302, "Leila Stetson", "card");
createMarker("card-53", 4411, 6395, "Mittie Comstock", "card");
createMarker("card-54", 4596, 6573, "George Dixie", "card");
createMarker("card-55", 4490, 6776, "Goat Carriage", "card");
createMarker("card-56", 4506, 6833, "Theobaud Getzin", "card");
createMarker("card-57", 4441, 6844, "Chicago", "card");
createMarker("card-58", 4850, 6843, "W.G. Hoyt", "card");
createMarker("card-59", 5406, 7029, "Turkoman", "card");
createMarker("card-60", 5947, 6943, "Slim Grant", "card");
createMarker("card-61", 6018, 7680, "Electric Lightbulb", "card");
createMarker("card-62", 5872, 7630, "Isabelle Barlow", "card");
createMarker("card-63", 5788, 7641, "Hattie Langtry", "card");
createMarker("card-64", 5247, 7840, "Longleaf Pine", "card");
createMarker("card-65", 5256, 7862, "Isabelle Standish", "card");
createMarker("card-66", 5295, 7938, "Annesburg", "card");
createMarker("card-67", 5307, 7967, "Edwin Singerly", "card");
createMarker("card-68", 5305, 8008, "Preston T. Stephenson", "card");
createMarker("card-69", 5252, 8027, "Revolver", "card");
createMarker("card-70", 5280, 8076, "Packet Ship", "card");
createMarker("card-71", 4691, 7284, "Bluejay", "card");
createMarker("card-72", 4691, 7291, "Pheasant", "card");
createMarker("card-73", 4815, 7713, "Butcher Brothers", "card");
createMarker("card-74", 4768, 7698, "Percy Wood", "card");
createMarker("card-75", 4770, 7838, "Hummingbird Sage", "card");
createMarker("card-76", 4441, 7620, "Panther", "card");
createMarker("card-77", 4429, 7628, "San Fransisco", "card");
createMarker("card-78", 4631, 7898, "Louis Durand", "card");
createMarker("card-79", 4705, 7977, "Telegraph", "card");
createMarker("card-80", 4663, 8028, "Jennie Willetts", "card");
createMarker("card-81", 4603, 8044, "Turkey", "card");
createMarker("card-82", 4587, 8056, "Schooner", "card");
createMarker("card-83", 4426, 7926, "Slick Hutton", "card");
createMarker("card-84", 4128, 6628, "E.D. Ewing Walker", "card");
createMarker("card-85", 3886, 6685, "Jim Cobb", "card");
createMarker("card-86", 3918, 6969, "Senator Thaddeus Waxman", "card");
createMarker("card-87", 3903, 7036, "Lillian Powell", "card");
createMarker("card-88", 3838, 7099, "Fountain Pan", "card");
createMarker("card-89", 3436, 6288, "Steam Locomotive (II)", "card");
createMarker("card-90", 3317, 6520, "President Fisher", "card");
createMarker("card-91", 3431, 6585, "Laurence Dunn", "card");
createMarker("card-92", 3540, 6788, "General Cornelius Palmer", "card");
createMarker("card-93", 3295, 6719, "Robert Elliot Patchen", "card");
createMarker("card-94", 3250, 6720, "Rhodes", "card");
createMarker("card-95", 3196, 6648, "Thoroughbred", "card");
createMarker("card-96", 3176, 6711, "Flaco Hernandez", "card");
createMarker("card-97", 3134, 6726, "Nokota", "card");
createMarker("card-98", 3150, 6750, "Camel Caravan", "card");
createMarker("card-99", 3191, 6804, "American Paint", "card");
createMarker("card-100", 3098, 6807, "JD McKnight", "card");
createMarker("card-101", 2782, 6403, "U.S. Frigate", "card");
createMarker("card-102", 2756, 6519, "Edith Corinne", "card");
createMarker("card-103", 2399, 6726, "American Standardbred", "card");
createMarker("card-104", 2404, 6736, "Missouri Fox Trotter", "card");
createMarker("card-105", 2840, 6850, "Bloodhound", "card");
createMarker("card-106", 2744, 6950, "Steam Locomotive", "card");
createMarker("card-107", 2733, 7196, "Dynamite", "card");
createMarker("card-108", 2768, 7342, "President Alfred MacAlister", "card");
createMarker("card-109", 3075, 7138, "New York", "card");
createMarker("card-110", 3143, 7180, "Manned Glider", "card");
createMarker("card-111", 3223, 7135, "Horse Clipper Cactus", "card");
createMarker("card-112", 3594, 7176, "Parrot", "card");
createMarker("card-113", 3724, 7347, "Grouper", "card");
createMarker("card-114", 3705, 7382, "President Hardin", "card");
createMarker("card-115", 4094, 7459, "R.S. Harradon", "card");
createMarker("card-116", 3943, 7512, "Miss Maud Delancy", "card");
createMarker("card-117", 3876, 7660, "Emmet Granger", "card");
createMarker("card-118", 3877, 7663, "H.T. Slocum", "card");
createMarker("card-119", 3603, 7476, "Golden Currant", "card");
createMarker("card-120", 3582, 7471, "Coral Snake", "card");
createMarker("card-121", 3520, 7560, "Indian Tobacco", "card");
createMarker("card-122", 3523, 7566, "Yarrow", "card");
createMarker("card-123", 3473, 7774, "Henrietta Beatrice Woods", "card");
createMarker("card-124", 3390, 7745, "Richard McCullough", "card");
createMarker("card-125", 3326, 7652, "Velocipede", "card");
createMarker("card-126", 3367, 7825, 'Jim "Boy" Calloway', "card");
createMarker("card-127", 3360, 7911, "Patsey Hill", "card");
createMarker("card-128", 3243, 7483, "Catfish", "card");
createMarker("card-129", 3186, 7697, "Mabel Potter", "card");
createMarker("card-130", 3172, 7710, "Robin Koninsky", "card");
createMarker("card-131", 3235, 7775, "Player Piano", "card");
createMarker("card-132", 3221, 7780, "Axel McCormack", "card");
createMarker("card-133", 3239, 7857, "Ilga Ulmer", "card");
createMarker("card-134", 3267, 7855, "Oleander Sage", "card");
createMarker("card-135", 3308, 7850, "Camera", "card");
createMarker("card-136", 3277, 7901, "Hot Air Balloon", "card");
createMarker("card-137", 3218, 7931, "Laurence Carson", "card");
createMarker("card-138", 3107, 7873, "Saint Denis", "card");
createMarker("card-139", 3075, 7940, "Balener Whaling Vessel", "card");
createMarker("card-140", 2972, 7808, "The Snowboat", "card");
createMarker("card-141", 2963, 7708, "Appaloosa", "card");
createMarker("card-142", 3057, 7555, "Harvey Griggs", "card");
createMarker("card-143", 3002, 7488, "Luther Covington", "card");
createMarker("card-144", 4554, 6890, "Black Mangrove", "card");

//Marqueurs : Os de dinos
createMarker("bone-1", 3862, 5908, "Dinosaur bone #1", "bone");
createMarker("bone-2", 4084, 6031, "Dinosaur bone #2", "bone");
createMarker("bone-3", 4195, 5970, "Dinosaur bone #3", "bone");
createMarker("bone-4", 4016, 6423, "Dinosaur bone #4", "bone");
createMarker("bone-5", 3865, 6369, "Dinosaur bone #5", "bone");
createMarker("bone-6", 4852, 6986, "Dinosaur bone #6", "bone");
createMarker("bone-7", 5078, 7536, "Dinosaur bone #7", "bone");
createMarker("bone-8", 4786, 7907, "Dinosaur bone #8", "bone");
createMarker("bone-9", 5667, 7894, "Dinosaur bone #9", "bone");
createMarker("bone-10", 5553, 7328, "Dinosaur bone #10", "bone");
createMarker("bone-11", 5820, 6946, "Dinosaur bone #11", "bone");
createMarker("bone-12", 5343, 6763, "Dinosaur bone #12", "bone");
createMarker("bone-13", 5811, 6261, "Dinosaur bone #13", "bone");
createMarker("bone-14", 5490, 6043, "Dinosaur bone #14", "bone");
createMarker("bone-15", 5466, 5812, "Dinosaur bone #15", "bone");
createMarker("bone-16", 5130, 5574, "Dinosaur bone #16", "bone");
createMarker("bone-17", 4963, 5232, "Dinosaur bone #17", "bone");
createMarker("bone-18", 4882, 5202, "Dinosaur bone #18", "bone");
createMarker("bone-19", 4298, 4922, "Dinosaur bone #19", "bone");
createMarker("bone-20", 4794, 4481, "Dinosaur bone #20", "bone");
createMarker("bone-21", 4462, 3788, "Dinosaur bone #21", "bone");
createMarker("bone-22", 4205, 3856, "Dinosaur bone #22", "bone");
createMarker("bone-23", 2396, 3279, "Dinosaur bone #23", "bone");
createMarker("bone-24", 1677, 3554, "Dinosaur bone #24", "bone");
createMarker("bone-25", 1349, 2848, "Dinosaur bone #25", "bone");
createMarker("bone-26", 1306, 2172, "Dinosaur bone #26", "bone");
createMarker("bone-27", 1922, 2354, "Dinosaur bone #27", "bone");
createMarker("bone-28", 2450, 2174, "Dinosaur bone #28", "bone");
createMarker("bone-29", 1786, 1411, "Dinosaur bone #29", "bone");
createMarker("bone-30", 2075, 1504, "Dinosaur bone #30", "bone");

//Marqueurs : Attrapes reves
createMarker("dreamcatcher-1", 3981, 5264, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-2", 4411, 5254, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-3", 4649, 5256, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-4", 5012, 4939, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-5", 5286, 5299, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-6", 5626, 5917, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-7", 4716, 5771, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-8", 4389, 5663, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-9", 4223, 6255, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-10", 4636, 6691, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-11", 4770, 7026, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-12", 4222, 6978, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-13", 4026, 6929, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-14", 4036, 7254, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-15", 4883, 7545, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-16", 5123, 7726, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-17", 5233, 7794, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-18", 5308, 7662, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-19", 5502, 7707, "Dreamcatcher", "dreamcatcher");
createMarker("dreamcatcher-20", 5733, 7191, "Dreamcatcher", "dreamcatcher");

//Marqueurs : Easter eggs
createMarker("easter-1", 1218, 441, "Mexico Glitch", "easter");
createMarker("easter-2", 2208, 1648, 'Alchemist"s house', "easter");
createMarker("easter-3", 2124, 2764, "Strange Man Portrait", "easter");
createMarker("easter-4", 1517, 3987, "El Presidio", "easter");
createMarker("easter-5", 2922, 4110, "Manzanita Post Mystery", "easter");
createMarker("easter-6", 3123, 5024, "Mysterious Aztec Writing", "easter");
createMarker("easter-7", 3135, 5074, "Mysterious Aztec Writing", "easter");
createMarker("easter-8", 3162, 5064, "Mysterious Aztec Writing", "easter");
createMarker("easter-9", 3173, 5038, "Mysterious Aztec Writing", "easter");
createMarker("easter-10", 3195, 5075, "Mysterious Aztec Writing", "easter");
createMarker("easter-11", 3240, 5108, "Mysterious Aztec Writing", "easter");
createMarker("easter-12", 4235, 4164, "UFO #2", "easter");
createMarker("easter-13", 4271, 4332, "Taxidermy Gorilla", "easter");
createMarker("easter-14", 4777, 3535, "Pagan Ritual Painting", "easter");
createMarker("easter-15", 6158, 4470, "Robot", "easter");
createMarker("easter-16", 5949, 6168, "Conversation with a Giant", "easter");
createMarker("easter-17", 5822, 6627, "Witch Cauldron", "easter");
createMarker("easter-18", 5815, 7567, "Meteor Shower", "easter");
createMarker("easter-19", 4872, 7738, "Glowing Pentagram", "easter");
createMarker("easter-20", 4622, 8025, "Missing Princess Poster", "easter");
createMarker("easter-21", 4850, 6850, "UFO", "easter");
createMarker("easter-22", 4551, 6576, "Sheep Lover", "easter");
createMarker("easter-23", 4458, 6844, "Miriam Wegner", "easter");
createMarker("easter-24", 3902, 6686, "Well", "easter");
createMarker("easter-25", 3779, 6249, "Ghost Train", "easter");
createMarker("easter-26", 3431, 7586, "Severed Arm", "easter");
createMarker("easter-27", 3272, 7851, "Josiah Trelawny House", "easter");
createMarker("easter-28", 3179, 7885, "Vampire", "easter");

//Marqueurs : Gang Hideout
createMarker("hideout-1", 1646, 942, "Gaptooth Breach", "hideout");
createMarker("hideout-2", 1306, 1393, "Solomon Folly", "hideout");
createMarker("hideout-3", 1482, 2340, "Fort Mercer", "hideout");
createMarker("hideout-4", 2516, 2538, "Twin Rocks", "hideout");
createMarker("hideout-5", 2366, 4561, "Thieves Landing", "hideout");
createMarker("hideout-6", 2746, 4113, "Skinner Brothers Hideout", "hideout");
createMarker("hideout-7", 3068, 3567, "Skinner Brothers Hideout", "hideout");
createMarker("hideout-8", 3148, 3757, "Skinner Brothers Hideout", "hideout");
createMarker("hideout-9", 3211, 4026, "Skinner Brothers Hideout", "hideout");
createMarker("hideout-10", 4775, 3943, "Hanging Dog Ranch", "hideout");
createMarker("hideout-11", 5185, 5618, "Six Point Cabin", "hideout");
createMarker("hideout-12", 5273, 7556, "Beaver Hollow", "hideout");
createMarker("hideout-13", 2733, 7172, "Shady Belle", "hideout");

//Marqueurs : Item
createMarker("item-1", 1241, 1047, "Ancient Necklace", "item");
createMarker("item-2", 1653, 934, "Turtle Shell Trinket", "item");
createMarker("item-3", 2530, 1598, "Ram Skull Mask", "item");
createMarker("item-4", 2222, 3042, "Chinese Skullcap", "item");
createMarker("item-5", 1587, 2990, "True Tales of Frank Heck, No.102", "item");
createMarker("item-6", 2322, 3856, "Scarecrow Top Hat", "item");
createMarker("item-7", 2081, 4563, "Fertility Statue", "item");
createMarker("item-8", 2851, 5101, "Lost Letter to Bonnie", "item");
createMarker("item-9", 4009, 3372, "Pagan Skull Mask", "item");
createMarker("item-10", 4303, 3807, "Miner Hat", "item");
createMarker("item-11", 4007, 3957, "Old Brass Compass", "item");
createMarker("item-12", 5142, 3681, "Torn Treasure Map 2", "item");
createMarker("item-13", 5280, 4397, "Morion Helmet", "item");
createMarker("item-14", 5664, 4424, "Panoramic Map", "item");
createMarker("item-15", 5692, 4132, "Cobalt Petrified Wood", "item");
createMarker("item-16", 6052, 4215, "Hawk Talon Trinket", "item");
createMarker("item-17", 5868, 4718, "Panoramic Map", "item");
createMarker("item-18", 6312, 4915, "Panoramic Map", "item");
createMarker("item-19", 4490, 5039, "Wild West Heroes, No. 132", "item");
createMarker("item-20", 4707, 5550, "The Lady of the Manor", "item");
createMarker(
  "item-21",
  5033,
  5144,
  "Otis Miller and the Arabian Prince",
  "item",
);
createMarker("item-22", 5569, 5566, "Nevada Hat", "item");
createMarker(
  "item-23",
  5544,
  6610,
  "Ammolite & Flourite Gems (Bird Nest Gems)",
  "item",
);
createMarker("item-24", 4799, 6573, "Black Sheep", "item");
createMarker("item-25", 4577, 6586, "Scarecrow Hat", "item");
createMarker("item-26", 4155, 5585, "Dutch Speech Notes", "item");
createMarker("item-27", 3752, 5423, "Lost Letter to Bonnie", "item");
createMarker("item-28", 3709, 5796, "Lost Letter to Bonnie", "item");
createMarker("item-29", 3205, 5993, "Tricorn Hat", "item");
createMarker("item-30", 2754, 6213, "Cat Eye Trinket", "item");
createMarker("item-31", 2807, 6488, "Catherine Brooch", "item");
createMarker("item-32", 2801, 6493, "Gold Shield", "item");
createMarker("item-33", 2595, 6529, "Scarecrow Derby Hat", "item");
createMarker(
  "item-34",
  2552,
  7071,
  "Letter to Uncle Lewis from Elijah",
  "item",
);
createMarker(
  "item-35",
  3185,
  6657,
  "Panama Fedora, Boater Hat, Military Cavalry Hat & Gaucho...",
  "item",
);
createMarker("item-36", 3221, 6757, "Abalone Shell Fragment", "item");
createMarker("item-37", 3116, 6937, "Scarecrow Sombrero", "item");
createMarker("item-38", 3609, 7472, "Shrunken Head", "item");
createMarker("item-39", 3628, 7494, "Cat Skull Mask", "item");
createMarker("item-40", 3732, 7884, "Faded Letter", "item");
createMarker(
  "item-41",
  3834,
  7091,
  "Otis Miller and the Boy from New York",
  "item",
);
createMarker(
  "item-42",
  4446,
  7185,
  "Otis Miller and the Black-Hearted Lady",
  "item",
);
createMarker("item-43", 4449, 7628, "Civil War Hardee Hat", "item");
createMarker("item-44", 4501, 7993, "Lost Letter to Bonnie", "item");
createMarker("item-45", 4949, 7960, "Lost Letter to Bonnie", "item");
createMarker("item-46", 4886, 7899, "Female Fertility Statue", "item");
createMarker("item-47", 4840, 7704, "Pig Mask", "item");
createMarker("item-48", 5050, 7511, "Ancient Arrowhead", "item");
createMarker("item-49", 5332, 8527, "Shark Tooth Trinket", "item");
createMarker("item-50", 5365, 8166, "Lost Letter to Bonnie", "item");
createMarker("item-51", 5620, 8090, "Torn Treasure Map 1", "item");
createMarker("item-52", 5549, 7569, "Ancient Viking Comb", "item");
createMarker("item-53", 5793, 7652, "Meteorite #2", "item");
createMarker("item-54", 5857, 7496, "Meteorite #1", "item");
createMarker("item-55", 6019, 7670, "Electric Lantern", "item");

//Marqueurs : Item Request
createMarker("request-1", 4580, 3801, "Lenny - Silver Pocket Watch", "request");
createMarker("request-2", 4588, 3806, "Dutch - Pipe", "request");
createMarker(
  "request-3",
  4777,
  3952,
  "Tilly - Gold Pendant Necklace",
  "request",
);
createMarker("request-4", 3896, 5636, "Sadie - Harmonica", "request");
createMarker("request-5", 2789, 6402, "Pearson - Naval Compass", "request");
createMarker(
  "request-6",
  3533,
  7318,
  "Hosea - The Case of the Shrew in the Fog",
  "request",
);
createMarker(
  "request-7",
  4446,
  7189,
  "Jack - Penny Dreadful Comic Book",
  "request",
);
createMarker("request-8", 4448, 7182, "Mary-Beth - Fountain Pen", "request");
createMarker("request-9", 5154, 7259, "Molly - Pocket Mirror", "request");
//Marqueurs : Landmarks
createMarker("landmark-1", 1309, 1368, "Solomon Folly", "landmark");
createMarker("landmark-2", 1599, 968, "Gaptooth Breach", "landmark");
createMarker("landmark-3", 2040, 1039, "Cueva Seca", "landmark");
createMarker("landmark-4", 1623, 1978, "Repentance", "landmark");
createMarker("landmark-5", 2067, 1860, "Ridgewood Farm", "landmark");
createMarker("landmark-6", 2066, 2168, "Oddfellow Rest", "landmark");
createMarker("landmark-7", 1695, 2618, "Riley Charge", "landmark");
createMarker("landmark-8", 1809, 2654, "Two Crows", "landmark");
createMarker("landmark-9", 1946, 3048, "Coot Chapel", "landmark");
createMarker("landmark-10", 2416, 2959, "The Hanging Rock", "landmark");
createMarker("landmark-11", 2472, 2187, "Rattlesnake Hollow", "landmark");
createMarker("landmark-12", 1358, 2738, "Burnt-out Wagon", "landmark");
createMarker("landmark-13", 2344, 3392, "Pike Basin", "landmark");
createMarker("landmark-14", 1801, 4084, "Brittlebrush Trawl", "landmark");
createMarker("landmark-15", 3142, 4594, "Broken Tree", "landmark");
createMarker("landmark-16", 3139, 4375, "Beecher Hope", "landmark");
createMarker("landmark-17", 3149, 3802, "Evelyn Miller Camp", "landmark");
createMarker("landmark-18", 3314, 3897, "Nekoti Rock", "landmark");
createMarker("landmark-19", 3409, 3760, "Cochinay", "landmark");
createMarker("landmark-20", 3489, 4434, "Fort Riggs", "landmark");
createMarker("landmark-21", 4026, 4295, "Old Tom Blind", "landmark");
createMarker("landmark-22", 4247, 4037, "Mount Shann", "landmark");
createMarker("landmark-23", 4258, 3851, "Beryl Dream", "landmark");
createMarker("landmark-24", 4273, 3672, "Black Bone Forest", "landmark");
createMarker("landmark-25", 4443, 4199, "Valley View", "landmark");
createMarker("landmark-26", 4755, 3937, "Hanging Dog Ranch", "landmark");
createMarker("landmark-27", 4180, 5184, "Painted Sky", "landmark");
createMarker("landmark-28", 4621, 4716, "Wallace Overlook", "landmark");
createMarker("landmark-29", 4496, 5015, "Downes Ranch", "landmark");
createMarker("landmark-30", 5130, 4569, "Millesani Claim", "landmark");
createMarker("landmark-31", 5199, 4494, "Micah Hideout", "landmark");
createMarker("landmark-32", 5274, 4484, "Mount Hagen", "landmark");
createMarker("landmark-33", 5281, 4183, "Ewing Basin", "landmark");
createMarker("landmark-34", 5461, 4908, "Barrow Lagoon", "landmark");
createMarker("landmark-35", 6145, 4674, "Colter", "landmark");
createMarker("landmark-36", 5454, 5541, "Window Rock", "landmark");
createMarker("landmark-37", 5644, 5771, "Cotorra Springs", "landmark");
createMarker("landmark-38", 3890, 5626, "Granger Hoggery", "landmark");
createMarker("landmark-39", 4098, 5407, "Limpany", "landmark");
createMarker("landmark-40", 4181, 5595, "Horseshoe Overlook", "landmark");
createMarker("landmark-41", 4434, 5385, "Caliban Seat", "landmark");
createMarker("landmark-42", 4595, 5402, "Castor Ridge", "landmark");
createMarker("landmark-43", 4954, 5412, "Chadwick Farm", "landmark");
createMarker("landmark-44", 4771, 6077, "Cornwall Kerosene & Tar", "landmark");
createMarker("landmark-45", 4861, 6303, "Carmody Dell", "landmark");
createMarker("landmark-46", 4582, 6606, "Guthrie Farm", "landmark");
createMarker("landmark-47", 4556, 6898, "Emerald Station", "landmark");
createMarker("landmark-48", 3239, 6208, "Clemens Point", "landmark");
createMarker("landmark-49", 3171, 6408, "Radley Pasture", "landmark");
createMarker("landmark-50", 2711, 7169, "Shady Belle", "landmark");
createMarker("landmark-51", 3189, 7394, "Prinz & Co", "landmark");
createMarker("landmark-52", 3528, 7302, "Hagen Orchards", "landmark");
createMarker("landmark-53", 3666, 7232, "Fishing Spot", "landmark");
createMarker("landmark-54", 3703, 7175, "Merkins Waller", "landmark");
createMarker("landmark-55", 3666, 7142, "Macomb End", "landmark");
createMarker("landmark-56", 3627, 6943, "Siltwater Strand", "landmark");
createMarker("landmark-57", 3525, 6787, "Hill Haven Ranch", "landmark");
createMarker("landmark-58", 3680, 6539, "Face Rock", "landmark");
createMarker("landmark-59", 3916, 6977, "Lonnie Shack", "landmark");
createMarker("landmark-60", 3994, 7963, "Copperhead Landing", "landmark");
createMarker("landmark-61", 4429, 7620, "Fort Brennand", "landmark");
createMarker("landmark-62", 4484, 7550, "Mossy Flats", "landmark");
createMarker("landmark-63", 4758, 7690, "Huron Glen", "landmark");
createMarker("landmark-64", 4808, 7745, "Butcher Creek", "landmark");
createMarker("landmark-65", 5293, 7566, "Beaver Hollow", "landmark");
createMarker("landmark-66", 5514, 7945, "Black Balsam Rise", "landmark");
createMarker("landmark-67", 5545, 7932, "Reed Cottage", "landmark");
createMarker("landmark-68", 5750, 7219, "The Loft", "landmark");

//Marqueurs : Poissons légendaires
createMarker("fish-1", 1518, 3283, "Legendary Largemouth Bass", "fish");
createMarker("fish-2", 2271, 4231, "Legendary Redfin Pickerel", "fish");
createMarker("fish-3", 3056, 3647, "Legendary Rock Bass", "fish");
createMarker("fish-4", 3874, 3801, "Legendary Smallmouth Bass", "fish");
createMarker("fish-5", 4093, 5295, "Legendary Chain Pickerel", "fish");
createMarker("fish-6", 5467, 4307, "Legendary Sockeye Salmon", "fish");
createMarker("fish-7", 2987, 6258, "Legendary Bluegill", "fish");
createMarker("fish-8", 2970, 7377, "Legendary Lake Sturgeon", "fish");
createMarker("fish-9", 3655, 7457, "Legendary Longnose Gar", "fish");
createMarker("fish-10", 3650, 8197, "Legendary Bullhead Catfish", "fish");
createMarker("fish-11", 4541, 8115, "Legendary Muskie", "fish");
createMarker("fish-12", 4949, 7541, "Legendary Perch", "fish");
createMarker("fish-13", 5388, 6994, "Legendary Northern Pike", "fish");
createMarker("fish-14", 6049, 7963, "Legendary Steelhead Trout", "fish");

//Marqueurs : Loot
createMarker("loot-1", 1622, 892, "Bill Stacks", "loot");
createMarker("loot-2", 1573, 1252, "Gold Nugget & Valerian Root", "loot");
createMarker("loot-3", 1294, 1405, "Bill Stacks & Aged Pirate Rum", "loot");
createMarker("loot-4", 1295, 1408, "Gold Nugget & Jewellery Pouch", "loot");
createMarker("loot-5", 1440, 1559, "Crackers, Money, Moonshine & More", "loot");
createMarker(
  "loot-6",
  2159,
  1265,
  "Pistol Cartridges - Express & Repeater Cartridges - High...",
  "loot",
);
createMarker(
  "loot-7",
  2306,
  1284,
  "Potent Miracle Tonic & Rifle Cartridges - High Velocity",
  "loot",
);
createMarker(
  "loot-8",
  2208,
  1653,
  "Explosive Slug Pamphlet, Repeater Cartridges - High...",
  "loot",
);
createMarker("loot-9", 2293, 1907, "Small Jewelry Bag", "loot");
createMarker("loot-10", 2057, 1921, "Gold Ingot and Naval Compass", "loot");
createMarker(
  "loot-11",
  1898,
  2052,
  "Ginseng Elixir, Pistol Cartridges - High Velocity & Repeater...",
  "loot",
);
createMarker("loot-12", 1770, 2224, "Coin Purse & Aged Pirate Rum", "loot");
createMarker("loot-13", 1484, 2368, "Bill Stacks", "loot");
createMarker("loot-14", 1809, 2539, "Canned Fruit & Canned Vegetables", "loot");
createMarker("loot-15", 1822, 2639, "Money & Small Jewelry Bag", "loot");
createMarker(
  "loot-16",
  1458,
  2924,
  "Money, Opened Miracle Tonic & Wedding Ring",
  "loot",
);
createMarker(
  "loot-17",
  1769,
  3120,
  "Pistol Cartridges, Repeater Cartridges & Rifle Cartridges -...",
  "loot",
);
createMarker("loot-18", 2220, 3045, "Herbivore Bait & Valerian Root", "loot");
createMarker(
  "loot-19",
  2322,
  3784,
  "Aged Pirate Rum, Gold Nugget & Potent Miracle Tonic",
  "loot",
);
createMarker("loot-20", 2309, 4250, "Aged Pirate Rum", "loot");
createMarker("loot-21", 2387, 4575, "Bill Fold", "loot");
createMarker("loot-22", 2393, 4609, "3 Gold Nuggets & Bill Stack", "loot");
createMarker("loot-23", 2700, 4033, "Money", "loot");
createMarker(
  "loot-24",
  2889,
  4865,
  "Aged Pirate Rum & Premium Cigarettes",
  "loot",
);
createMarker(
  "loot-25",
  3113,
  3641,
  "Kentucky Bourbon, Cigarettes, Ground Coffee",
  "loot",
);
createMarker(
  "loot-26",
  3627,
  4999,
  "Large Jewelry Bag & Express Rifle Cartridges",
  "loot",
);
createMarker("loot-27", 3600, 4513, "Valerian Root", "loot");
createMarker(
  "loot-28",
  3709,
  3895,
  "Chewing Tobacco, Money, Special Bitters Pamphlet",
  "loot",
);
createMarker("loot-29", 3830, 3821, "Ginseng Elixir & Crackers", "loot");
createMarker("loot-30", 3897, 4267, "Valerian Root", "loot");
createMarker("loot-31", 3960, 3509, "Gold Nugget x3", "loot");
createMarker("loot-32", 4008, 3368, "Valerian Root", "loot");
createMarker("loot-33", 4367, 3520, "Ginseng Elixir", "loot");
createMarker("loot-34", 4303, 3811, "Gold Nugget", "loot");
createMarker(
  "loot-35",
  4328,
  3933,
  "Aged Pirate Rum & Regular Rifle Cartridges",
  "loot",
);
createMarker(
  "loot-36",
  4512,
  3887,
  "Carnivore Bait, Rifle Cartridges & Special Miracle Tonic Pamphlet...",
  "loot",
);
createMarker("loot-37", 4771, 3965, "Money", "loot");
createMarker("loot-38", 5136, 3677, "Ginseng Elixir", "loot");
createMarker(
  "loot-39",
  4722,
  4238,
  "Ginseng Elixir, Health Cures & Jewelry",
  "loot",
);
createMarker(
  "loot-40",
  4316,
  4630,
  "Large Jewelry Bag, Miracle Tonic, Money & Premium Cigarettes",
  "loot",
);
createMarker(
  "loot-41",
  4306,
  4799,
  "Kentucky Bourbon, Money, Opened Revolver Cartridges",
  "loot",
);
createMarker("loot-42", 4227, 5011, "Valerian Root", "loot");
createMarker(
  "loot-43",
  4178,
  5200,
  "Guarma Rum, Miracle Tonic & Revolver Cartridges - Regular",
  "loot",
);
createMarker(
  "loot-44",
  4115,
  5402,
  "Valerian root & Premium Cigarettes",
  "loot",
);
createMarker(
  "loot-45",
  4082,
  5414,
  "Gold Bar & Special Horse Stimulant Pamphlet",
  "loot",
);
createMarker(
  "loot-46",
  4296,
  5479,
  "Gold Nugget, Ground Coffee, Miracle Tonic & Volatile Fire...",
  "loot",
);
createMarker("loot-47", 4439, 5408, "Valerian Root", "loot");
createMarker(
  "loot-48",
  5123,
  4586,
  "Ginseng Elixir, Guarma Rum, Canned Peaches & Canned",
  "loot",
);
createMarker(
  "loot-49",
  5199,
  4503,
  "Aged Pirate Rum, Coin Bag & Valerian Root",
  "loot",
);
createMarker("loot-50", 5428, 4892, "Miracle Tonic & Money", "loot");
createMarker(
  "loot-51",
  5550,
  4875,
  "Silver Pocket Watch, Kentucky Bourbon, Gin, Premium...",
  "loot",
);
createMarker("loot-52", 5924, 4941, "Ginseng Elixer & Cartridges", "loot");
createMarker("loot-53", 6352, 5257, "Jewelry", "loot");
createMarker("loot-54", 5597, 5358, "Money and Large Jewelry Bag", "loot");
createMarker("loot-55", 5389, 5561, "Nugget", "loot");
createMarker("loot-56", 5579, 5717, "Large Jewelry Bag & Money", "loot");
createMarker(
  "loot-57",
  5576,
  5726,
  "2 x Gold Bar, Aged Pirate Rum & Valerian Root",
  "loot",
);
createMarker(
  "loot-58",
  5912,
  6041,
  "Dynamite Arrow Pamphlet, Guarma Rum, Large Jewelry Bag",
  "loot",
);
createMarker("loot-59", 4437, 5929, "Aged Pirate Rum & Money", "loot");
createMarker(
  "loot-60",
  4505,
  6097,
  "Chewing Tobacco, Ginseng Elixir, Jewelry & Kentucky",
  "loot",
);
createMarker("loot-61", 5239, 5827, "Ginseng Elixir & Letters", "loot");
createMarker(
  "loot-62",
  5081,
  6241,
  "Large Jewelry Bag, Money & Small Jewelry Bag x 2",
  "loot",
);
createMarker(
  "loot-63",
  5654,
  6280,
  "Poison Arrow Pamphlet & Chewing Tobacco",
  "loot",
);
createMarker("loot-64", 5819, 6618, "Hair Tonic & Kentucky Bourbon", "loot");
createMarker(
  "loot-65",
  5589,
  6612,
  "Aged Pirate Rum, Bill Fold & Coin Bag",
  "loot",
);
createMarker(
  "loot-66",
  5242,
  6690,
  "Apple, Guarma Rum, Jewelry & Special Health Cure Pamphlet",
  "loot",
);
createMarker(
  "loot-67",
  5123,
  6675,
  "Homing Tomahawk Recipe & Large Jewelry Bag",
  "loot",
);
createMarker("loot-68", 5406, 7034, "Lock Box", "loot");
createMarker("loot-69", 5630, 7257, "Valerian Root", "loot");
createMarker("loot-70", 5750, 7217, "Ginseng Elixir", "loot");
createMarker(
  "loot-71",
  5945,
  6939,
  "Gold Nugget, Platinum Band & Jewelry",
  "loot",
);
createMarker("loot-72", 4854, 6844, "Aged Pirate Rum", "loot");
createMarker(
  "loot-73",
  4843,
  6844,
  "Guarma Rum, Money & Volatile Dynamite Pamphlet",
  "loot",
);
createMarker("loot-74", 4437, 6837, "Valerian Root", "loot");
createMarker("loot-75", 4416, 6404, "Valerian Root", "loot");
createMarker("loot-76", 4100, 6169, "Canned Vegetables & Guarma Rum", "loot");
createMarker("loot-77", 3981, 6068, "Whiskey Tree", "loot");
createMarker("loot-78", 3684, 5959, "Aged Pirate Rum", "loot");
createMarker(
  "loot-79",
  3837,
  6263,
  "Chewing Tobacco, Cigar x2, Money & Valerian Root",
  "loot",
);
createMarker("loot-80", 4126, 6626, "Money - $50+ Valerian Root", "loot");
createMarker("loot-81", 3208, 5999, "Aged Pirate Rum", "loot");
createMarker("loot-82", 3197, 6251, "Aged Pirate Rum", "loot");
createMarker(
  "loot-83",
  3483,
  6743,
  "Canned Vegetables, Money, Special Horse Reviver Pamphlet",
  "loot",
);
createMarker(
  "loot-84",
  3309,
  6713,
  "Coin Purse, Jewellery & Silver Pocket Watch",
  "loot",
);
createMarker("loot-85", 3173, 6568, "Money, Jewelry", "loot");
createMarker("loot-86", 2808, 6479, "Large Gold Bar", "loot");
createMarker("loot-87", 2693, 6340, "Aged Pirate Rum", "loot");
createMarker(
  "loot-88",
  2393,
  6728,
  "Aged Pirate Rum, Chewing Tobacco & Money",
  "loot",
);
createMarker("loot-89", 2558, 6994, "Aged Pirate Rum", "loot");
createMarker(
  "loot-90",
  2749,
  6946,
  "Large Jewelry Bag | $60 | Platinum Earings, Bill Fold &...",
  "loot",
);
createMarker(
  "loot-91",
  2799,
  6964,
  "Guarma Rum & Express Rifle Cartridges",
  "loot",
);
createMarker("loot-92", 2708, 7216, "Money & Aged Pirate Rum", "loot");
createMarker("loot-93", 2697, 7263, "Large Jewelry Bag & Money", "loot");
createMarker(
  "loot-94",
  2659,
  7359,
  "Large Jewelry Bag, Potent Miracle Tonic & Revolver Ammo",
  "loot",
);
createMarker("loot-95", 2926, 7265, "Valerian Root & Opened Gin", "loot");
createMarker("loot-96", 3023, 7901, "Ginseng Elixir", "loot");
createMarker("loot-97", 3190, 7836, "Gold Nugget & Aged Pirate Rum", "loot");
createMarker(
  "loot-98",
  3404,
  7905,
  "Poison Throwing Knife Pamphlet & Money",
  "loot",
);
createMarker("loot-99", 3579, 7707, "Apple, Miracle Tonic & Snake Oil", "loot");
createMarker("loot-100", 3526, 7564, "Valerian Root", "loot");
createMarker(
  "loot-101",
  3533,
  7323,
  "Jewelry, Money Clip, Fine Brandy, Miracle Tonic, Premium",
  "loot",
);
createMarker("loot-102", 3621, 7187, "Apple, Chewing Tobacco, Money", "loot");
createMarker("loot-103", 3827, 7097, "Ginseng Elixir", "loot");
createMarker("loot-104", 3831, 6842, "Special Snake Oil Pamphlet", "loot");
createMarker("loot-105", 3764, 6793, "Money", "loot");
createMarker("loot-106", 4136, 7102, "Money", "loot");
createMarker("loot-107", 3882, 7204, "Bitters & Money", "loot");
createMarker("loot-108", 3768, 7422, "Apple & Kentucky Bourbon", "loot");
createMarker(
  "loot-109",
  3978,
  7795,
  "Fine Brandy, Money Clip, Coin Sack & Cocaine Gum",
  "loot",
);
createMarker("loot-110", 4005, 7973, "Incendiary Buckshot Pamphlet", "loot");
createMarker(
  "loot-111",
  4390,
  7530,
  "Bitters, Large Jewelry Bag & Silver Pocketwatch",
  "loot",
);
createMarker("loot-112", 4441, 7628, "Gold Nugget", "loot");
createMarker(
  "loot-113",
  4428,
  7637,
  "Health Cure, Money, Special Horse Medicine Pamphlet &...",
  "loot",
);
createMarker("loot-114", 4543, 8072, "Aged Pirate Rum", "loot");
createMarker("loot-115", 4630, 7890, "Pocket Watch", "loot");
createMarker("loot-116", 4666, 7673, "Large Jewelry Bag & Money", "loot");
createMarker(
  "loot-117",
  4672,
  7166,
  "Money Clip, Rum, Potent Snake Oil",
  "loot",
);
createMarker(
  "loot-118",
  4759,
  7275,
  "Potent Miracle Tonic, Potent Bitters, Fine Brandy",
  "loot",
);
createMarker("loot-119", 4769, 7274, "Ginseng Elixir", "loot");
createMarker("loot-120", 4835, 7333, "Guarma Rum", "loot");
createMarker("loot-121", 4792, 7667, "Chewing Tobacco & Money", "loot");
createMarker("loot-122", 4853, 7699, "Hair Tonic", "loot");
createMarker("loot-123", 4886, 7602, "Gold Nugget & Small Jewelry Bag", "loot");
createMarker("loot-124", 4934, 7643, "Money - $45", "loot");
createMarker("loot-125", 5036, 7525, "Large Jewelry Bag", "loot");
createMarker("loot-126", 5306, 7966, "Valerian Root", "loot");
createMarker("loot-127", 5352, 7495, "Jewelry, Money & Valerian Root", "loot");
createMarker(
  "loot-128",
  5616,
  8094,
  "Premium Cigarettes, Guarma Rum, Assorted Biscuits, Canne",
  "loot",
);
createMarker("loot-129", 5812, 7811, "Aged Pirate Rum", "loot");
createMarker("loot-130", 5869, 7626, "Money - $15", "loot");

//Marqueurs : Misc
createMarker("misc-1", 2495, 3832, "Hanging Man & Hearse", "misc");
createMarker("misc-2", 3089, 3896, "Blackwater Athletics Team", "misc");
createMarker("misc-3", 3419, 4306, "Pagan Grave", "misc");
createMarker("misc-4", 3716, 3910, "Precarious Wagon", "misc");
createMarker("misc-5", 4027, 3818, "Rock Painting #4", "misc");
createMarker("misc-6", 4229, 3583, "Legendary Buck Clue", "misc");
createMarker("misc-7", 4233, 4004, "Cougar's Den", "misc");
createMarker("misc-8", 4224, 4139, "Panoramic Map POV", "misc");
createMarker("misc-9", 4081, 4282, "Rock Painting #2", "misc");
createMarker("misc-10", 4065, 4330, "Rock Painting #1", "misc");
createMarker("misc-11", 3990, 4432, "Rock Painting #3", "misc");
createMarker("misc-12", 3945, 4474, "Micah's Camp", "misc");
createMarker("misc-13", 4392, 4560, "Serial Killer Clue - #2", "misc");
createMarker("misc-14", 5796, 4454, "Frozen Cattle Drive", "misc");
createMarker("misc-15", 4599, 5559, "Serial Killer Clue - #1", "misc");
createMarker("misc-16", 5213, 6078, "Blind Man Cassidy", "misc");
createMarker("misc-17", 5647, 6265, "Leader X Tree", "misc");
createMarker("misc-18", 4960, 6881, "New Hanover Rock Arrangement", "misc");
createMarker("misc-19", 4789, 6616, "Black Merino Sheep", "misc");
createMarker("misc-20", 4497, 6839, "Gravesite - Joshua Burgess", "misc");
createMarker("misc-21", 4017, 7084, "Shallow Grave", "misc");
createMarker("misc-22", 3763, 7083, "Massive Dead Snake", "misc");
createMarker("misc-23", 3429, 6583, "Letter to Annette from Claude", "misc");
createMarker("misc-24", 2807, 6953, "Letter to Garfield from Martha", "misc");
createMarker("misc-25", 2667, 6836, "Serial Killer Clue - #3", "misc");
createMarker("misc-26", 3170, 7823, "Vampire Clue - #5", "misc");
createMarker("misc-27", 3144, 7850, "Vampire Clue - #4", "misc");
createMarker("misc-28", 3157, 7923, "Vampire Clue - #3", "misc");
createMarker("misc-29", 3233, 7918, "Vampire Clue - #2", "misc");
createMarker("misc-30", 3270, 7885, "Vampire Clue - #1", "misc");
createMarker("misc-31", 3618, 7661, "Pagan Symbols on a Tree 3/3", "misc");
createMarker("misc-32", 3696, 7640, "Pagan Symbols on a Tree (2/3)", "misc");
createMarker("misc-33", 3656, 7576, "Pagan Symbols on a Tree (1/3)", "misc");
createMarker("misc-34", 4265, 7814, "Workers' Gravestone", "misc");
createMarker("misc-35", 4817, 7707, "Deformed Singing Man", "misc");
createMarker("misc-36", 5168, 7704, '"Why" Trees', "misc");

//Marqueurs : Point of interest
createMarker("interest-1", 1453, 672, "Jesuit Missionary", "interest");
createMarker("interest-2", 1496, 1976, "Sperm Whale Bones", "interest");
createMarker("interest-3", 1845, 2653, "Donkey Lady", "interest");
createMarker("interest-4", 2142, 2236, "Flying Machine", "interest");
createMarker("interest-5", 3016, 3547, "Wickiup", "interest");
createMarker("interest-6", 2916, 4290, "Circus Wagons", "interest");
createMarker("interest-7", 3878, 3554, "Faces in Trees", "interest");
createMarker("interest-8", 3858, 3475, "Whale Bones", "interest");
createMarker("interest-9", 4006, 3385, "Pagan Ritual", "interest");
createMarker("interest-10", 4097, 3353, "Obelisk", "interest");
createMarker("interest-11", 4127, 3627, "Native Burial Site", "interest");
createMarker("interest-12", 4173, 4194, "Native Burial Site", "interest");
createMarker("interest-13", 4761, 3578, "Devil's Cave", "interest");
createMarker("interest-14", 4808, 3655, "Crashed Airship", "interest");
createMarker("interest-15", 5135, 3668, "Hermit Woman", "interest");
createMarker("interest-16", 5282, 4393, "Frozen Settler", "interest");
createMarker("interest-17", 5545, 4888, "Defaced Grave", "interest");
createMarker("interest-18", 5944, 4316, "Mammoth Skeleton", "interest");
createMarker(
  "interest-19",
  5475,
  5554,
  "Strange Statues - Painting",
  "interest",
);
createMarker("interest-20", 4287, 5465, "Brush Fire", "interest");
createMarker("interest-21", 3881, 5836, "Trading Post", "interest");
createMarker("interest-22", 4195, 5975, "Oil Derrick", "interest");
createMarker("interest-23", 4544, 6230, "Register Rock", "interest");
createMarker("interest-24", 4405, 6426, "Warped Tree", "interest");
createMarker("interest-25", 5239, 6683, "Face in Cliff", "interest");
createMarker("interest-26", 5450, 6491, "Meditating Monk", "interest");
createMarker("interest-27", 5731, 6324, "Strange Statues Cave", "interest");
createMarker("interest-28", 5652, 6277, "Mysterious Hill Home", "interest");
createMarker("interest-29", 5631, 6121, "Barrel Rider", "interest");
createMarker("interest-30", 2648, 6402, "Braithwaites' Secret", "interest");
createMarker("interest-31", 2749, 6878, "Bolger Glade", "interest");
createMarker("interest-32", 2739, 6945, "Abandoned Church", "interest");
createMarker("interest-33", 2853, 7284, "Withered Arm", "interest");
createMarker("interest-34", 3129, 7091, "Gray's Secret", "interest");
createMarker("interest-35", 3411, 7040, "Painting in Cabin", "interest");
createMarker("interest-36", 3622, 7599, "Tiny Church", "interest");
createMarker("interest-37", 3875, 7084, "Pleasance", "interest");
createMarker("interest-38", 3950, 7521, "Phonograph", "interest");
createMarker("interest-39", 4553, 7827, "Serpent Mound", "interest");
createMarker("interest-40", 4632, 7894, "Manmade Mutant", "interest");
createMarker("interest-41", 5053, 7378, "Trail Trees (I)", "interest");
createMarker("interest-42", 5098, 7392, "Trail Trees (II)", "interest");
createMarker("interest-43", 5113, 7434, "Trail Trees (III)", "interest");
createMarker("interest-44", 5169, 7463, "Trail Trees (IV)", "interest");
createMarker("interest-45", 5360, 8239, "Old World Scripts", "interest");
createMarker("interest-46", 5549, 7580, "Old Tomb", "interest");
createMarker("interest-47", 5793, 7645, "Meteor House", "interest");
createMarker("interest-48", 5872, 7621, "Abandoned Trading Post", "interest");
createMarker("interest-49", 5858, 7498, "Meteorite", "interest");
createMarker("interest-50", 5730, 7391, "Fossilized Man", "interest");

//Marqueurs : Robbery
createMarker(
  "robbery-1",
  3896,
  4260,
  "Shop Robbery: Strawberry General Store",
  "roberry",
);
createMarker(
  "robbery-2",
  3901,
  4286,
  "Coach Robbery: Hector (I, II & III)",
  "roberry",
);
createMarker(
  "robbery-3",
  4729,
  4244,
  "Homestead Stash - Watson's Cabin",
  "roberry",
);
createMarker("robbery-4", 4848, 5461, "Robbery: Valentine Doctor", "roberry");
createMarker(
  "robbery-5",
  5599,
  5355,
  "Homestead Stash - Chez Porter",
  "roberry",
);
createMarker(
  "robbery-6",
  3176,
  6668,
  "Coach Robbery: Alden (I, II & III)",
  "roberry",
);
createMarker(
  "robbery-7",
  3154,
  6737,
  "Shop Robbery: Rhodes Gunsmith",
  "roberry",
);
createMarker(
  "robbery-8",
  2395,
  6737,
  "Homestead Stash - Catfish Jacksons",
  "roberry",
);
createMarker(
  "robbery-9",
  3187,
  7838,
  "Robbery: Saint Denis Gunsmith",
  "roberry",
);
createMarker(
  "robbery-10",
  3923,
  6975,
  "Homestead Stash - Lonnie's Shack",
  "roberry",
);
createMarker(
  "robbery-11",
  4140,
  7103,
  "Homestead Stash - Aberdeen Pig Farm",
  "roberry",
);
createMarker(
  "robbery-12",
  4424,
  7918,
  "Homestead Stash - Van Horn Mansion",
  "roberry",
);
createMarker(
  "robbery-13",
  5944,
  8053,
  "Homestead Stash - Willard's Rest",
  "roberry",
);

//Marqueurs : Sculptures rocheuses
createMarker("carving-1", 5246, 4389, "Rock Carving #1", "carving");
createMarker("carving-2", 5632, 5509, "Rock Carving #2", "carving");
createMarker("carving-3", 5503, 6026, "Rock Carving #3", "carving");
createMarker("carving-4", 5262, 5505, "Rock Carving #4", "carving");
createMarker("carving-5", 3854, 3638, "Rock Carving #5", "carving");
createMarker("carving-6", 4174, 4182, "Rock Carving #6", "carving");
createMarker("carving-7", 4008, 5343, "Rock Carving #7", "carving");
createMarker("carving-8", 4976, 6726, "Rock Carving #8", "carving");
createMarker("carving-9", 5561, 7815, "Rock Carving #9", "carving");
createMarker("carving-10", 4973, 7633, "Rock Carving #10", "carving");

//Marqueurs : Shack
createMarker("shack-1", 1238, 1047, "The Scratching Post", "shack");
createMarker("shack-2", 2158, 1263, "Abandoned Mission", "shack");
createMarker("shack-3", 2305, 1283, "Silent Stead", "shack");
createMarker("shack-4", 2292, 2221, "Pleasance House", "shack");
createMarker("shack-5", 1791, 2878, "Venter's Place", "shack");
createMarker("shack-6", 1586, 2989, "Lake Don Julio House", "shack");
createMarker("shack-7", 1457, 2923, "Rio del Lobo House", "shack");
createMarker("shack-8", 1663, 3491, "Greenhollow", "shack");
createMarker("shack-9", 2090, 4562, "The Old Bacchus Place", "shack");
createMarker("shack-10", 2308, 4251, "Stillwater Cabin", "shack");
createMarker("shack-11", 2703, 4073, "Bear Claw", "shack");
createMarker("shack-12", 2947, 3799, "Tanner's Reach", "shack");
createMarker("shack-13", 3113, 3640, "Swadbass Point", "shack");
createMarker("shack-14", 3617, 5005, "Lone Mule Stead", "shack");
createMarker("shack-15", 3941, 4352, "Taxidermist House", "shack");
createMarker("shack-16", 4141, 4317, "Lenora View", "shack");
createMarker("shack-17", 4408, 4454, "Shepherd's Rise Cabin", "shack");
createMarker("shack-18", 4583, 3807, "Vetter's Echo Cabin", "shack");
createMarker("shack-19", 4725, 4245, "Watson's Cabin", "shack");
createMarker("shack-20", 4874, 3736, "Stilt Shack", "shack");
createMarker("shack-21", 4628, 5198, "Lucky's Cabin", "shack");
createMarker("shack-22", 5036, 5138, "Clawson's Rest", "shack");
createMarker("shack-23", 5545, 4875, "Planters Bawn", "shack");
createMarker("shack-24", 5920, 4131, "Dormin Crest", "shack");
createMarker("shack-25", 5924, 4932, "Cairn Lodge", "shack");
createMarker("shack-26", 6351, 5246, "Adler Ranch ", "shack");
createMarker("shack-27", 5580, 5359, "Chez Porter", "shack");
createMarker("shack-28", 5389, 5560, "Dodd's Bluff", "shack");
createMarker("shack-29", 5182, 5638, "Six Point Cabin", "shack");
createMarker("shack-30", 4987, 5849, "Firwood Rise", "shack");
createMarker("shack-31", 5824, 6622, "Witches Cauldron", "shack");
createMarker("shack-32", 5943, 6944, "Fairvale Shanty", "shack");
createMarker("shack-33", 5402, 7030, "Veteran's Homestead", "shack");
createMarker("shack-34", 5123, 6669, "Flattened Cabin", "shack");
createMarker("shack-35", 5153, 7255, "Martha's Swain", "shack");
createMarker("shack-36", 4844, 6838, "Hani's Bethel", "shack");
createMarker("shack-37", 4569, 7092, "Ridge View Cabin", "shack");
createMarker("shack-38", 4444, 7181, "Osman Grove Cabin", "shack");
createMarker("shack-39", 4701, 7281, "Clingman", "shack");
createMarker("shack-40", 4764, 7276, "Fire Lookout Tower", "shack");
createMarker("shack-41", 4405, 6401, "Larned Sod", "shack");
createMarker("shack-42", 4129, 6621, "Old Trail Rise", "shack");
createMarker("shack-43", 3872, 6688, "Compson's Stead", "shack");
createMarker("shack-44", 3841, 6263, "Old Greenbank Mill", "shack");
createMarker("shack-45", 3665, 5953, "Gill Landing", "shack");
createMarker("shack-46", 3433, 6589, "Robard Farm", "shack");
createMarker("shack-47", 3175, 6566, "Radley's House", "shack");
createMarker("shack-48", 2962, 6840, "Argil Rise Cabin", "shack");
createMarker("shack-49", 2557, 6787, "Old Harry Fen Shack", "shack");
createMarker("shack-50", 2386, 6733, "Catfish Jacksons", "shack");
createMarker("shack-51", 2766, 7340, "Crawdad Willies", "shack");
createMarker("shack-52", 3410, 7039, "Bayall Edge Shack", "shack");
createMarker("shack-53", 3874, 7663, "Canebreak Manor", "shack");
createMarker("shack-54", 3942, 7523, "Houseboat", "shack");
createMarker("shack-55", 3982, 7350, "Trapper's Cabin", "shack");
createMarker("shack-56", 4092, 7468, "MacLean's House", "shack");
createMarker("shack-57", 4421, 7923, "Van Horn Mansion", "shack");
createMarker("shack-58", 4880, 7899, "Roadside Brothel", "shack");
createMarker("shack-59", 4921, 7814, "Sawbone Clearing", "shack");
createMarker("shack-60", 5612, 8083, "Manito Glade", "shack");
createMarker("shack-61", 5542, 7934, "Reed Cottage", "shack");
createMarker("shack-62", 5551, 7765, "Deer Cottage", "shack");
createMarker("shack-63", 5950, 8038, "Willard's Rest", "shack");
createMarker("shack-64", 6026, 7681, "Doverhill", "shack");

//Marqueurs : Stranger
createMarker(
  "stranger-1",
  3366,
  4042,
  "The American Inferno, Burnt Out",
  "stranger",
);
createMarker("stranger-2", 3637, 4604, "Arcadia For Amateurs (I)", "stranger");
createMarker("stranger-3", 4015, 3958, "Geology for Beginners", "stranger");
createMarker(
  "stranger-4",
  4302,
  4598,
  "To The Ends of the Earth (III)",
  "stranger",
);
createMarker("stranger-5", 4679, 4350, "Arcadia For Amateurs (II)", "stranger");
createMarker("stranger-6", 4873, 3734, "The Ties That Bind Us (V)", "stranger");
createMarker("stranger-7", 4548, 4856, "Oh, Brother (III)", "stranger");
createMarker("stranger-8", 4624, 5194, "American Dreams", "stranger");
createMarker("stranger-9", 4835, 5428, "Oh, Brother", "stranger");
createMarker("stranger-10", 4855, 5444, "Oh, Brother (II)", "stranger");
createMarker(
  "stranger-11",
  4816,
  5494,
  "The Noblest of Men, and a Woman",
  "stranger",
);
createMarker("stranger-12", 4384, 5523, "Arcadia For Amateurs (V)", "stranger");
createMarker(
  "stranger-13",
  3911,
  5233,
  "All That Glitters - Jack Hall Gang Treasure Hunt",
  "stranger",
);
createMarker(
  "stranger-14",
  3912,
  5417,
  "Smoking and Other Hobbies",
  "stranger",
);
createMarker("stranger-15", 4057, 5787, "A Test of Faith", "stranger");
createMarker("stranger-16", 3678, 5954, "A Fisher of Fish", "stranger");
createMarker(
  "stranger-17",
  4343,
  6126,
  "To the Ends of the Earth (I)",
  "stranger",
);
createMarker(
  "stranger-18",
  5711,
  6253,
  "To The Ends of the Earth (II)",
  "stranger",
);
createMarker("stranger-19", 5240, 6857, "The Veteran", "stranger");
createMarker(
  "stranger-20",
  4625,
  6739,
  "Arcadia For Amateurs (III)",
  "stranger",
);
createMarker(
  "stranger-21",
  4057,
  6934,
  "To The Ends of the Earth (V)",
  "stranger",
);
createMarker("stranger-22", 3999, 6941, "He's British of Course", "stranger");
createMarker(
  "stranger-23",
  3897,
  6409,
  "The Ties That Bind Us (II)",
  "stranger",
);
createMarker(
  "stranger-24",
  3073,
  6319,
  "To The Ends of the Earth (IV)",
  "stranger",
);
createMarker(
  "stranger-25",
  3192,
  6651,
  "The Iniquities of History",
  "stranger",
);
createMarker("stranger-26", 3108, 6699, "The Ties that Bind Us", "stranger");
createMarker("stranger-27", 3154, 6765, "No Good Deed", "stranger");
createMarker(
  "stranger-28",
  3119,
  7647,
  "A Bright Bouncing Boy (I)",
  "stranger",
);
createMarker("stranger-29", 3219, 7850, "Of Men and Angels", "stranger");
createMarker("stranger-30", 3246, 7915, "Help a Brother Out", "stranger");
createMarker("stranger-31", 3277, 7905, "The Artist's Way", "stranger");
createMarker(
  "stranger-32",
  3326,
  7918,
  "Brothers and Sisters, One and All",
  "stranger",
);
createMarker("stranger-33", 3375, 7927, "The Mercies of Knowledge", "stranger");
createMarker("stranger-34", 3293, 7672, "Fundraiser", "stranger");
createMarker(
  "stranger-35",
  3343,
  7586,
  "Idealism and Pragmatism for Beginners",
  "stranger",
);
createMarker(
  "stranger-36",
  3389,
  7742,
  "Duchesses and Other Animals",
  "stranger",
);
createMarker(
  "stranger-37",
  3747,
  7589,
  "Arcadia For Amateurs (IV)",
  "stranger",
);
createMarker("stranger-38", 3810, 7277, "A Fine Night For It", "stranger");
createMarker("stranger-39", 4544, 7698, "The Wisdom of the Elders", "stranger");
createMarker(
  "stranger-40",
  4625,
  8020,
  "The Smell of the Grease Paint",
  "stranger",
);
createMarker("stranger-41", 5301, 8019, "Do Not Seek Absolution", "stranger");
createMarker(
  "stranger-42",
  5975,
  8037,
  "The Widow of Willard's Rest",
  "stranger",
);
createMarker(
  "stranger-43",
  6018,
  7688,
  "A Bright Bouncing Boy (II)",
  "stranger",
);

//Marqueurs : Treasure
createMarker(
  "treasure-1",
  1303,
  671,
  "The Elemental Trail Treasure Hunt - Start",
  "treasure",
);
createMarker(
  "treasure-2",
  1478,
  1547,
  "The Elemental Trail Treasure Hunt - Map 3",
  "treasure",
);
createMarker("treasure-3", 2482, 2202, "Otis Miller's Treasure", "treasure");
createMarker(
  "treasure-4",
  1964,
  3060,
  "The Elemental Trail Treasure",
  "treasure",
);
createMarker(
  "treasure-5",
  1663,
  3488,
  "The Elemental Trail Treasure Hunt - Map 2",
  "treasure",
);
createMarker(
  "treasure-6",
  4098,
  3360,
  "Landmarks of Riches Treasure Hunt - Start",
  "treasure",
);
createMarker(
  "treasure-7",
  4271,
  3975,
  "Landmarks of Riches Treasure",
  "treasure",
);
createMarker(
  "treasure-8",
  4542,
  4855,
  "High Stakes Treasure Map - Map 2",
  "treasure",
);
createMarker(
  "treasure-9",
  5505,
  4936,
  "High Stakes Treasure Map - Map 3",
  "treasure",
);
createMarker(
  "treasure-10",
  5933,
  4931,
  "Poisonous Trail Treasure Hunt - Start",
  "treasure",
);
createMarker(
  "treasure-11",
  5662,
  5803,
  "All That Glitters - Jack Hall Gang Map 2",
  "treasure",
);
createMarker("treasure-12", 5478, 6014, "High Stakes Treasure", "treasure");
createMarker(
  "treasure-13",
  5650,
  6276,
  "Landmarks of Riches Treasure Hunt - Map 3",
  "treasure",
);
createMarker(
  "treasure-14",
  5390,
  6966,
  "All That Glitters - Jack Hall Gang Treasure",
  "treasure",
);
createMarker(
  "treasure-15",
  4922,
  6824,
  "Money Lending and Other Sins",
  "treasure",
);
createMarker(
  "treasure-16",
  4435,
  5399,
  "All That Glitters - Jack Hall Gang Map 1",
  "treasure",
);
createMarker(
  "treasure-17",
  4086,
  5430,
  "Le Tresor Des Morts Treasure - Start (Uniquement dispo dans Version Ultimate)",
  "treasure",
);
createMarker(
  "treasure-18",
  3668,
  6544,
  "Poisonous Trail Treasure Hunt - Map 2",
  "treasure",
);
createMarker("treasure-19", 3115, 6673, "Gold Bar", "treasure");
createMarker(
  "treasure-20",
  2756,
  6875,
  "Landmarks of Riches Treasure Hunt - Map 4",
  "treasure",
);
createMarker(
  "treasure-21",
  3025,
  7542,
  "Le Tresor Des Morts Treasure - Map 2",
  "treasure",
);
createMarker(
  "treasure-22",
  3368,
  7832,
  "Le Tresor Des Morts Treasure",
  "treasure",
);
createMarker(
  "treasure-23",
  3620,
  7598,
  "Landmarks of Riches Treasure Hunt - Map 2",
  "treasure",
);
createMarker(
  "treasure-24",
  4537,
  7799,
  "Poisonous Trail Treasure Hunt - Map 3",
  "treasure",
);
createMarker("treasure-25", 5008, 7551, "Poisonous Trail Treasure", "treasure");
createMarker("treasure-26", 5042, 7519, "Reed Cottage Treasure", "treasure");
createMarker(
  "treasure-27",
  5544,
  7930,
  "Reed Cottage Treasure - Start",
  "treasure",
);

//Marqueurs : Weapon
createMarker("weapon-1", 2483, 2206, "Otis Miller's Revolver", "weapon");
createMarker("weapon-2", 4131, 3634, "Stone Hatchet", "weapon");
createMarker("weapon-3", 4299, 3803, "Wide-Blade Knife", "weapon");
createMarker("weapon-4", 4631, 4483, "Double Bit Hatchet  ", "weapon");
createMarker("weapon-5", 4731, 4247, "Semi-Automatic Shotgun", "weapon");
createMarker("weapon-6", 4916, 3825, "Antler Knife", "weapon");
createMarker("weapon-7", 5200, 4492, "Micah’s Revolver", "weapon");
createMarker("weapon-8", 5876, 4071, "Carbine Repeater", "weapon");
createMarker("weapon-9", 5933, 4938, "Flaco's Revolver", "weapon");
createMarker("weapon-10", 5582, 5370, "Pump-Action Shotgun", "weapon");
createMarker("weapon-11", 5396, 5564, "Hunter Hatchet", "weapon");
createMarker("weapon-12", 5191, 5637, "Double-Barreled Shotgun", "weapon");
createMarker("weapon-13", 6021, 6324, "Ancient Tomahawk", "weapon");
createMarker("weapon-14", 5060, 5977, "Tomahawk", "weapon");
createMarker("weapon-15", 4855, 5461, "Schofield Revolver", "weapon");
createMarker("weapon-16", 4623, 5204, "Lowry's Revolver (Online)", "weapon");
createMarker("weapon-17", 3893, 5632, "Granger's Revolver", "weapon");
createMarker("weapon-18", 5129, 6675, "Hewing Hatchet", "weapon");
createMarker("weapon-19", 5155, 7250, "Rusted Hunter Hatchet", "weapon");
createMarker("weapon-20", 3914, 6969, "Double-Action Revolver", "weapon");
createMarker("weapon-21", 3174, 6659, "Midnight's Pistol", "weapon");
createMarker("weapon-22", 3159, 6740, "Lancaster Repeater", "weapon");
createMarker("weapon-23", 2607, 6461, "Rare Rolling Block Rifle", "weapon");
createMarker("weapon-24", 2908, 7382, "Broken Pirate Sword", "weapon");
createMarker("weapon-25", 3177, 7892, "Ornate Dagger", "weapon");
createMarker("weapon-26", 4442, 7637, "Civil War Knife", "weapon");
createMarker("weapon-27", 5336, 8014, "Rusted Double Bit Hatchet", "weapon");
createMarker("weapon-28", 5621, 8082, "Rare Shotgun", "weapon");
createMarker("weapon-29", 5753, 7806, "Calloway's Revolver", "weapon");
createMarker("weapon-30", 5543, 7577, "Viking Hatchet", "weapon");
