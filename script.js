const container = document.querySelector(".container")

let dims = 100
let array = dims*dims

for (i=0; i<array; i++) {
    grid = document.createElement("div")
    container.appendChild(grid)
    grid.setAttribute("class", "box")
    grid.style.width = 400/dims+ 'px';
    grid.style.height = 400/dims +'px';
    gridFader()
}

function gridFader(){
        grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "purple";
        setTimeout(() => {
            event.target.style.backgroundColor="";
        }, 500);

    }, false,)
}