const container = document.querySelector(".container")
const inputButton = document.getElementById("gridSize")
inputButton.style.width = "300px"


let containerDim = 600
container.style.width = containerDim + 'px'
container.style.height = containerDim + 'px'

let gridBoxes = 20
let gridColour = "green"

gridCreator()

function gridCreator() {
    let arrayLength = gridBoxes * gridBoxes
    for (i = 0; i < arrayLength; i++) {
        gridBox = document.createElement("div")
        container.appendChild(gridBox)
        gridBox.setAttribute("class", "box")
        gridBox.style.width = (containerDim / gridBoxes) -0.01 + 'px';
        gridBox.style.height = containerDim / gridBoxes + 'px';
        gridBox.style.backgroundColor = gridColour;
        gridBox.style.opacity = 1
        gridFader()
    }
}

function gridFader() {
    gridBox.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
        setTimeout(() => {
            event.target.style.backgroundColor = gridColour;
        }, 500);
        event.target.style.opacity -= 0.1;
    }, false,)
}


inputButton.addEventListener("click", () => {
    gridBoxes = prompt("How big do you want the grid to be?", 100);
    container.textContent = ''
    gridCreator()
})