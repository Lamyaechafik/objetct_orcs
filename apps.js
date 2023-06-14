//use array inside of object

const adventure = {
    name: "lamyae",
    hitPoint: "10",
    belongings: ["staff", "portion", "medicine" ],
    companion: {
        name: "stinky",
        type: "cat"
        belongings: ["ball of yarn", "healing portion"]
    }
}

// //access the values in the array

console.log(`my name companion is ${adventure.belongings.name}`);
console.log(`one of my companiong belongings os ${adventure.companion.belongings[2]}`);const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];


// console.log(' first belonging: ${adventure.belonging[0]}')

// //iterate over an array inside of the object

// for(let i = 0; i< adventure.belongings.length; i++){
//     console.log(adventure.belongings[i])
// }

//ONJ within OBJ
const movies = [ { title: "Tokyo Story" }, 
 { title: "Paul Blart: Mall Cop" }, 
 { title: "L'Avventura" } ];

console.log(movies[0].title);
for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);
}
