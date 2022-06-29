const container = document.querySelector('.container');

for (let i = 1; i <= 99; i ++) {
  const boxNumber = document.createElement('span');
  boxNumber.textContent = i;
  if (i % 3 === 0) { 
    boxNumber.textContent = 'Open';
    boxNumber.style.color = 'blue';
  }
  if (i % 7 === 0) { 
    boxNumber.textContent = 'Source';
    boxNumber.style.color = '#ff8300';
  }
  if (i % 3 === 0 && i % 7 === 0) { 
    boxNumber.textContent = 'OpenSource';
    boxNumber.style.color = '#b635ff';
  }
  container.append(boxNumber);
}