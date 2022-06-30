const container = document.querySelector('.container');
const btn = document.querySelector('button');
const dataBox = document.createElement('div');
const h2 = document.createElement('h2');


dataBox.className = 'data';
container.append(h2, dataBox);

const displayData = (array) => {
  for (let item of array) {
    const boxLetter = document.createElement('span');
    boxLetter.textContent = item;
    dataBox.append(boxLetter);
  }
  h2.textContent = 'Output letters array';
};

//function implements without character ' (quote), " (double quote) or ` (backquote)
const getData = () => {
  const resultArray = [];
  for (let letter = 65; letter <= 90; letter += 1) {
    resultArray.push(String.fromCodePoint(letter));
    
  }
  displayData(resultArray);
  return resultArray;
}

btn.addEventListener('click', getData, {once: true});
