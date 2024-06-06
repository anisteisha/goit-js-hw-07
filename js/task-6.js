document.addEventListener('DOMContentLoaded', () => {
            const destroyButton = document.querySelector('[data-destroy]');
            const createButton = document.getElementById('[data-create]');
            const inputNumber = document.getElementById('inputNumber');
            const boxesContainer = document.getElementById('boxes');

            createButton.addEventListener('click', () => createBoxes(input.value));
            destroyButton.addEventListener('click', destroyBoxes);

            function createBoxes() {
                const amount = parseInt(inputNumber.value);
                if (isNaN(amount) || amount < 1 || amount > 100) {
                    alert("Please enter a number between 1 and 100.");
                    return;
                }

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

                inputNumber.value = ''; 
            }

            function destroyBoxes() {
                boxesContainer.innerHTML = '';
            }


    function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


});

