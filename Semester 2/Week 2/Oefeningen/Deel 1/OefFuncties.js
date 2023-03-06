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