

function calculateMinMax() {
    var input = document.getElementById('number_list').value;
    var numbers = input.split(',').map(Number);
    var min = Math.min.apply(null, numbers);
    var max = Math.max.apply(null, numbers);
    document.getElementById('result').innerHTML = "Minimum: " + min + ", Maximum: " + max;
}

document.getElementById('calculate_button').addEventListener('click', calculateMinMax);