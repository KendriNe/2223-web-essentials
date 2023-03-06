/*
// Oefening 1.1
let geboortejaar = Number(prompt("Geef je geboortejaar in"));

vandaag =  new Date(Date.now());
let huidige_jaar = vandaag.getFullYear();
let leeftijd = huidige_jaar - geboortejaar;

if (leeftijd >= 20) {
    document.getElementById("h1").innerHTML = `Je bent oud genoeg (${leeftijd} jaar oud) om deze website te bezoeken`;
}
else {
    document.getElementById("h1").innerHTML = "Je bent te jong voor de inhoud van deze website";
}
*/

/*
// Oefening 1.2
let bezoekerAntwoord = prompt("Sport je graag?");

if(bezoekerAntwoord.toLowerCase() == "ja")
{
    alert("Just Do It")
}
else
{
    alert("Jammer, blijf dan maar liggen");
}
*/

/*
// Oefening 1.3
let tijd = new Date();

let uur = tijd.getHours();
let minute = tijd.getMinutes();

if(uur < 12)
{
    console.log(`Het is ${uur}:${minute} in de voormiddag`);
}
else
{
    console.log(`Het is ${uur}:${minute} in de nammidag`)
}
*/

/*
// Oefening 1.4
let tijd = new Date();

let uur = tijd.getHours();
let minute = tijd.getMinutes();

if(uur > 7 && uur< 12)
{
    alert(`Goedemorgen, het is ${uur}:${minute}`);
}
else if(uur > 12 && uur < 18)
{
    alert(`Goede dag, het is ${uur}:${minute}`);
}
else
{
    alert("Goede avond");
}
*/

/*
// Oefening 1.5
let bezoekerAntwoord = Number(prompt("Geef een getal in tussen 0 en 100?"))
if(bezoekerAntwoord > 50)
{
    alert("Te hoog!")
}
else if(bezoekerAntwoord == 50)
{
    alert("Juist antwoord!")
}
else
{
    alert("Te laag!")
}
*/

/*
// Oefening 1.6
let bezoekerAntwoord = prompt("Sport je graag?");

switch (bezoekerAntwoord.toLowerCase()) {
  case "ja":
    alert("Just do it!");
    break;
  default:
    alert("Dat was niet duidelijk, antwoord je vanuit je luie zetel?");
    break;
}
*/

/*
// Oefening 1.7
let vandaag = new Date();
let maand = vandaag.toLocaleDateString('default', { month: 'long' });
alert(`Goede dag, we zitten in de maand ${maand}`);
*/

/*
// Oefening 1.8
let tijd = new Date();

let uur = tijd.getHours();
let minute = tijd.getMinutes();

let dag;

switch(tijd.getDay())
{
    case 0:
        dag = "Zondag";
        break;
    case 1:
        dag = "Maandag";
        break;
    case 2:
        dag = "Dinsdag";
        break;
    case 3:
        dag = "Woensdag";
        break;
    case 4:
        dag = "Donderdag";
        break;
    case 5:
        dag = "Vrijdag";
        break;
    case 6:
        dag = "Zaterdag";
        break;
}

if(uur > 7 && uur< 12)
{
    alert(`Goedemorgen, het is vandaag ${dag} ${uur}:${minute}`);
}
else if(uur > 12 && uur < 18)
{
    alert(`Goede dag, het is vandaag ${dag} ${uur}:${minute}`);
}
else
{
    alert(`Goedenavond, het is vandaag ${dag} ${uur}:${minute}`);
}
*/

/*
// Oefening 1.9
let inputBezoeker = Number(prompt("Geef een getal tussen 1 t.e.m 10"));

if(inputBezoeker >= 1 && inputBezoeker <= 10)
{
    for (let i = 1; i <= 10; i++) 
    {
        let result = inputBezoeker * i;
        console.log(`${inputBezoeker} * ` + i + " = " + result);
      }
}
else
{
    console.log("Niet mogelijk, alleen van 1 t.e.m 10");
}
*/

/*
// Oefening 1.10
for (let i = 1; i <= 7; i++) 
{
    let row = "";

    for (let j = 1; j <= i; j++) 
    {
      row += "#";
    }

    console.log(row);
}
*/

/*
// Oefening 1.11
let getal = Number(prompt("Geef een getal tussen 0 en 10 in"));

if(getal > 0 && getal < 10)
{
    for (let i = 1; i <= getal; i++) 
    {
        let row = "";
    
        for (let j = 1; j <= i; j++) 
        {
          row += "#";
        }
    
        console.log(row);
    } 
}
else
{
    console.log("Niet mogelijk");
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
for (let i = 1; i <= 7; i++) 
{
    let row = "";

    for (let j = 1; j <= 7 - i; j++) 
    {
      row += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) 
    {
      row += "#";
    }

    console.log(row);
  }
  */