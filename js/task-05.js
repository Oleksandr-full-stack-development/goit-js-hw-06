const refs = {
    input : document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}


refs.input.addEventListener('input', addSpanText);

function addSpanText (event) {
    refs.span.textContent = refs.input.value;
    if (refs.input.value === '') {
        refs.span.textContent = 'Anonymous';
    }
}

