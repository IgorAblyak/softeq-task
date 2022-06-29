const inputArray = document.querySelector('.input-array');
const result = document.querySelector('.result');
const list = ['1', 'a', '25', '13.1'];
const strList = JSON.stringify(list);


const sumOfListItems = (arrayString) => {
  return arrayString
  .filter((string) => Number.isInteger(Number(string)))
  .reduce((acc, next) => Number(acc) + Number(next));
};

const sumIntegerItems = sumOfListItems(list);

inputArray.append(`[ ${list} ]`);
result.textContent = sumIntegerItems;