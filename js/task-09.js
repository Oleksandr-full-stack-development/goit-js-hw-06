const btn = document.querySelector(".change-color");

btn.addEventListener('click', bodyColor);

function bodyColor() {
  const body = document.querySelector('body');
  const paragraph = document.querySelector('.color');
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  paragraph.textContent = color;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
