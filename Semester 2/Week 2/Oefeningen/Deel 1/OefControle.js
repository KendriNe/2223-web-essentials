/*
// Oefening 1.1
let geboortejaar = Number(prompt("Geef je geboortejaar in"));

vandaag =  new Date(Date.now());
let huidige_jaar = vandaag.getFullYear();
let leeftijd = huidige_jaar - geboortejaar;

if (leeftijd > 20) {
    document.getElementById("h1").innerHTML = `Je bent oud genoeg (${leeftijd} jaar oud) om deze website te bezoeken`;
}
else {
    document.getElementById("h1").innerHTML = "Je bent te jong voor de inhoud van deze website";
}
*/

/*
// Oefening 1.10
let line = "#";
for ( line.length < 8; line += "#";) {
    console.log(line);
}
*/

/*
// Oefening 1.12
let aantal_lijnen = 7;
let lijninhoud;
let spatie = " ";
let teken = "#"; 

for (let i = 1 ; i<= aantal_lijnen;i++) 
{   
    lijninhoud ="";     
    lijninhoud = spatie.repeat(aantal_lijnen - i) + teken.repeat(i);     
    console.log(lijninhoud); 
}
*/

/*
// Oefening 1.13
let aantal_lijnen = 7;
let lijninhoud;
let spatie = " ";
let teken = "#"; 

for (let i = 1 ; i<= aantal_lijnen;i++) 
{   
    lijninhoud ="";     
    lijninhoud = spatie.repeat(aantal_lijnen - i) + teken.repeat(i+(i+1));     
    console.log(lijninhoud); 
}
*/

/*
// Oefening FizzBuzz
for (let i = 1; i <= 100; i++)
{
    if ((i % 3 == 0) && (i % 5 != 0))
    {
        console.log("Fizz");
    }
    else if ((i % 5 == 0) && (i % 3 != 0))
    {
        console.log("Buzz");
    }
    else if ((i % 5 == 0) && (i % 3 == 0))
    {
        console.log("FizzBuzz");
    }
    else 
    {
        console.log(i);
    }
}
*/





