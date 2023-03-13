/*
// Oefening 1.1
function vermenigvuldigen(getal1, getal2) 
{
    return getal1 * getal2;
}

document.getElementById("P1").innerHTML = vermenigvuldigen(20, 5);
*/

/*
// Oefening 1.2
function verschil() 
{
    let input = prompt("Geef een getal:");
    let getal = parseInt(input);
    let result = getal - 100;
    console.log(result);
}
  
verschil();
*/

/*
// Oefening 1.3
function isVijftig()
{
    let getal1 = Number(prompt("Geef een getal tussen 0 en 100"));
    let getal2 = Number(prompt("Geef een tweede getal tussen 0 en 100"));

    if(getal1 == 50 || getal2 == 50)
    {
        document.getElementById("P1").innerHTML = "Hoera Vijftig";    }
    else if(getal1 + getal2 == 50)
    {
        document.getElementById("P1").innerHTML = "Hoera Vijftig";
    }
    else
    {
        document.getElementById("P1").innerHTML = "Niet goed geraden"
    }
}

isVijftig();
*/

/*
// Oefening 1.4
function startMetHallo()
{
    let zin = prompt("Geef een zin");

    if(zin.toLowerCase().startsWith("hallo"))
    {
        document.getElementById("P1").innerHTML = zin;
    }
    else
    {
        document.getElementById("P1").innerHTML = `Hallo, ${zin.toLowerCase()}`;
    }
}

startMetHallo();
*/

/*
// Oefening 1.5
function zinSplitsen()
{
    let randomZin = prompt("Geef een zin in?");
    let randomGetal = prompt("Geef een getal in waar je de zin wilt splitsen?");

    if(randomGetal >= randomZin.length)
    {
        alert("Het getal dat je ingaf is groter dan de lengte van je zin");
    }
    else
    {
        const splitGetal = randomGetal;

        const eersteStuk = randomZin.substring(0, splitGetal);
        const tweedeStuk = randomZin.substring(splitGetal);

        alert(`Het eerste stuk van de zin is: ${eersteStuk} \n Het tweede stuk van de zin is: ${tweedeStuk}`);
    }
}

zinSplitsen();
*/

/*
// Oefening 1.6
function zinSplitsen() 
{
  let randomZin = prompt("Geef een zin in?");
  let randomGetal = prompt("Geef een getal in waar je de zin wilt splitsen?");

  if (randomZin && randomGetal && !isNaN(randomGetal)) 
    {
        const splitGetal = parseInt(randomGetal);

        if (splitGetal >= randomZin.length) 
        {
        alert("Het getal dat je ingaf is groter dan de lengte van je zin");
        } 
        else 
        {
        const eersteStuk = randomZin.slice(0, splitGetal);
        const tweedeStuk = randomZin.slice(splitGetal + 1);
        alert(`Het eerste stuk van de zin is: ${eersteStuk}\nHet tweede stuk van de zin is: ${tweedeStuk}`);
        }
    } 
    else 
    {
        alert("Ongeldige input");
    }
}

zinSplitsen();
*/

/*
// Oefening 1.7
function alleWoordenStartenMetHoofdletter()
{
    const zin = "Deze oefeningen zijn héél leuk";

    const woorden = zin.split(" ");

    for (let i = 0; i < woorden.length; i++) 
    {
       woorden[i] = woorden[i][0].toUpperCase() + woorden[i].slice(1);
    }

    let hoofdletterZin = woorden.join(" ");
    console.log(hoofdletterZin);
}

alleWoordenStartenMetHoofdletter();
*/

/*
// Oefening 1.8
function telDeKlinkers(zin) 
{
    let klinkers = 'aeiouAEIOU';
    let klinkersCount = 0;
    
    for (let i = 0; i < zin.length; i++) 
    {
      if (klinkers.indexOf(zin[i]) !== -1) 
      {
        klinkersCount++;
      }
    }
    
    return klinkersCount;
}
  

let zin = prompt('Geef een zin:');
let aantalKlinkers = telDeKlinkers(zin);
alert(`De zin "${zin}" heeft ${aantalKlinkers} klinkers.`);
*/

/*
// Oefening 1.9
function grootsteGetal() 
{
    let grootste = -Infinity;
    let input;
    
    do 
    {
      input = prompt('Geef een nummer, of "stop" om te eindigen:');
      
      // Check if input is a number and update largest if necessary
      if (!isNaN(input) && input !== '' && input !== null) 
      {
        let nummer = Number(input);

        if (nummer > grootste) 
        {
          grootste = nummer;
        }
      }
    } 

    while (input !== 'stop');
    
    alert(`Het grootste getal was: ${grootste}`);
}

grootsteGetal();
*/