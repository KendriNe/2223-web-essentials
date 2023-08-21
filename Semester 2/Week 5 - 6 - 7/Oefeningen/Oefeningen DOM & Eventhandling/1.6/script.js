function dagenInTekst() {
    let inputDag = document.getElementById("inputDag").value;
    let condition = true;

    if (condition) {
        switch (inputDag) {
            case "maandag":
                document.getElementById("output").value = "is de eerste dag van de week";
                break;
            case "dinsdag":
                document.getElementById("output").value = "is de tweede dag van de week";
                break;
            case "woensdag":
                document.getElementById("output").value = "is de derde dag van de week";
                break;
            case "donderdag":
                document.getElementById("output").value = "is de vierde dag van de week";
                break;
            case "vrijdag":
                document.getElementById("output").value = "is de vijfde dag van de week";
                break;
            case "zaterdag":
                document.getElementById("output").value = "is de zesde dag van de week";
                break;
            case "zondag":
                document.getElementById("output").value = "is de zevende dag van de week";
                break;
            default:
                document.getElementById("output").value = "is de niet-bestaande dag van de week";
        }
    }
}