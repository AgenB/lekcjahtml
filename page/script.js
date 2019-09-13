$(document).ready(function() {
    let table = document.createElement("table");
    for (let i = 0; i < 5; i++) {
        let row = document.createElement("tr");
        for (let y = 0; y < 5; y++) {
            let cell = document.createElement("td");
            $(cell).css("border-color", "black");
            $(cell).mouseenter(function() {
                $(cell).css("border-color", "red");
            });
            $(cell).mouseleave(function() {
                $(cell).css("border-color", "black");
            });
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.querySelector("div").appendChild(table);
});