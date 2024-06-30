function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}

function createBoxes(amount) {
  let template = '';
  let size = 30;

  for (let index = 0; index < amount; index++) {
    template += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size += 10;
  }

  document.querySelector('#boxes').innerHTML = template;
}

const addBtn = document.querySelector('button[data-create]');
const delBtn = document.querySelector('button[data-destroy]');
const amountInput = document.querySelector('#controls input');

addBtn.addEventListener('click', () => {
  let amount = parseInt(amountInput.value);

  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
    amountInput.value = '';
  } else {
    return alert('Amount must be between 1 and 100');
  }
});

delBtn.addEventListener('click', destroyBoxes);
