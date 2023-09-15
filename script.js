const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
const container = document.createElement('div');

container.classList.add('container');
document.body.appendChild(container);

function createCells() {
    sliderValue.textContent = slider.value;
    const numCells = slider.value;
    const cellSizePercentage = 100 / numCells;

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    for (let i = 0; i < numCells * numCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellSizePercentage}%`;
        cell.style.height = `${cellSizePercentage}%`;
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = `rgb(${red--}, ${green--}, ${blue--})`;
        });
        container.appendChild(cell);
    }
}

// Create initial grid when the page loads
createCells();

slider.addEventListener('input', () => {
    // Clear existing cells from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createCells(); 
});
