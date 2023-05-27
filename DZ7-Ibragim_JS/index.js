// ЗАДАЧА №1


// class Cars {
//     constructor(model, color, wheels) {
//       this.model = model;
//       this.color = color;
//       this.wheels = wheels;
//     }
  
//     start() {
//       console.log('Машина заведена');
//     }
  
//     static createCar(className) {
//       let car;
//       let model, color, wheels;
  
//       switch (className.toLowerCase()) {
//         case 'sedan':
//           model = 'Toyota Camry';
//           color = 'Серебристый';
//           wheels = 4;
//           car = new Sedan(model, color, wheels);
//           break;
//         case 'suv':
//           model = 'Ford Explorer';
//           color = 'Черный';
//           wheels = 4;
//           car = new SUV(model, color, wheels);
//           break;
//         case 'sportscar':
//           model = 'Chevrolet Corvette';
//           color = 'Красный';
//           wheels = 4;
//           car = new SportsCar(model, color, wheels);
//           break;
//         default:
//           console.log('Некорректное название класса машины');
//           return;
//       }
  
//       console.log(`Создана машина класса "${className}"`);
//       console.log(`Модель: ${car.model}`);
//       console.log(`Цвет: ${car.color}`);
//       console.log(`Количество колес: ${car.wheels}`);
  
//       return car;
//     }
//   }
  
//   class Sedan extends Cars {
//     constructor(model, color, wheels, capacity) {
//       super(model, color, wheels);
//       this.capacity = capacity;
//     }
//   }
  
//   class SUV extends Cars {
//     constructor(model, color, wheels, offroadAbility) {
//       super(model, color, wheels);
//       this.offroadAbility = offroadAbility;
//     }
//   }
  
//   class SportsCar extends Cars {
//     constructor(model, color, wheels, topSpeed) {
//       super(model, color, wheels);
//       this.topSpeed = topSpeed;
//     }
//   }
  
//   const className = prompt('Введите название класса машины (Sedan, SUV, SportsCar):');
//   const car = Cars.createCar(className);
  
//   if (car) {
//     car.start();
//   }
  
  

  // ЗАДАЧА № 2



  class TrafficLight {
    constructor() {
      this.redLight = document.getElementById('redLight');
      this.yellowLight = document.getElementById('yellowLight');
      this.greenLight = document.getElementById('greenLight');
    }

    changeLights(color) {
      this.clearLights();

      const formattedColor = color.toLowerCase().trim();

      switch (formattedColor) {
        case 'красный':
          this.redLight.style.backgroundColor = 'red';
          console.log('STOP!');
          break;
        case 'желтый':
          this.yellowLight.style.backgroundColor = 'yellow';
          console.log('READY!');
          break;
        case 'зеленый':
          this.greenLight.style.backgroundColor = 'green';
          console.log('GO!');
          break;
        default:
          console.log('Некорректный цвет светофора');
          break;
      }
    }

    clearLights() {
      this.redLight.style.backgroundColor = 'transparent';
      this.yellowLight.style.backgroundColor = 'transparent';
      this.greenLight.style.backgroundColor = 'transparent';
    }
  }

  const colorName = prompt('Введите цвет (красный, желтый или зеленый):');

  if (colorName) {
    const trafficLight = new TrafficLight();
    trafficLight.changeLights(colorName);
  } else {
    console.log('Некорректный цвет светофора');
  }