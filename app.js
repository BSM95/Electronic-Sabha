const displayArea = document.querySelector('.display-area');
const increament = document.querySelector('.increament');
const clear = document.querySelector('.clear');
let sum = 0;

increament.addEventListener('click', function(){
    sum++;
    displayArea.textContent = sum + '';
})

clear.addEventListener('click', function(){
    sum = 0;
    displayArea.textContent = sum + '';
})
