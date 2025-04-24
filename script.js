const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const historyList = document.getElementById('history-list');

buttons.forEach(button => { 
    button.addEventListener('click', () => {
        const value = button.textContent;
        const action = button.dataset.action;
        if (action === 'clear') {
            display.value = '';
        } else if (action === 'backspace') {
            display.value = display.value.slice(0, -1);    
        } else if (action === 'calculate') {    
            try {
            const result = eval(display.value);
            addToHistory(display.value, result);
            display.value = result;
            } catch {
                display.value = 'Erro';
            }
        } else {
            display.value += value;
        }
    });
});

function addToHistory(expression, result) {
    const li = document.createElement('li');
    li.textContent = `${expression} = ${result}`;
    li.addEventListener('click', () => {
        display.value = expression;
    });
    historyList.prepend(li);
}

