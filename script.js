$(document).ready(function () {
    const gridContainer = document.getElementById("gridContainer");
    let div
    let gridSize
    let color = 'black';
    let red
    let green
    let blue
    let opacity
    let currentBackground
    let currentShade

    // default to 16x16 grid when the page loads
    //resizeGrid(16);    

    // create a new grid of the users choosing when the new grid button is pressed
    const newGridButton = document.getElementById("newGrid");
    newGridButton.addEventListener('click', () => {
        resizeGrid(prompt("Enter Grid Size (e.g. 16 creates a 16x16 grid):"));

        // clear the entire grid back to all white boxes
        const clearButton = document.getElementById("clearButton");
        clearButton.addEventListener('click', () => {
            gridBoxes.forEach((div) => {
                div.style.backgroundColor = 'white';
            })
            // show user which drawing color they have selected
            highlightColor(color);
        })

        // change selected color to black
        const gridBlack = document.getElementById('gridBlack');
        gridBlack.addEventListener('click', () => {
            color = 'black';
        })

        // change selected color to white
        const gridEraser = document.getElementById('gridEraser');
        gridEraser.addEventListener('click', () => {
            color = 'white';
        })

        // change selected color to randomly generated colors
        const gridRandom = document.getElementById('gridRandom');
        gridRandom.addEventListener('click', () => {
            color = 'random';
        })

        // change selected color to grayscale
        const gridGrayscale = document.getElementById('gridGrayscale');
        gridGrayscale.addEventListener('click', () => {
            color = 'grayscale';
        })

        // change hovered-over grid boxes to selected color
        const gridBoxes = document.querySelectorAll('.gridBox')
        gridBoxes.forEach((div) => {
            div.addEventListener('mouseover', () => {
                if(color === 'random') {
                    red = Math.random() * 255;
                    green = Math.random() * 255;
                    blue = Math.random() * 255;
                    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
                }
                else if(color === 'grayscale') {
                    currentBackground = $(div).css('background-color');
                    console.log(currentBackground);
                    currentShade = currentBackground.split(",");
                    if(currentBackground === 'rgb(0, 0, 0)'){
                        opacity = 1;
                    }
                    else if(!(currentShade[3])){
                        opacity = 0.1;
                        div.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                    }
                    else {
                        currentShade = Number(currentShade[3].replace(')', ''));
                        if(currentShade === 1) {
                            opacity = 1;
                            div.style.backgroundColor = `rgb(0, 0, 0)`;
                        }
                        else{
                            opacity = currentShade + 0.1;
                            div.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                        }
                    }
                }
                else {
                    div.style.backgroundColor = color;
                }
            })
        })
        highlightColor(color);
    })

    // show user which drawing color they have selected
    function highlightColor(color){
        switch(color) {
            case 'black':
                gridBlack.focus();
                break;
            case 'white':
                gridEraser.focus();
                break;
            case 'random':
                gridRandom.focus();
                break;
            case 'grayscale':
                gridGrayscale.focus();
                break;
        }
    }

    // create an X-by-X size grid of divs within a 640px-by-640px container div
    function resizeGrid(gridSize){
        while(gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, ${600/gridSize}px)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, ${600/gridSize}px)`;
        for(row = 1; row <= gridSize; row++) {
            for(col = 1; col <= gridSize; col++){
                div = document.createElement("div");
                div.className = "gridBox";
                div.style.gridColumnStart = col;
                div.style.gridColumnEnd = (col + 1);
                div.style.gridRowStart = row;
                div.style.gridRowEnd = (row + 1);
                div.style.backgroundColor = 'rgb(255, 255, 255)';
                gridContainer.appendChild(div);
            }
        }
    }
})