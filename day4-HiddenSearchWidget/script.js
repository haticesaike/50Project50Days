const container =document.querySelector('.container');
const input =document.getElementById('input');
const btn =document.getElementById('button');

btn.addEventListener('click', () => {
    input.classList.toggle('activeInput');
    btn.classList.toggle('activeBtn');
    input.focus();
});
