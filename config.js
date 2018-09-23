

function genGrid(){
  let maxAmount = 16;
  let grid = document.getElementById("container");

  for(var i = 0; i < maxAmount; i++){

    /*var row = document.createElement("div");
    row.className = "row";*/

    for(var x = 0; x < maxAmount; x++){
      var cell = document.createElement("div");
      cell.className = "gridsquare";
      cell.id = "gridsquare";
      cell.innerText = "Hello";
      //row.appendChild(cell);
      grid.appendChild(cell);
    }

    }


};

/*function hover(){
  item.setAttribute("style", "background-color:black;")
}*/

$(document).ready(function() {
    genGrid();

  /*  $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
      });*/
  });
