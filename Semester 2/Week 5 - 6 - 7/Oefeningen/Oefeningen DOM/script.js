/*
<label> > </label>
<select id="berghoogte">
<option value="">All</option>
<option value="">3000</option>
<option value="">6000</option>
</select>
*/
let v_idSelect = document.getElementById('idSelect');
let v_output = document.getElementById('mountains');

let v_label = document.createElement('label');
v_label.textContent = " > ";
v_idSelect.appendChild(v_label);

let v_select = document.createElement('select');
v_idSelect.appendChild(v_select);
v_select.id = "berghoogte";
let v_option;

for (let i = 0; i < 3; i++) 
{
    v_option = document.createElement('option');
    v_select.appendChild(v_option);
    v_option.textContent = (i * 3000).toString();

}

const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let v_table, v_thead, v_th, v_tr, v_td, v_text;


    // 1. maak hier eerst de tabel <TABLE>
        v_table = document.createElement('table');
        v_table.style.width = "50%";
        v_output.appendChild(v_table);
    // 2. maak hier de hoofdingen <THEAD><TH> hoofdinglabels

    let array_hoofding = Object.keys(MOUNTAINS[0]);
    // <thead>
    //     <th>name</th><th>height</th><th>place</th>
    // </thead>
        v_thead = document.createElement('thead');
        v_table.appendChild(v_thead);
        for (let i=0; i < array_hoofding.length; i++) {
           v_th = document.createElement('th');
           v_th.style.textAlign = 'left';
           v_thead.appendChild(v_th);
           v_text = document.createTextNode(array_hoofding[i]);
           v_th.appendChild(v_text);
        }
    // 3. maak hier de inhoud van de tabel <TR><TD> data uit de array
        // maak iedere rij rij apart op basis vd array
        for (let i=0; i < MOUNTAINS.length; i++)
        {
            // maak de rij (v_tr)
            v_tr = document.createElement('tr');
            v_table.appendChild(v_tr);

            // maak de cel name (v_td, v_text)
            v_td = document.createElement('td');
            v_tr.appendChild(v_td);
            v_text = document.createTextNode(MOUNTAINS[i].name);
            v_td.appendChild(v_text);

            // maak de cel height (v_td, v_text)
            v_td = document.createElement('td');
            v_tr.appendChild(v_td);
            v_text = document.createTextNode(MOUNTAINS[i].height);
            v_td.appendChild(v_text);

            // maak de cel place (v_td, v_text)
            v_td = document.createElement('td');
            v_tr.appendChild(v_td);
            v_text = document.createTextNode(MOUNTAINS[i].place);
            v_td.appendChild(v_text);

        }