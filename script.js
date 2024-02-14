function pravallika(operation) {
    var num1 = parseFloat(document.getElementById('input1').value);
    var num2 = parseFloat(document.getElementById('input2').value);
    var result;
    switch (operation) {
        case 'plus':
            result = num1 + num2;
            document.getElementById('result').innerText = result;
            break;
        case 'minus':
            result = num1 - num2;
            document.getElementById('result').innerText = result;
            break;
        case 'multiply':
            result = num1 * num2;
            document.getElementById('result').innerText = result;
            break;
        case 'division':
            result = num1 / num2;
            document.getElementById('result').innerHTML = result;
            break;
        case 'mod':
            result = num1 % num2;
            document.getElementById('result').innerHTML = result;
            break;
        default:
            break;
    }
}
function clearAll() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').innerText = 'Answer';
}