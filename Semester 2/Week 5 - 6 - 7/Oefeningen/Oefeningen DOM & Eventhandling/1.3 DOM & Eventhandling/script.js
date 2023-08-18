function generateOddNumbers() {
    let inputGetal = document.getElementById("inputGetal").value;
    let output = document.getElementById("output");

    // Controleren of het ingevoerde getal geldig is
    if (inputGetal < 0 || inputGetal > 50 || isNaN(inputGetal)) {
    output.value = "Fout: Ongeldige waarde. Voer een getal tussen 0 en 50 in.";
    return;
    }

    let currentNumber = 1;
    let oddNumbers = "";

    while (currentNumber <= inputGetal) {
    oddNumbers += currentNumber + " ";
    currentNumber += 2;
    }

    output.value = oddNumbers;
}