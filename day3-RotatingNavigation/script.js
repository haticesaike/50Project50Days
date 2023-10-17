const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const nav = document.getElementById('navigationSide');


function openClickButton(){
    open.style.transform = 'translateY(-100%)';
    close.style.transform = 'translateX(0)';
    close.style.transform= 'rotate(20deg)';
    open.style.transition = 'all 1.2s ease-in-out';
    container.classList.add('show-nav');
    nav.style.display = 'block';
    nav.style.transform = 'translateX(0)';
}

function closeClickButton(){
    open.style.display = 'block';
    open.style.transform = 'translateX(0)';
    close.style.transform= 'rotate(90deg)';
    container.classList.remove('show-nav');
    nav.style.display = 'none';
    close.style.transition = 'all 1.2s ease-in-out'; 
}