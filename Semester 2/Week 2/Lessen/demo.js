/*
vandaag = new Date(Date.now());
console.log(vandaag);

let huidige_jaar = vandaag.getFullYear();
console.log(huidige_jaar);

let myDate = new Date(2023, 05, 22);
*/

// Oefening array in de class

let vandaag = new Date(Date.now());

// let weekDagVandaag = new Date(Date.now().getDay());
let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
let dagePerMaand = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
let weekDag = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
let maand = vandaag.getMonth();
let jaar = vandaag.getFullYear();
let dag = vandaag.getDate();
// let dagVanDeWeek = vandaag.getDay();
for (let i = 1; i <= dagePerMaand[maand]; i++) {
  let currentDay = new Date(Date.UTC(jaar,maand,i )).getDay();
  console.log(`${weekDag[currentDay]} ${i} ${maanden[maand]} ${jaar}`);
}

