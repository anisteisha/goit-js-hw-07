const destroyButton = document.querySelector('[data-destroy]');
const createButton = document.querySelector('[data-create]');
const inputNumber = document.querySelector('input[type="number"]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener("click", () => {
    const amount = parseInt(inputNumber.value);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        inputNumber.value = '';
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    boxesContainer.innerHTML = '';
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(div);
        size += 10;
    }
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}




            