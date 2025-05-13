// Mapeamento de números para letras (26-a, 25-b, ..., 1-z)
const numberToLetterMap = {};
for (let i = 1; i <= 26; i++) {
    numberToLetterMap[i] = String.fromCharCode(97 + (26 - i));
}

// Função para decodificar a mensagem
function decodeMessage(encodedStr) {
    // Divide a string em números individuais
    const numbers = encodedStr.split(' ');

    // Converte cada número para sua letra correspondente
    const letters = numbers.map(num => {
        const number = parseInt(num, 10);
        return numberToLetterMap[number] || '?'; // Retorna '?' se o número não for válido
    });

    // Junta as letras para formar a palavra decodificada
    return letters.join('');
}

// Elementos do DOM
const encodedMessageInput = document.getElementById('encodedMessage');
const revealBtn = document.getElementById('revealBtn');
const returnBtn = document.getElementById('returnBtn');
const resultDiv = document.getElementById('result');

// Evento para o botão REVELAR
revealBtn.addEventListener('click', () => {
    const encodedStr = encodedMessageInput.value.trim();

    if (!encodedStr) {
        resultDiv.textContent = 'Por favor, insira uma mensagem codificada.';
        return;
    }

    // Decodifica a mensagem e exibe o resultado
    const decodedMessage = decodeMessage(encodedStr);
    resultDiv.textContent = decodedMessage;

    // Efeito visual ao revelar
    resultDiv.style.animation = 'none';
    setTimeout(() => {
        resultDiv.style.animation = 'box 1s';
    }, 10);
});

// Evento para o botão RETORNAR
returnBtn.addEventListener('click', () => {
    encodedMessageInput.value = '';
    resultDiv.textContent = '';

    // Efeito visual ao limpar
    resultDiv.style.animation = 'none';
    setTimeout(() => {
        resultDiv.style.animation = 'box 1s';
    }, 10);
});

// Evento para permitir apenas números e espaços no input
encodedMessageInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9\s]/g, '');
});

// Evento para decodificar ao pressionar Enter
encodedMessageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        revealBtn.click();
    }
});