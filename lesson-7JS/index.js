// const animal = {
//     name: 'Animal',
//     age: 10,
//     hastail: true,
//     color: black,
//     voice () {
//         console.log('i am animal!');
//     }
// }

// animal.voice()
// console.log(animal);

// ООП


// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//         this.color = options.color
//     }

//     voice () {
//         console.log('i am Animal');
//     }
// }

// const animalByClass = new Animal({
//     name: 'Animal',
//     age: 10,
//     hasTail: true,
//     color: 'black'
// })



// })
// console.log(animalByClass)



// class Monkey extends Animal {
//     constructor(options) {
//         super(options)
//         this.fat = options.fat
//         this.hooves = options.hooves
//         this._voice = options.voice
//     }

//     voice() {
//         console.log(this._voice);
//     }

//     get ageInfo () {
//         return console.log(`Человеческий возраст {$this.age*7}`)
//     }

// }


// const Ogon = new Monkey({
//     name: 'Son O Gon',
//     age: 27,
//     color: 'white',
//     hasTail: true,
//     hooves: 1,
//     fat: true,
//     voice: 'АААААА'
// })


// const george = new Monkey({
//     name: 'George',
//     age: 27,
//     color: 'white',
//     hasTail: true,
//     hooves: 1,
//     fat: true,
//     voice: 'Огон дебил'
// })


// Ogon.voice()
// Ogon.ageInfo
// george.ageInfo
// george.voice()
// console.log(Ogon);





class Block extends Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide () {
        this.$element.style.display = 'none'
    }

    hide () {
        this.$element.style.display = 'show'
    }
}




class Block {
    constructor(options) {
        super(options.selector)
        this.$element.style.width = this.$element.style.height = options.siza + 'px'
        this.$element.style.background = options.bgColor
    }
}

class Circle extends Block {
    constructor(options) {
        super(options)

    }
}

const circle = new Circle({
    selector: '#circle',
    size: 150,
    color: 'yellow'
})


const Block1 = new Block ({
    selector: '.Block1',
    size: 200,
    bgColor: 'red'
})


