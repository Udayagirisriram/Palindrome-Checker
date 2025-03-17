document.getElementById('check-button').addEventListener('click', function() {
    const text = document.getElementById('text-input').value.trim();
    const result = document.getElementById('result');

    if (text === '') {
        result.textContent = 'Please enter some text.';
        result.style.color = 'red';
        return;
    }

    // Remove spaces and non-alphanumeric characters for the check
    const cleanedText = text.replace(/[\W_]/g, '').toLowerCase();
    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');
    
    result.textContent = isPalindrome ? 'It is a palindrome!' : 'It is not a palindrome.';
    result.style.color = isPalindrome ? 'green' : 'red';
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('text-input').value = '';
    document.getElementById('result').textContent = '';
});
