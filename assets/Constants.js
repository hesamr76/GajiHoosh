import { icon as logoBASE64 } from "./imgs/icon";

const Clients = {
  GOOGLE: "GOOGLE",
  WEB: "WEB"
};

const Platforms = {
  APP: "APP",
  WEB: "WEB"
};

const PlayerRoles = {
  PLAYER: "PLAYER",
  SHEIKH: "SHEIKH",
  ADMIN: "ADMIN"
};

const ClanRoles = {
  MEMBER: 0,
  CO_LEADER: 1,
  LEADER: 2
};

const EventStatuses = {
  IDLE: 0,
  SEARCHING: 1,
  COMPETING: 2
};

const Provinces = [
  "China",
  "India",
  "United States",
  "Indonesia",
  "Pakistan",
  "Brazil",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Ethiopia",
  "Philippines",
  "Egypt",
  "Vietnam",
  "DR Congo",
  "Turkey",
  "Iran",
  "Germany",
  "Thailand",
  "United Kingdom",
  "France",
  "Italy",
  "Tanzania",
  "South Africa",
  "Myanmar",
  "Kenya",
  "South Korea",
  "Colombia",
  "Spain",
  "Uganda",
  "Argentina",
  "Algeria",
  "Sudan",
  "Ukraine",
  "Iraq",
  "Afghanistan",
  "Poland",
  "Canada",
  "Morocco",
  "Saudi Arabia",
  "Uzbekistan",
  "Peru",
  "Angola",
  "Malaysia",
  "Mozambique",
  "Ghana",
  "Yemen",
  "Nepal",
  "Venezuela"
];

const Abilities = [
  ["memory", "حافظه"],
  ["agility", "اطلاعات"],
  ["math", "محاسبه"],
  ["accuracy", "دقت"],
  ["focus", "تمرکز"],
  ["imagination", "تجسم"]
];

const AbilityTranslator = {};

Abilities.map((ability) => {
  AbilityTranslator[ability[0]] = ability[1];
});

const MaxLenghtOfMessage = 750;

export {
  Clients,
  Platforms,
  PlayerRoles,
  ClanRoles,
  EventStatuses,
  Provinces,
  Abilities,
  AbilityTranslator,
  logoBASE64,
  MaxLenghtOfMessage
};
