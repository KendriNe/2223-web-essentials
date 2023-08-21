function filterWoorden() {
    const tekst = document.getElementById("inputTekst").value;
    const filter = document.getElementById("inputFilter").value.toLowerCase();

    let woorden = tekst.split(" ");
    let gefilterdeWoorden = [];
    let nietGetoondeWoorden = 0;

    woorden.forEach(woord => {
        if (!filter || !woord.toLowerCase().includes(filter)) {
            gefilterdeWoorden.push(woord);
        } else {
            nietGetoondeWoorden++;
        }
    });

    const woordenContainer = document.getElementById("woordenContainer");
    woordenContainer.innerHTML = ""; // Clear previous content

    gefilterdeWoorden.reverse().forEach(woord => {
        const woordElement = document.createElement("span");
        woordElement.textContent = woord;
        woordElement.classList.add("filtered-word");
        woordenContainer.appendChild(woordElement);
        woordenContainer.appendChild(document.createTextNode(" "));
    });

    const filteredCount = document.getElementById("filteredCount");
    filteredCount.textContent = `${nietGetoondeWoorden} woord(en) niet getoond.`;
}


