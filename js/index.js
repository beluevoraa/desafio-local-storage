document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const buttonText = document.getElementById('buttonText');
    
    buttonText.addEventListener('click', function() {
        const value = inputText.value;
        localStorage.setItem('inputValue', value);
       
    });
});
