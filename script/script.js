
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

        display.value = b;
    }