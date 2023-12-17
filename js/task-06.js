function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createBtn.addEventListener('click', () => createBoxes(Number(input.value)));
  destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');

  if (amount >= 1 && amount <= 100) {
    const newBoxes = [];
    let width = 30;
    let height = 30;

    for (let i = 0; i < amount; i += 1) {
      width += 10;
      height += 10;
      const color = getRandomHexColor();
      const newBox = `<div style="width: ${width}px; height: ${height}px; background-color: ${color};" class="box"></div>`;
      newBoxes.push(newBox);
    }

    boxesContainer.innerHTML = newBoxes.join('');
  }
}

 function destroyBoxes() {
    boxesContainer.innerHTML = '';
    input.value = '';
  }


