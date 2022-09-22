const peopleContainer = document.querySelector("#people-container");
// get the empty container and store it in a variable, exists but not painted on the page yet
// build out one object with JS, Ray for this example
function buildPeopleGrid (peopleArray) {
  for (let person of peopleArray) {
    let personDiv = document.createElement("div");
    let name = document.createElement("h1");
    let city = document.createElement("h3");
    let food = document.createElement("h3");
    name.innerText = person.name;
    city.innerText = person.city;
    food.innerText = person.favFood;
    personDiv.appendChild(name);
    personDiv.appendChild(city);
    personDiv.appendChild(food);
    peopleContainer.appendChild(personDiv);
    personDiv.classList.add("person");
  }
}

buildPeopleGrid(people)
// add styles to the div using a class

// now loop through the array `people`, build a personDiv for each person, append that to the page
