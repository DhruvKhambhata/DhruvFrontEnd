let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        if (buttonText == '*') {
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else if (buttonText == '⌫') {
            screen.value = rekensom.substring(0, rekensom.length - 1);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

function backspace() {

    var rekensom = document.getElementById('screen').value;
    document.getElementById('screen').value = rekensom.substring(0, rekensom.length - 1);

}