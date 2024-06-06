document.addEventListener('DOMContentLoaded', () => {
            const destroyButton = document.querySelector('[data-destroy]');
            const createButton = document.querySelector('[data-create]');
            const input = document.querySelector('inputNumber');
            const boxesContainer = document.querySelector('boxes');

            createButton.addEventListener('click', () => createBoxes(input.value));
            destroyButton.addEventListener('click', destroyBoxes);

            function createBoxes() {
                const amount = parseInt(input.value);
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

                input.value = ''; 
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

