// ЗАДАЧА №1

// const getDataType = (i) => {
//     return typeof i;
//   };
  
//   console.log(getDataType(false));
//   console.log(getDataType('hello world!'));
//   console.log(getDataType(42));
  
//   ЗАДАЧА №2


//   const calculator = (arg, b, i) => {
//     if (b === '+') {
//       return arg + i;
//     } else if (b === '-') {
//       return arg - i;
//     } else if (b === '/') {
//       return arg / i;
//     } else if (b === '*') {
//       return arg * i;
//     }
//   };
  
//   console.log(calculator(40, '+', 2));
//   console.log(calculator(52, '-', 12));
//   console.log(calculator(30, '/', 3));
//   console.log(calculator(23, '*', 10));


//  ЗАДАЧА №3

//   const getPositionArrayElement = (element, array) => {
//     let left = 0;
//     let right = array.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
  
//       if (array[mid] === element) {
//         return mid;
//       } else if (array[mid] < element) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return -1;
//   };
  
//   const myArray = [2, 1, 4, 5, 7];
//   console.log(getPositionArrayElement(5, myArray));
  