
const containerBox = document.querySelector(".container");
let button = document.createElement("button");


function createDivs (){
    let divbox = document.createElement("div");
    containerBox.appendChild(divbox);
    divbox.classList.add("boxes");
}

for (i=0; i<900; i++) {
createDivs();
}
let numBoxes;
function newgrid () {
  numBoxes = prompt ("Enter # of boxes per side"," ");
}

