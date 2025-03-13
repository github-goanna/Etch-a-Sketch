const container = document.querySelector(".container")

let containerDim = 600
let gridBoxes = 200

container.style.width = containerDim + 'px'
container.style.height = containerDim + 'px'

let arrayLength = gridBoxes*gridBoxes

for (i=0; i<arrayLength; i++) {
    gridBox = document.createElement("div")
    container.appendChild(gridBox)
    gridBox.setAttribute("class", "box")
    gridBox.style.width = containerDim/gridBoxes+ 'px';
    gridBox.style.height = containerDim/gridBoxes +'px';
    gridFader()
}

function gridFader(){
        gridBox.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "purple";
        setTimeout(() => {
            event.target.style.backgroundColor="";
        }, 500);

    }, false,)
}