
document.addEventListener('DOMContentLoaded', () => {
    let inputIds = ['name', 'email', 'phone', 'message', 'select'];
    getElmByid('submit-form').addEventListener('click', () => {
        inputIds.forEach( (inputId) => {
            let input = getElmByid(inputId);
            let span = getElmByid(inputId + '-lbl');
            if(IsEmpty(input)){
                displayError(span, inputId);
            }
        });
    });

    inputIds.forEach( (inputId) => {
        getElmByid(inputId).addEventListener('change', () => {
            getElmByid(inputId + '-lbl').innerHTML = '';
        });
    })
});

function IsEmpty(input) {
    let isEmptyElm = false;
    if (input.value === '') {
        isEmptyElm = true;
    }
    return isEmptyElm;
}

function displayError(errorElement, inputId) {
    let msg = getMessage(inputId);
    errorElement.innerHTML = msg;
    getStyleToElms(errorElement, '#ff0000', '10px');
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

function IsPatternMathcing() {
    
}