function genereerMelding() {
    let voornaam = document.getElementById("nameInput").value;
    let achternaam = document.getElementById("surnameInput").value;

    if (voornaam && achternaam) {
        // Both fields are filled
        let melding = `Welkom, ${voornaam} ${achternaam}`;
        document.getElementById("output").value = melding;
    } else {
        // One or both fields are empty
        let foutMelding = "Vul alstublieft beide velden in.";
        document.getElementById("output").value = foutMelding;
    }
}
