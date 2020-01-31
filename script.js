$(document).ready(function () {
    const gridContainer = document.getElementById("gridContainer");
    let div

    for(row = 1; row <= 16; row++) {
        for(col = 1; col <= 16; col++){
            div = document.createElement("div");
            div.className = "gridBox";
            div.style.gridColumnStart = col;
            div.style.gridColumnEnd = (col + 1);
            div.style.gridRowStart = row;
            div.style.gridRowEnd = (row + 1);
            gridContainer.appendChild(div);
        }
    }

    const gridBoxes = document.querySelectorAll('.gridBox')
    gridBoxes.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    })

})