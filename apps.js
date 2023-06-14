

// const movies = [ { title: "Tokyo Story" },
//   { title: "Paul Blart: Mall Cop" }, 
//   { title: "L'Avventura" } ];

// console.log(movies[0]);

// console.log(movies[0].title);

// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }
// const foo = {
//     someArray:[1,2,3]
// };
// foo.someArray[0]; //1

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// foo.someObject.someProperty; //oh hai!
// const foo = {
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };

// foo.someMethod();//logs 'oh hai!'

// const foo = [{someProperty:'weee'}, 2, 3];

// console.log(foo[0].someProperty);
// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// foo[1][2]; //1,2
// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log('fun');
//     }
// ];

// foo[2]();


// const player = {
//     name: 'Josh the great',
//     health: 1000,
//     power: 1000,
//     stamina: 1000
//   }

//   const bigBadBoss = {
//     name: 'Magnardo the Merciless',
//     health: 1000000000000000000,
//     power: 10000000000000000,
//     stamina: Infinity
//   }

// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newEnemy
//   }
//   const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newPlayer
//   }

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('i smited thee.');
//     }
  
//   }
// class Hobbit extends Character {
//     constructor (name, age, eyes, hair) {
//       super(name, age, eyes, hair);
//       this.skills = ["thievery", "speed", "willpower"];
//     }
//     steal () {
//       console.log('lets get away!');
//     }
//     greet (otherCharacter) {
//       console.log('Greetings ' + otherCharacter);
//     }
//     smite () {
//       super.smite();
//       this.steal();
//     }
//   }
//   const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
//   console.log(frodo);
  


// //factory sectoin

// class Car {
//     constructor (maker, serialNumber) {
//       this.serialNumber = serialNumber;
//       this.maker = maker
//     }
//     drive () {
//     //   console.log('Vroom Vroom');
//     }
//   }
  
//   const newCar = new Car('Mazda', 12345);
//   console.log(newCar);
//   class Factory {
//     constructor (company) {
//       this.company = company;
//       this.cars = [];
//     }
//     generateCar () {
//       const newCar = new Car(this.company, this.cars.length);
//       this.cars.push(newCar);
//     }
//     findCar (index) {
//       return this.cars[index];
//     }
//   }
//   const tesla = new Factory('Tesla');
//   tesla.generateCar();
//   tesla.generateCar();
//   tesla.generateCar();
//   tesla.generateCar();
//   console.log(tesla);
//   console.log(tesla.findCar(0));
  //find a car
//   console.log(tesla.findCar(0));

//example porsh factory

//   const porche = new Factory('Porche');
// porche.generateCar();
// porche.generateCar();
// console.log(porche);
// console.log(porche.findCar(0));

class Person {
    static eyeColors () {
      return ['blue', 'green', 'brown'];
    }
class SuperHero extends Person{
        constructor(name, age, hair){
            super()
            this.name = name;
            this.age = age;
            this.hair = hair;
        }
    }
}

const Superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black');
console.log(Superman);