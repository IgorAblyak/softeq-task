const container = document.querySelector('.container');
let inputString = prompt('Enter sentences');

let matchStr =
  inputString.match(/^(?=.*\s?Softeq\b)(?=.*\s?\u{0023}rules\b).*$/gu) || [];

if (matchStr.length) {
  container.classList.add("success");
  container.textContent = `The matched string - ' ${matchStr[0]}' `;
} else {
  container.classList.add("warning");
  container.textContent = "The string does not match";
}
