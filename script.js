let size = 16;  // Default grid size

function generateGrid(size) {
    let container = document.querySelector(".container");
    container.textContent = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let element = document.createElement("div");
        element.classList.add("element");
        container.appendChild(element);
    }
}

function sizeButton() {
    let input = parseInt(prompt("Enter the Size of the grid (Min: 1, Max: 200)"));
    if (input >= 1 && input <= 200) {
        size = input; // Update the grid size
        generateGrid(input);
    } else if (isNaN(input)) {
        return;
    } else {
        alert("Please Enter a Number between 1 and 200.");
        sizeButton();
    }
}

function randomColorGenerator() {
    let colour = "rgb(";
    for (let i = 0; i < 3; i++) {
        colour += Math.floor(Math.random() * 256) + ",";
    }
    colour = colour.slice(0, -1) + ")"; // Remove the trailing comma
    return colour;
}

function clear() {
    let elements = document.querySelectorAll(".element");
    elements.forEach(element => {
        element.style.backgroundColor = "antiquewhite";
        element.style.opacity = "0"; // Reset opacity to 0
    });
}

function applyRandomColor() {
    let elements = document.querySelectorAll(".element");
    elements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = randomColorGenerator();
            element.style.opacity = "1"; // Set opacity to 1 for random color mode
        });
    });
}

function applyShading() {
    generateGrid(size);
    let elements = document.querySelectorAll(".element");
    elements.forEach(element => {
        element.style.backgroundColor = "antiquewhite";
        element.style.opacity = "0"; // Reset opacity to 0
    });
    elements.forEach(element => {
        element.addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(element.style.opacity);
            if (isNaN(currentOpacity)) {
                currentOpacity = 0;
            }
            if (currentOpacity < 1) {
                element.style.opacity = (currentOpacity + 0.1).toFixed(1);
                element.style.backgroundColor = "black";
            } else {
                element.style.backgroundColor = "black";
            }
        });
    });
}

function draw() {
    let elements = document.querySelectorAll(".element");
    elements.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.backgroundColor = "blue";
            element.style.opacity = "1";
        });
    });
}

generateGrid(size);

document.querySelector(".size").addEventListener("click", sizeButton);
document.querySelector(".clear").addEventListener("click", clear);
document.querySelector(".random").addEventListener("click", applyRandomColor);
document.querySelector(".opacity").addEventListener("click", applyShading);
document.querySelector(".pen").addEventListener("click", draw);
