$(document).ready(function () {
    const gridContainer = document.getElementById("gridContainer");
    let div
    let gridSize

    const newGridButton = document.getElementById("newGrid");
    newGridButton.addEventListener('click', () => {
        gridSize = prompt("Enter New Grid Size (e.g. 16 creates a 16x16 grid):")
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${640/gridSize}px)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, ${640/gridSize}px)`;
        for(row = 1; row <= gridSize; row++) {
            for(col = 1; col <= gridSize; col++){
                div = document.createElement("div");
                div.className = "gridBox";
                div.style.gridColumnStart = col;
                div.style.gridColumnEnd = (col + 1);
                div.style.gridRowStart = row;
                div.style.gridRowEnd = (row + 1);
                div.style.backgroundColor = 'white';
                gridContainer.appendChild(div);
            }
        }

        const gridBoxes = document.querySelectorAll('.gridBox')
        gridBoxes.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            })
        })

        const clearButton = document.getElementById("clearButton");
        clearButton.addEventListener('click', () => {
            gridBoxes.forEach((div) => {
                div.style.backgroundColor = 'white';
            })
        })
    })
})