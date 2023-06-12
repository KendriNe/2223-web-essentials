function createTable() {
    // Create an array of data for the table
    const tableData = [
        {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
        {name: "Everest", height: 8848, place: "Nepal"},
        {name: "Mount Fuji", height: 3776, place: "Japan"},
        {name: "Vaalserberg", height: 323, place: "Netherlands"},
        {name: "Denali", height: 6168, place: "United States"},
        {name: "Popocatepetl", height: 5465, place: "Mexico"},
        {name: "Mont Blanc", height: 4808, place: "Italy/France"}
    ];

    // Create the table element
    var table = document.createElement("table");

    // Create the table header
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    var headers = ["name", "height", "place"];

    headers.forEach(function (header)
    {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");

    tableData.forEach(function (row) {
        const tr = document.createElement("tr");
        headers.forEach(function (header) {
            const td = document.createElement("td");
            td.textContent = row[header];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);

    });
    table.appendChild(tbody);

    // Append the table to the output tag
    const tableOutput = document.getElementById("mountains");
    tableOutput.innerHTML = "";
    tableOutput.appendChild(table);
}

// Call the createTable function when the page loads
document.addEventListener("DOMContentLoaded", function () {
    createTable();
});
