const controlLine = document.querySelector("#font-size-control");

const changedText = document.querySelector("#text"); 

controlLine.addEventListener('input', changeText);

function changeText () {
    changedText.style.fontSize = controlLine.value + 'px';
}