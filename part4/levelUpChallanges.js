// Problem-1 :

let tea = ["Green tea", " black tea", "Chai", "Oolong tea"];
let selectedTeas = [];

for (let i = 0; i < tea.length; i++) {
  if (tea[i] != "Chai") {
    selectedTeas.push(tea[i]);
  } else {
    break;
  }
}
// console.log(selectedTeas);

// Problem-2 :

let cities = ["London", "New York", "Paris", "Berlin"];
let parisSkip = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] != "Paris") {
    parisSkip.push(cities[i]);
  } else {
    continue;
  }
}
// console.log(parisSkip);

// problem-3 :

let num = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const i of num) {
  if (i != 4) {
    smallNumbers.push(i);
  } else {
    break;
  }
}
// console.log(smallNumbers);

// Problem-4 :

let teaItems = ["chai", "green tea", "herbal tea", "black tea"];
let PreferredTeas = [];

for (const i of teaItems) {
    if (i != "herbal tea") {
    PreferredTeas.push(i);
  } else {
    continue;
  }   
}
// console.log(PreferredTeas);

// Problem-5 :

let citiesData = {
    "London" : 8900000,
    "New York" : 8400000,
    "Paris" : 2200000,
    "Berlin" : 3500000
}
let citiesPopulation = {}

for (const key in citiesData) {
    if (key == "Berlin") {
        break
    } else {
        citiesPopulation[key] = citiesData[key];
    }
}
// console.log(citiesPopulation);

// Problem-6 :

let worldCities = {
  Sydney: 5000000,
  Tokyo : 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const key in worldCities) {
  if (worldCities[key] < 3000000) {
    continue;
  } else {
    largeCities[key] = worldCities[key];
  }
}
// console.log(largeCities);

// Problem-7 :

let teaStore = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

teaStore.forEach(element => {
    if (element == "chai") {
        return
    }
    availableTeas.push(element)
});
// console.log(availableTeas);

// Problem-8 : Same as 7

// Problem-9 : Easy

// Problem-10 :

let LastTea = ["chai", "green tea", "herbal tea", "jasmine tea", "black tea"];
let shortTea = []

for (const element of LastTea) {
    if (element.length > 10) {
        break
    } else {
        shortTea.push(element)
    }
}
//console.log(shortTea);




