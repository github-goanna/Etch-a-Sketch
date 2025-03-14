const container = document.querySelector(".container")
const inputButton = document.getElementById("gridSize")
inputButton.style.width = "300px"


let containerDim = 600
container.style.width = containerDim + 'px'
container.style.height = containerDim + 'px'

let gridBoxes = 7

gridCreator()

function gridCreator() {
    let arrayLength = gridBoxes * gridBoxes

    for (i = 0; i < arrayLength; i++) {
        gridBox = document.createElement("div")
        container.appendChild(gridBox)
        gridBox.setAttribute("class", "box")
        gridBox.style.width = (containerDim / gridBoxes) -0.01 + 'px';
        gridBox.style.height = containerDim / gridBoxes + 'px';
        gridFader()
    }
}

function gridFader() {
    gridBox.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "purple";
        setTimeout(() => {
            event.target.style.backgroundColor = "";
        }, 500);

    }, false,)
}


inputButton.addEventListener("click", () => {
    console.log("hey dere");
    gridBoxes = prompt("How big do you want the grid to be?", 100);
    container.textContent = ''
    gridCreator()

})