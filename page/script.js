$(document).ready(function() {
    let tableRows = 5;
    let tableCols = 5;
    let cellId = 0;
    let table = document.createElement("table");
    for (let i = 0; i < tableRows; i++) {
        let row = document.createElement("tr");
        for (let y = 0; y < tableCols; y++) {
            let cell = document.createElement("td");
            $(cell).attr("cellId", cellId);
            $(cell).css("border-color", "black");
            $(cell).mouseenter(function() {
                $(this).css("border-color", "red");
            });
            $(cell).mouseleave(function() {
                $(this).css("border-color", "black");
            });
            $(cell).click(function() {
                $(this).toggleClass("blue");
                $("td[cellId='" + $(this).attr("cellId") + "']").toggleClass("blue");
            });
            cellId++
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.querySelector("div").appendChild(table);
});