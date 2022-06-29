const body = document.querySelector('body');
const container = document.querySelector('.container');
const children = container.querySelectorAll('div');
const outputContainer = document.createElement('div');

outputContainer.className = 'outputContainer';
body.append(outputContainer);

children.forEach((child, index) => {
  const itemChild = document.createElement('div');
  itemChild.textContent = `child № ${index} = ${child.textContent} `;
  outputContainer.append(itemChild);
});