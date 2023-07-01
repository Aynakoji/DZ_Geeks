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




// MODAL





// const modal = document.querySelector('.modal');
// const modalTrigger = document.querySelector('#btn-get');
// const closeModalButton = document.querySelector('.modal_close');

// const openModal = () => {
//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// };

// const closeModal = () => {
//     modal.style.display = 'none';
//     document.body.style.overflow = '';
// };

// modalTrigger.onclick = () => openModal();
// closeModalButton.onclick = () => closeModal();
// modal.onclick = (event) => event.target === modal && closeModal();

// const openModalEvery10Seconds = () => {
//     setInterval(openModal, 10000); // Open modal every 10 seconds
// };

// const checkScrollBottom = () => {
//     const scrollPosition = window.innerHeight + window.scrollY;
//     const bodyHeight = document.documentElement.offsetHeight;
//     if (scrollPosition >= bodyHeight) {
//         openModal();
//     }
// };

// window.addEventListener('scroll', checkScrollBottom);

// openModalEvery10Seconds();





// ДЗ №4 !



const xhr = new XMLHttpRequest();
    const url = 'path/to/people.json'; // Замените на правильный путь к вашему JSON-файлу

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const people = JSON.parse(xhr.responseText);
        displayPeople(people.slice(0, 3));
      }
    };

    xhr.open('GET', url, true);
    xhr.send();

    const displayPeople = (people) => {
      const container = document.getElementById('people-container');

      people.forEach((person) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${person.name}</h2>
          <p>Age: ${person.age}</p>
          <p>Job: ${person.job}</p>
        `;
        container.appendChild(card);
      });
    };





    // ДЗ №5






const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const jpy = document.querySelector('#jpy')

const convert = (element, targetElement, rate) => {
  element.oninput = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "change.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
      const response = JSON.parse(request.response)
      if (rate === 'usd') {
        targetElement.value = (element.value / response[rate]).toFixed(2)
      } else if (rate === 'jpy') {
        targetElement.value = (element.value / response[rate]).toFixed(2)
      } else {
        targetElement.value = (element.value * response[rate]).toFixed(2)
      }
      element.value === '' && (targetElement.value = '')
    }
  }
}

convert(som, usd, 'usd')
convert(som, jpy, 'jpy')
convert(usd, som, 'som')
convert(usd, jpy, 'jpy')
convert(jpy, som, 'som')
convert(jpy, usd, 'usd')
