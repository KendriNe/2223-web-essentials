// Verkrijg referenties naar de selectievakjes en de voorbeeldtekst
const fontSelect = document.getElementById("fontSelect");
const sizeSelect = document.getElementById("sizeSelect");
const voorbeeldTekst = document.getElementById("voorbeeldTekst");

// Voeg een event listener toe aan beide selectievakjes
fontSelect.addEventListener("change", updateVoorbeeldTekst);
sizeSelect.addEventListener("change", updateVoorbeeldTekst);

// Functie om de voorbeeldtekst bij te werken op basis van de geselecteerde waarden
function updateVoorbeeldTekst() {
    const selectedFont = fontSelect.value;
    const selectedSize = sizeSelect.value;
    voorbeeldTekst.style.fontFamily = selectedFont;
    voorbeeldTekst.style.fontSize = selectedSize;
}

// Roep de functie eenmalig aan om de initiële opmaak in te stellen
updateVoorbeeldTekst();
