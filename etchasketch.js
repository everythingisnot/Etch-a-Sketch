
let numBoxes;
const containerBox = document.querySelector(".container");
function newGrid (){
numBoxes = parseInt(prompt ("Enter grid width in # of boxes"));
totalBoxes = numBoxes * numBoxes;  
containerBox.style.gridTemplateColumns = "repeat("+numBoxes+", 1fr)";
containerBox.style.gridTemplateRows = "repeat("+numBoxes+", 1fr)";

for (i=0; i<totalBoxes; i++) {
    createDivs();
    }
}
//document.documentElement.style.setProperty("--dynamic-grid-size", numBoxes);
function createDivs (){
    let divbox = document.createElement("div");
    containerBox.appendChild(divbox);
    divbox.classList.add("boxes");
    
}




