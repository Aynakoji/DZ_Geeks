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

let position = 0;
const blockWidth = moveBlock.offsetWidth;
const containerWidth = parentBlock.offsetWidth;

moveBlock.style.position = 'absolute'; // Задаем позиционирование блока
moveBlock.style.left = '0'; // Начальная позиция блока

const movingBlock = () => {
  moveBlock.style.left = position + 'px';

  if (position < containerWidth - blockWidth) {
    position += 1;
    setTimeout(movingBlock, 10); // Интервал задержки в миллисекундах
  }
};

movingBlock();


