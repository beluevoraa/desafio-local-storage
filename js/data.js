document.addEventListener('DOMContentLoaded', function(){

    const dataSpan = document.getElementById('data');
    const value = localStorage.getItem('inputValue');

    if(value){
        dataSpan.textContent = value;
    } 
});