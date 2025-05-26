document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');
    const textInput = document.getElementById('text-input');
    const resultDiv = document.getElementById('result');

    // Función quew determina si un texto es palíndromo
    function isPalindrome(str) {
        const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleaned === cleaned.split('').reverse().join('');
    }

    // Función para manejar el event de comprobation
    function checkPalindrome() {
        const inputValue = textInput.value;

        if (!inputValue.trim()) {
            alert('Please input a value');
            return;
        }

        const palindrome = isPalindrome(inputValue);

        // Mostrar texto y clase view
        resultDiv.textContent = `${inputValue} ${palindrome ? 'is' : 'is not'} a palindrome.`;
        resultDiv.className = palindrome ? 'palindrome' : 'not-palindrome';
    }

    // Evento de click en el button
    checkBtn.addEventListener('click', checkPalindrome);

    // Permitir "Enter" para el check
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPalindrome();
        }
    });
});