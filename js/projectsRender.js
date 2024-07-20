mainProjects = [ChazzCardGame, CassioSite, MemoryGame];
allProjects = [
  ChazzCardGame,
  CassioSite,
  MemoryGame,
  WhatShouldIPlay,
  BhaskaraOnline,
  FinancialOrganizer,
];

const renderProjects = (place, arr) => {
  for (let e of arr) {
    const projectLink = document.createElement("a");
    const project = document.createElement("div");
    const projectImageContainer = document.createElement("div");
    const projectTextContainer = document.createElement("div");
    const projectImage = document.createElement("img");
    const projectName = document.createElement("h3");
    const projectDescription = document.createElement("p");

    place.appendChild(projectLink);
    projectLink.appendChild(project);
    project.appendChild(projectImageContainer);
    project.appendChild(projectTextContainer);
    projectTextContainer.appendChild(projectName);
    projectTextContainer.appendChild(projectDescription);
    projectImageContainer.appendChild(projectImage);

    projectLink.href = e.link;
    projectLink.target = "_blank";
    projectImage.src = e.image;
    projectName.textContent = e.name;
    projectDescription.textContent = e.description;

    project.classList.add("projectCard");
  }
};
