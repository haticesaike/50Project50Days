const backSide = document.querySelector('.backSide');
const progressBar = document.querySelector('.progressBar');

let progressValue = 0;
let progressInterval  = setInterval(updateProgress, 40);

function updateProgress() {
    progressValue ++;

    if(progressValue > 99) {
        clearInterval(progressInterval)
    }

    progressBar.innerText = `${progressValue}%`;
    progressBar.style.opacity = scale(progressValue, 0, 100, 1, 0);
    backSide.style.filter = `blur(${scale(progressValue, 0, 100, 30, 0)}px)`;

    function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
}
