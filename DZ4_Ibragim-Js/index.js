// ЗАДАЧА № 1!!!


// var decrementButton = document.getElementById('decrement')
// var incrementButton = document.getElementById('increment')
// var counterElement = document.getElementById('counter')

// var counterValue = 0
// counterElement.textContent = counterValue

// function updateCounter(value) {
//   counterValue += value
//   counterElement.textContent = counterValue

//   if (counterValue > 0) {
//     counterElement.add('increment')
//     counterElement.remove('decrement')
//   } else if (counterValue < 0) {
//     counterElement.add('decrement')
//     counterElement.remove('increment')
//   } else {
//     counterElement.remove('decrement', 'increment')
//   }
// }

// decrementButton.addEventListener('click', function() {
//   if (counterValue > 0) {
//     updateCounter(-1)
//   }
// });

// incrementButton.addEventListener('click', function() {
//   updateCounter(1)
// })




// ЗАДАЧА № 2!!!!


// const myButton = document.getElementById('myButton');
// const outputElement = document.getElementById('output');

// myButton.addEventListener('click', function() {
//   const userInput = prompt('');
//   outputElement.textContent = userInput;
// });


// ЗАДАЧА № 3!

//IF ELSE


// document.addEventListener("DOMContentLoaded", function() {
//   const lights = document.getElementsByClassName("light");
//   lights[0].classList.add("active");

//   function setLight(color) {
//     color = color.toLowerCase();
  
//     for (let i = 0; i < lights.length; i++) {
//       lights[i].classList.remove("active");
//     }
  
//     if (color === "красный" || color === "red") {
//       lights[0].classList.add("active");
//       console.log("STOP");
//     } else if (color === "желтый" || color === "yellow") {
//       lights[1].classList.add("active");
//       console.log("WAIT");
//     } else if (color === "зеленый" || color === "green") {
//       lights[2].classList.add("active");
//       console.log("GO");
//     } else {
//       console.log("Вводи цвета!");
//     }
//   }
  
//   const inputColor = prompt("Введите цвет :");
//   setLight(inputColor);
// });











// SWITCH CASE

// document.addEventListener("DOMContentLoaded", function() {
//   const lights = document.getElementsByClassName("light");
//   lights[0].classList.add("active");

//   function setLight(color) {
//     color = color.toLowerCase();
  
//     for (let i = 0; i < lights.length; i++) {
//       lights[i].classList.remove("active");
//     }
  
//     switch (color) {
//       case "красный":
//       case "red":
//         lights[0].classList.add("active");
//         console.log("STOP");
//         break;
//       case "желтый":
//       case "yellow":
//         lights[1].classList.add("active");
//         console.log("WAIT");
//         break;
//       case "зеленый":
//       case "green":
//         lights[2].classList.add("active");
//         console.log("GO");
//         break;
//       default:
//         console.log("Вводи цвета!");
//     }
//   }
  
  // const inputColor = prompt("Введите цвет :");
//   setLight(inputColor);
// });
