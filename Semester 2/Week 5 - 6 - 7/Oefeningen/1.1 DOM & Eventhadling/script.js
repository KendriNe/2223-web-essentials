function bereken() {
    const getal1 = document.getElementById("input1").value;
    const getal2 = document.getElementById("input2").value;

    if (!isNaN(getal1) && !isNaN(getal2)) {
        let berekening = parseInt(getal1) * parseInt(getal2);
        let uitkomst = `Het product van ${getal1} en ${getal2} is ${berekening}`;;
        document.getElementById("output").value = uitkomst;
    }
    else {
        let foutMelding = "U heeft geen geldige getallen ingegeven";
        document.getElementById("output").value = foutMelding;
    }
}




