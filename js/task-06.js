const refInput = document.querySelector('input');

const numberOfSymbols = refInput.getAttribute("data-length");


refInput.addEventListener('blur', checkNumberOfSymbols);

function checkNumberOfSymbols () {
    const valueArray = refInput.value.split("");
    if (valueArray.length === Number(numberOfSymbols)) {
        refInput.classList.add("valid");           
    } else refInput.classList.add("invalid");
}