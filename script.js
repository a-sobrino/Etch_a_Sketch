const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
const container = document.createElement('div');

// Create grid container
container.classList.add('container');
document.body.appendChild(container);

function createCells() {
    sliderValue.textContent = slider.value;
    const numCells = slider.value;
    const cellSizePercentage = 100 / numCells;

    for (let i = 0; i < numCells * numCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${cellSizePercentage}%`;
        cell.style.height = `${cellSizePercentage}%`;
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'black';
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
