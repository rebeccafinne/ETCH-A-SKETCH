function genGrid(){
  let maxAmount = 16;
  let grid = document.getElementById("container");

  for(var i = 0; i < maxAmount; i++){
    var row = document.createElement("div");
    row.className = "row";

    for(var x = 0; x < maxAmount; x++){
      var cell = document.createElement("div");
      cell.className = "gridsquare";
      cell.style.backgroundColor = "blue";
      cell.innerText = "Hello";
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }

};


$(document).ready(function() {
    genGrid();
  });
