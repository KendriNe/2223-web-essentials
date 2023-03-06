/*
// Oefening 1.1
let reeks = new Array("Digitale vormgeving", 
"Systeem en netwerkbeheer", 
"Programmeren", 
"Internet og Things")

console.log(reeks.length);
*/

/*
// Oefening 1.2
let reeks = new Array("Digitale vormgeving", 
"Systeem en netwerkbeheer", 
"Programmeren", 
"Internet og Things")

console.log(reeks);
console.log(reeks.length);
*/

/*
// Oefening 1.3
let reeks = ["Digitale vormgeving", 
"Systeem en netwerkbeheer", 
"Programmeren", 
"Internet og Things"]

let formattedString = reeks.join("\n");
document.getElementById("p1").innerHTML = formattedString;
*/

/*
// Oefening 1.4
let hondenRassen = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "Bulldog",
    "Beagle",
    "Poodle",
    "Chihuahua",
    "Siberian Husky",
    "Boxer",
    "Rottweiler"
  ];

  let inputBezoeker = prompt("Geef een getal tussen 1 en 10");

  if(inputBezoeker >= 1 && inputBezoeker <= 10)
  {
    alert(hondenRassen[inputBezoeker - 1]);
  }
  else
  {
    alert("Sorry, katten niet toegelaten");
  }
*/

/*
// Oefening 1.5
let hondenRassen = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "Bulldog",
  "Beagle",
  "Poodle",
  "Chihuahua",
  "Siberian Husky",
  "Boxer",
  "Rottweiler"
];

hondenRassen.push("Dalmatian", "Border Collie", "Doberman Pinscher", "Australian Shepherd", "Greyhound");
console.log(hondenRassen);
*/

/*
// Oefening 1.6
let hondenRassen = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "Bulldog",
  "Beagle",
  "Poodle",
  "Chihuahua",
  "Siberian Husky",
  "Boxer",
  "Rottweiler"
];

hondenRassen.shift();
hondenRassen.pop();

console.log(hondenRassen);

let string = hondenRassen.join(", ");
document.getElementById("p1").innerHTML = string;
*/

/*
// Oefeningen 1.7
let numbers = [1, 2, 3, 4, 5];

// Remove two elements starting from index 2 and add two new elements
numbers.splice(2, 2, 'a', 'b');

console.log(numbers); // Output: [1, 2, "a", "b", 5]
*/

/*
// Oefening 1.8
const dagenPerMaand = [
  31, // January
  28, // February
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31  // December
];

const vandaag = new Date();

const maand = vandaag.getMonth();
const jaar = vandaag.getFullYear();

for (let dag = 1; dag <= dagenPerMaand[maand]; dag++) 
{
  console.log(`${dag}/${maand + 1}/${jaar}`);
}
*/

/*
// Oefening 1.9
const dagenVanDeWeek = [
  "Sunday",
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
];

const dagenPerMaand = [
  31, // January
  28, // February
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31  // December
];

const vandaag = new Date();

const maand = vandaag.getMonth();
const jaar = vandaag.getFullYear();

for (let dag = 1; dag <= dagenPerMaand[maand]; dag++) 
{
  const datum = new Date(jaar, maand, dag);
  const dagVanDeWeek = dagenVanDeWeek[datum.getDay()];
  console.log(`${dagVanDeWeek}, ${dag}/${maand + 1}/${jaar}`);
}
*/






