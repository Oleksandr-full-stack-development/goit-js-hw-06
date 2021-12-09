const refsCounter = document.querySelector("#value");
const refsCounterInner = document.querySelector("#value").innerHTML;
let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');



buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    refsCounter.innerHTML =` ${counterValue} `;
});

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    refsCounter.innerHTML =` ${counterValue} `;
});