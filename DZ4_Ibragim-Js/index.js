// ЗАДАЧА № 1!!!


var decrementButton = document.getElementById('decrement')
var incrementButton = document.getElementById('increment')
var counterElement = document.getElementById('counter')

var counterValue = 1
counterElement.textContent = counterValue

function updateCounter(value) {
  counterValue += value
  counterElement.textContent = counterValue

  if (counterValue > 0) {
    counterElement.add('increment')
    counterElement.remove('decrement')
  } else if (counterValue < 0) {
    counterElement.add('decrement')
    counterElement.remove('increment')
  } else {
    counterElement.remove('decrement', 'increment')
  }
}

decrementButton.addEventListener('click', function() {
  if (counterValue > 0) {
    updateCounter(-1)
  }
});

incrementButton.addEventListener('click', function() {
  updateCounter(1)
})




// ЗАДАЧА № 2!!!!


const myButton = document.getElementById('myButton');
const outputElement = document.getElementById('output');

myButton.addEventListener('click', function() {
  const userInput = prompt('');
  outputElement.textContent = userInput;
});


// ЗАДАЧА № 3!




const userInput = prompt('Введите цвет светофора (Красный или Зеленый):');
const trafficLight = document.querySelector('.traffic-light');
const lowercaseInput = userInput.toLowerCase();

if (lowercaseInput === 'красный') {
  trafficLight.querySelector('.red').classList.add('active');
  alert('STOP');
} else if (lowercaseInput === 'зеленый') {
  trafficLight.querySelector('.green').classList.add('active');
  alert('GO');
}