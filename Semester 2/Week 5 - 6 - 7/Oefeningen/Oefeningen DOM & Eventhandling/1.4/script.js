function tekenPyramide() {
    let getal = document.getElementById("inputGetal").value;
    let output = document.getElementById("output");

    // Controleren of het ingevoerde getal geldig is
    if (getal < 2 || getal > 10 || isNaN(getal)) {
    output.textContent = "Fout: Ongeldige waarde. Voer een getal tussen 2 en 10 in.";
    return;
    }

    output.innerHTML = "";

    for (let i = 1; i <= getal; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
    row += "* ";
    }
    output.innerHTML += row + "<br>";
    }
}