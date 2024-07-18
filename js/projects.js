class Project {
  constructor(name, image, link, repoLink, description) {
    (this.name = name),
      (this.image = image),
      (this.link = link),
      (this.repoLink = repoLink),
      (this.description = description);
  }
}

const ChazzCardGame = new Project(
  "Chazz Card Game",
  "https://i.imgur.com/VNjQDOt.png",
  "https://devchazz.github.io/cardGame/",
  "",
  "The first game developed by me, a card game made using only vanilla JS, HTML and CSS."
);
const CassioSite = new Project(
  "Cassio Site",
  "https://i.imgur.com/ARNkbnr.png",
  "",
  "",
  "Responsive web site created for the artist Cassio using React."
);
const PokedexApp = new Project(
  "Pokedex App",
  "https://i.imgur.com/gOR0wkd.png",
  "",
  "https://github.com/devchazz/pokedex-app",
  "A simple Pokedex App created with Vue, by devChazz. Uses informations from PokéAPI."
);
const MemoryGame = new Project(
  "Memory Game",
  "https://i.imgur.com/4TEeK36.png",
  "",
  "https://github.com/devchazz/memory-game",
  "Memory Card game, created using Vue."
);
const BhaskaraOnline = new Project(
  "Bhaskara Online",
  "https://i.imgur.com/2gumuNb.png",
  "https://devchazz.github.io/bhaskara/",
  "https://github.com/devchazz/bhaskara",
  "A simple JavaScript app that solves second degree equations, showing operations and possible results."
);
const FinancialOrganizer = new Project(
  "Financial Organizer",
  "https://i.imgur.com/qgZQ7fj.png",
  "https://devchazz.github.io/financial-organizer/",
  "https://github.com/devchazz/financial-organizer",
  "App created using HTML, CSS and pure JS, uses simple manipulations in the DOM to calculate the users financial balance."
);
const WhatShouldIPlay = new Project(
  "What Should I Play?",
  "https://i.imgur.com/75xmJ5L.png",
  "",
  "https://github.com/devchazz/what-should-i-play",
  "A app that helps you to choose what you should play today randomly. Works as a random task picker. Created using Vue."
);

let games = [ChazzCardGame];
let webSites = [CassioSite];
let WebApps = [
  MemoryGame,
  PokedexApp,
  WhatShouldIPlay,
  BhaskaraOnline,
  FinancialOrganizer,
];
