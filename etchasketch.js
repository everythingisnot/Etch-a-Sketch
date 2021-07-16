
const containerBox = document.querySelector("#container");

function createDivs (){
    let divbox = document.createElement("div");
    containerBox.appendChild(divbox);
    divbox.classList.add("boxes");
}

for (i=0; i<256; i++) {
createDivs();
}

//div1.classList.add("boxes");
//div2.classList.add("boxes");
//div3.classList.add("boxes");



