window.onload = function() {
   
    const symbols = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
    const symbolIndex = Math.floor(Math.random() * symbols.length);
    const selectedSymbol = symbols[symbolIndex];

    const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const valueIndex = Math.floor(Math.random() * value.length);
    const selectedValue = value[valueIndex];

 
    const topSymbol = document.querySelector('.card .top');
    const bottomSymbol = document.querySelector('.card .bottom');
    const numberValue = document.querySelector('.card .number h1');

    
    topSymbol.innerHTML = selectedSymbol;
    bottomSymbol.innerHTML = selectedSymbol;
    numberValue.innerHTML = selectedValue;

    if (selectedSymbol === '&hearts;' || selectedSymbol === '&diams;') {
        topSymbol.style.color = 'red';
        bottomSymbol.style.color = 'red';
    } else {
        topSymbol.style.color = 'black';
        bottomSymbol.style.color = 'black';
    }
};