/*
// Oefening 1.1
let gegevens = {
    naam : "Neijens",
    voornaam : "Kenji",
    telefoon : "0468565224",
    geboortedatum : "22/01/2003",
    mailadres : "neijensk@gmail.com",
    volledige_zin: function() {
        let zin = `Mijn naam is ${this.voornaam} ${this.naam} en ik ben geboren op ${this.geboortedatum}. Mijn telefoonnummer is ${this.telefoon} en mijn mailadres is ${this.mailadres}`;
        return zin;
    }
}
console.log(gegevens);

document.getElementById("td").innerHTML = 
`
Naam: ${gegevens.naam}, 
Voornaam: ${gegevens.voornaam},
Telefoon: ${gegevens.telefoon},
Geboortedatum: ${gegevens.geboortedatum},
E-mail: ${gegevens.mailadres}
`;
*/

/*
//Oefening 1.2
let gegevens = {
    naam : "Neijens",
    voornaam : "Kenji",
    telefoon : "0468565224",
    geboortedatum : "22/01/2003",
    mailadres : "neijensk@gmail.com",
    volledige_zin: function() {
        let zin = `Mijn naam is ${this.voornaam} ${this.naam} en ik ben geboren op ${this.geboortedatum}. Mijn telefoonnummer is ${this.telefoon} en mijn mailadres is ${this.mailadres}`;
        return zin;
    }
}
console.log(gegevens);

document.getElementById("td").innerHTML = 
`
Naam: ${gegevens.naam}, 
Voornaam: ${gegevens.voornaam},
Telefoon: ${gegevens.telefoon},
Geboortedatum: ${gegevens.geboortedatum},
E-mail: ${gegevens.mailadres}
`;

document.getElementById("p").innerHTML = gegevens.volledige_zin();
*/

/*
// Oefening 1.3
let persoon = {
    naam : "Neijens",
    voornaam : "Kenji",
    telefoon : 32468565224,
    geboortedatum : "22/01/2003",
    mailadres : "neijensk@gmail.com",
}

persoon.lengte = "1.81m";
persoon.gewicht = "108kg"
persoon.leeftijd = 20;
persoon.huidskleur = "blank";
persoon.oogkleur = "groen";

let uitkomst = "";
let eigenschap;
for (eigenschap in persoon) 
{
    uitkomst = uitkomst + persoon[eigenschap] + " ";
}
document.getElementById("p").innerHTML = uitkomst;
*/

/*
// Oefening 1.4
let persoon = {
    naam : "Neijens",
    voornaam : "Kenji",
    telefoon : 32468565224,
    geboortedatum : "22/01/2003",
    mailadres : "neijensk@gmail.com",
}

persoon.lengte = "1.81m";
persoon.gewicht = "108kg"
persoon.leeftijd = 20;
persoon.huidskleur = "blank";
persoon.oogkleur = "groen";

delete persoon.lengte;
delete persoon.gewicht;

let persoonArray = Object.values(persoon);
console.log(persoonArray);
*/