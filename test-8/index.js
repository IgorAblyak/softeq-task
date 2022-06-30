let count = 0;
const min = 1;
const max = 1000000;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const counter = document.querySelector('.counter');
const container = document.querySelector('.container');
const message = document.querySelector('.message');
const input = document.querySelector('input');
const button = document.querySelector('button');

input.focus();
input.value = '';

const getInputNumber = () => {
  message.textContent = '';
  if (Number.isNaN(Number(input.value))) {
    message.textContent = 'Must be a number';
    input.value = '';
    input.focus();
    return;
  }
  const inputValue = Number.parseInt(input.value);
  input.value = '';
  input.focus();
  guess(inputValue);
  count++;
  counter.textContent = `№ Attempts = ${count}`;
  if (count === 50) {
    message.textContent = 'You lose!';
  }
}

const guess = (value) => {
  if(value === randomNumber) {
    message.textContent = 'You win! (0)';
    message.style.color = 'green';
    return 0;
  }
  if(value > randomNumber){
    message.textContent = 'Number should be less then guessing number (-1)!';
    message.style.color = 'red';
    return -1;
  } else {
    message.textContent = 'Number should be more then guessing number (1)!';
    message.style.color = 'red';
    return 1;
  }
};


button.addEventListener('click', getInputNumber);