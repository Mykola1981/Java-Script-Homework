console.log("Works");

function GetPlanet() {
    var planet = document.querySelector(".planet").value;
    var result = document.querySelector(".result");
        console.log(planet);

    switch (planet) {
        case '1':
            console.log("Mercury! Mercury! It is the smallest and innermost planet in the Solar System!");
            result.innerHTML = "Mercury! It is the smallest and innermost planet in the Solar System!";
            break;
        case '2':
            console.log("Venus! Venus! It is a terrestrial planet and is sometimes called Earth's sister planet, because of their similar size, mass, proximity to the Sun, and bulk composition!");
            result.innerHTML = "Venus! It is a terrestrial planet and is sometimes called Earth's sister planet, because of their similar size, mass, proximity to the Sun, and bulk composition!";
            break;
        case '3':
            console.log("Earth! Over 7.6 billion humans live on Earth and depend on its biosphere and natural resources for their survival!");
            result.innerHTML = "Earth! Over 7.6 billion humans live on Earth and depend on its biosphere and natural resources for their survival!";
            break;
        case '4':
            console.log("Mars! Mars carries a name of the Roman god of war, and is often referred to as the Red Planet, because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye!");
            result.innerHTML = "Mars! Mars carries a name of the Roman god of war, and is often referred to as the Red Planet, because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye!";
            break;
        case '5':
            console.log("Jupiter! It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined!");
            result.innerHTML = "Jupiter! It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined!";
            break;
        case '6':
            console.log("Saturn! The planet's most famous feature is its prominent ring system that is composed mostly of ice particles, with a smaller amount of rocky debris and dust!");
            result.innerHTML = "Saturn! The planet's most famous feature is its prominent ring system that is composed mostly of ice particles, with a smaller amount of rocky debris and dust!";
            break;
        case '7':
            console.log("Uranus! It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds!");
            result.innerHTML = "Uranus! It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds!";
            break;
        case '8':
            console.log("Neptune! Neptune's atmosphere is composed primarily of hydrogen and helium, along with traces of hydrocarbons and possibly nitrogen, though it contains a higher proportion of ices such as water, ammonia, and methane!");
            result.innerHTML = "Neptune! Neptune's atmosphere is composed primarily of hydrogen and helium, along with traces of hydrocarbons and possibly nitrogen, though it contains a higher proportion of ices such as water, ammonia, and methane!";
            break;
        case '9':
            console.log("Pluto! It is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune!");
            result.innerHTML = "Pluto! It is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune!";
            break;
        default:
            console.log("R.T.F.M.");
            result.innerHTML = "R.T.F.M";
            break;
    }
}