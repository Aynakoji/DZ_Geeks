

// const decrementButton = document.getElementById('decrement');
// const incrementButton = document.getElementById('increment');
// const counterElement = document.getElementById('counter');

// let counterValue = 0;
// counterElement.textContent = counterValue;

// const updateCounter = (value) => {
//   counterValue += value;
//   counterElement.textContent = counterValue;

//   if (counterValue > 0) {
//     counterElement.classList.add('increment');
//     counterElement.classList.remove('decrement');
//   } else if (counterValue < 0) {
//     counterElement.classList.add('decrement');
//     counterElement.classList.remove('increment');
//   } else {
//     counterElement.classList.remove('decrement', 'increment');
//   }
// };

// decrementButton.addEventListener('click', () => {
//   if (counterValue > 0) {
//     updateCounter(-1);
//   }
// });

// incrementButton.addEventListener('click', () => {
//   updateCounter(1);
// });



// const myButton = document.getElementById('myButton');
// const outputElement = document.getElementById('output');

// myButton.addEventListener('click', () => {
//   const userInput = prompt('');
//   outputElement.textContent = userInput;
// });




// document.addEventListener('DOMContentLoaded', () => {
//   const lights = document.getElementsByClassName('light');
//   lights[0].classList.add('active');

//   const setLight = (color) => {
//     color = color.toLowerCase();

//     for (let i = 0; i < lights.length; i++) {
//       lights[i].classList.remove('active');
//     }

//     if (color === 'красный' || color === 'red') {
//       lights[0].classList.add('active');
//       console.log('STOP');
//     } else if (color === 'желтый' || color === 'yellow') {
//       lights[1].classList.add('active');
//       console.log('WAIT');
//     } else if (color === 'зеленый' || color === 'green') {
//       lights[2].classList.add('active');
//       console.log('GO');
//     } else {
//       console.log('Вводи цвета!');
//     }
//   };

//   const inputColor = prompt('Введите цвет:');
//   setLight(inputColor);
// });




// document.addEventListener('DOMContentLoaded', () => {
//   const lights = document.getElementsByClassName('light');
//   lights[0].classList.add('active');

//   const setLight = (color) => {
//     color = color.toLowerCase();

//     for (let i = 0; i < lights.length; i++) {
//       lights[i].classList.remove('active');
//     }

//     switch (color) {
//       case 'красный':
//       case 'red':
//         lights[0].classList.add('active');
//         console.log('STOP');
//         break;
//       case 'желтый':
//       case 'yellow':
//         lights[1].classList.add('active');
//         console.log('WAIT');
//         break;
//       case 'зеленый':
//       case 'green':
//         lights[2].classList.add('active');
//         console.log('GO');
//         break;
//       default:
//         console.log('Вводи цвета!');
//         break;
//     }
//   };

//   const inputColor = prompt('Введите цвет:');
//   setLight(inputColor);
// });
