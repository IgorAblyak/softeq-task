const container = document.querySelector('.container');
const btn = document.querySelector('button');
const objInfo = document.createElement('div');
const dataBox = document.createElement('div');

objInfo.className = 'info';
dataBox.className = 'data';

const getData = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) {
      let json = await response.json();
      for (let obj of json) {
        if (obj.id === 5) {
          console.log(obj);
          objInfo.textContent = `Object with ID = ${obj.id}`
          dataBox.textContent = JSON.stringify(obj);
        }
      }
    }
  } catch (error) {
    dataBox.textContent = error.message;
  }
  container.append(objInfo, dataBox);
}

btn.addEventListener('click', getData);