const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const nav = document.getElementById('navigationSide');


function openClickButton(){
    open.style.display = 'none';
    close.style.transform = 'translateX(0)';
    close.style.transform= 'rotate(20deg)';
    open.style.transition = 'all 1.2s ease-in-out';
    container.classList.add('show-nav');
    nav.style.display = 'block';
}

function closeClickButton(){
    open.style.display = 'block';
    close.style.transform= 'rotate(90deg)';
    container.classList.remove('show-nav');
    nav.style.display = 'none';
    close.style.transition = 'all 1.2s ease-in-out'; 
}