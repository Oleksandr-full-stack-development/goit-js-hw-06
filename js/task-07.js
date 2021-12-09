const controlLine = document.querySelector("#font-size-control");

const changedText = document.querySelector("#text"); 

changedText.style.fontSize = controlLine.value + 'px';

controlLine.addEventListener('input', changeText);

function changeText (event) {
    const {value} = event.target;
    changedText.style.fontSize = `${value}px`;
}