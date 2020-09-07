
document.addEventListener('DOMContentLoaded', () => {
    let inputs = ['name', 'email', 'phone', 'message', 'select'];
    document.getElementById('submit-form').addEventListener('click', () => {
        inputs.forEach( (inputId) => {
            let input = document.getElementById(inputId);
            checkInputValidty(input);
        });
    });

    inputs.forEach( (input) => {
        document.getElementById(input).addEventListener('change', () => {
            document.getElementById(input + '-lbl').innerHTML = '';
        });
    })
});

function checkInputValidty(input) {
    let span = document.getElementById(input.id + '-lbl');
    if (!input.checkValidity()) {
        span.innerHTML = input.validationMessage;
        span.style.color = '#ff0000';
    }
}
