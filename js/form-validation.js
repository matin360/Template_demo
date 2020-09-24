
document.addEventListener('DOMContentLoaded', () => {
    let 
        inputIds = ['name', 'email', 'phone', 'message', 'select'],
        patterns = [/([a-zA-Z\s])/, /^([a-zA-Z0-9_.]+)@([a-zA-Z0-9_.]+)\.([a-zA-Z]{2,5})$/, /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/],
        input = null,
        errElement = null,
        message = '';

    getElmByid('submit-form').addEventListener('click', (e) => {
        e.preventDefault();
        inputIds.forEach( (inputId) => {
                input = getElmByid(inputId);
                errElement = getElmByid(inputId + '-lbl');

            if(IsEmpty(input)){
                message = getMessage(inputId);
                displayEmptyError(errElement, message);
            }
        });
    });

    getElmByid('email').addEventListener('change', (e) => {
        e.preventDefault();
        if(!isPatternMathcing(getElmByid('email'), patterns[0])){
            displayEmptyError(getElmByid('email-lbl'), 'Given email is not valid');
        }
    });

    getElmByid('phone').addEventListener('change', (e) => {
        e.preventDefault();
        if(!isPatternMathcing(getElmByid('phone'), patterns[1])){
            displayEmptyError(getElmByid('phone-lbl'), 'Given phone number is not valid');
        }
    });
    // inputIds.forEach( (inputId) => {
    //     getElmByid(inputId).addEventListener('change', (e) => {
    //         e.preventDefault();
    //         if(!IsEmpty(getElmByid(inputId))){
    //             getElmByid(inputId + '-lbl').innerHTML = '';
    //         }                      
    //     });
    // })
});

function IsEmpty(input) {
    let isEmptyElm = false;
    if (input.value === '') {
        isEmptyElm = true;
    }
    return isEmptyElm;
}

function displayEmptyError(errorElement, message) {
    let msg = message;
    errorElement.innerHTML = msg;
    setStyleToElms(errorElement, '#ff0000', '10px');
}

function getMessage(inputId) {
    let msg = `Please, fill out ${inputId} field`;
    return msg;
}

function getElmByid(id){
    return document.getElementById(id);
}

function setStyleToElms(elm, color, fontSize) {
    elm.style.color = color;
    elm.style.fontSize = fontSize;
}

function isPatternMathcing(input, pattern) {
    let isValid = pattern.test(input.value) ? true : false;
    return isValid;
}