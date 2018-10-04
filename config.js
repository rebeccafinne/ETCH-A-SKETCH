let maxAmount = 16;

function genGrid(maxAmount){
  let grid = document.getElementById("container");
  for(var i = 0; i < maxAmount; i++){
    for(var x = 0; x < maxAmount; x++){
      var cell = document.createElement("div");
      cell.className = "gridsquare";
      cell.id = "gridsquare";
      cell.style.width = 100 / maxAmount + "%";
			cell.style.height = 100 / maxAmount + "%";
      //row.appendChild(cell);
      cell.addEventListener("mouseover", myScript);

      grid.appendChild(cell);
    }
  }
};

function resetScreen(){
  let number = window.prompt("How big do you want the grid to be? \n Max 64!","16");
  if(number > 64 ){
    resetScreen();

  }else{
    removeGrid();
    maxAmount = number;
    genGrid(maxAmount);
  }
};

function removeGrid(){
  $('.gridsquare').remove();
};

function myScript(){
  $(this).css("background-color", "black");
};

$(document).ready(function() {
    genGrid(maxAmount);
});
