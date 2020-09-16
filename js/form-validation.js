
document.addEventListener('DOMContentLoaded', () => {
    let inputs = ['name', 'email', 'phone', 'message', 'select'];
    getElmByid('submit-form').addEventListener('click', () => {
        inputs.forEach( (inputId) => {
            let input = getElmByid(inputId);
            IsEmpty(input);
        });
    });

    inputs.forEach( (input) => {
        getElmByid(input).addEventListener('change', () => {
            getElmByid(input.id + '-lbl').innerHTML = '';
        });
    })
});

function IsEmpty(input) {
    let span = getElmByid(input.id + '-lbl');
    if (input.value === '') {
        let msg = getMessage(input.id);
        span.innerHTML = msg;
        getStyleToElms(span, '#ff0000', '10px');
    }
}

function getMessage(inputId) {
    let msg = '';
    switch (inputId) {
        case 'name': msg = 'Please, fill out name field'; break;
        case 'email': msg = 'Please, fill out email field'; break;
        case 'phone': msg = 'Please, fill out phone field'; break;
        case 'message': msg = 'Please, fill out message field'; break;
        case 'select': msg = 'Please, fill out select field'; break;
    }
    return msg;
}

function getElmByid(id){
    return document.getElementById(id);
}

function getStyleToElms(elm, color, fontSize) {
    elm.style.color = color;
    elm.style.fontSize = fontSize;
}