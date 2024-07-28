
alert('Attention! This is a normal functional calculator but you can do higher functional math using your own kewboard function. Please avoid using any character!')

    function deleteMe() {
        const display = document.getElementById('display');
        display.value = '';
    }

    function calculator(values) {
        const display = document.getElementById('display');
        display.value += values;
    }


    function calculat() {
        const display = document.getElementById('display');
        
        const b = eval(display.value);

        if (isNaN(b)) {
            display.value = 'syntax error!';
        } else {
            display.value = b;
        }
    }