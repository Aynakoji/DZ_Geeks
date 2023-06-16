// REG EXP
const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}






const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const closeModalButton = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalTrigger.onclick = () => openModal();
closeModalButton.onclick = () => closeModal();
modal.onclick = (event) => event.target === modal && closeModal();

const openModalEvery10Seconds = () => {
    setInterval(openModal, 10000); // Open modal every 10 seconds
};

const checkScrollBottom = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const bodyHeight = document.documentElement.offsetHeight;
    if (scrollPosition >= bodyHeight) {
        openModal();
    }
};

window.addEventListener('scroll', checkScrollBottom);

openModalEvery10Seconds();
