const counter = document.querySelector('.counter');
const countBtn = document.querySelector('.count');
const clear = document.querySelector('.clear');
let num = 0;

countBtn.addEventListener('click', function(){
    num++;
    counter.textContent = num;
})

clear.addEventListener('click', function(){
    num = 0;
    counter.textContent = num;
})