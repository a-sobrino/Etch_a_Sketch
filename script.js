const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
const container = document.createElement('div');



slider.addEventListener('input', () => {
    sliderValue.textContent = slider.value;
});

// Create grid container
container.classList.add('container');
document.body.appendChild(container)

let numCells = 16;
const cellSizePercentage = 100 / numCells;

// Create cells inside grid container
for (i = 0; i < numCells * numCells ; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${cellSizePercentage}%`
    cell.style.height = `${cellSizePercentage}%`
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'black'
    })
    container.appendChild(cell);
}

