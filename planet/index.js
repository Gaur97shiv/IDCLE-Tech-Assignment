const planetButton = document.getElementById("planetButton");
const planetList = document.getElementById("planetList");
const planetDetails = document.getElementById("planetDetails");
const planets = [
    { name: "Mercury", details: "The closest planet to the Sun." },
    { name: "Venus", details: "Known for its thick and toxic atmosphere." },
    { name: "Earth", details: "Our home planet." },
    { name: "Mars", details: "Known as the Red Planet." },
];
function renderPlanetList() {
    planetList.innerHTML = "";
    planets.forEach(planet => {
        const planetButton = document.createElement("button");
        planetButton.classList.add("planet");
        planetButton.textContent = planet.name;
        planetButton.addEventListener("click", () => {
            displayPlanetDetails(planet);
        });
        planetList.appendChild(planetButton);
    });
}
function displayPlanetDetails(planet) {
    planetDetails.innerHTML = "";
    const planetDetailsDiv = document.createElement("div");
    planetDetailsDiv.classList.add("planet-details");
    planetDetailsDiv.textContent = planet.details;
    planetDetails.appendChild(planetDetailsDiv);
}
planetButton.addEventListener("click", () => {
    renderPlanetList();
    planetDetails.innerHTML = "";
});
