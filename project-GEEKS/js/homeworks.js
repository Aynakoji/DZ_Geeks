const gmailInput = document.querySelector('#gmailInput')
const gmailCheck = document.querySelector('#gmailCheck')
const gmailResult = document.querySelector('.gmailResult')

const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

const parentBlock = document.querySelector('.parent_block');
const moveBlock = document.querySelector('.child_block');
const containerWidth = parentBlock.offsetWidth - moveBlock.offsetWidth;
const containerHeight = parentBlock.offsetHeight - moveBlock.offsetHeight;
let posX = 0;
let posY = 0;
let dirX = 1;
let dirY = 1;

moveBlock.style.position = 'absolute';

const movingBlock = () => {
    posX += dirX;
    posY += dirY;

    moveBlock.style.transform = `translate(${posX}px, ${posY}px)`;

    if (posX <= 0 || posX >= containerWidth) {
        dirX *= -1;
    }
    if (posY <= 0 || posY >= containerHeight) {
        dirY *= -1;
    }

    requestAnimationFrame(movingBlock);
};

movingBlock();






let counterValue = 0;
    let intervalId = null;

    const counterElement = document.getElementById("counter");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    const resumeBtn = document.getElementById("resumeBtn");
    const clearBtn = document.getElementById("clearBtn");

    const startCounter = () => {
        intervalId = setInterval(() => {
            counterElement.textContent = ++counterValue;
        }, 1000);
    };

    const stopCounter = () => {
        clearInterval(intervalId);
    };

    const resumeCounter = () => {
        startCounter();
    };

    const clearCounter = () => {
        counterValue = 0;
        counterElement.textContent = counterValue;
    };

    startBtn.addEventListener("click", startCounter);
    stopBtn.addEventListener("click", stopCounter);
    resumeBtn.addEventListener("click", resumeCounter);
    clearBtn.addEventListener("click", clearCounter);