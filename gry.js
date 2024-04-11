function calculate() {
    // Pobierz wartości z pól tekstowych
    const number1 = parseInt(document.getElementById('inputNumber1').value);
    const number2 = parseInt(document.getElementById('inputNumber2').value);

    // Wykonaj operację dodawania
    const result = number1 + number2;

    // Wyświetl wynik w divie
    document.getElementById('result').innerText = `Wynik: ${result}`;
}
