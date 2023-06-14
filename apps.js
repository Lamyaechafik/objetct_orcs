//use array inside of object

// const adventure = {
//     name: "lamyae",
//     hitPoint: "10",
//     belongings: ["staff", "portion", "medicine" ],
//     companion: {
//         name: "stinky",
//         type: "cat"
//         belongings: ["ball of yarn", "healing portion"]
//     }
// }

// //access the values in the array

// console.log(`my name companion is ${adventure.belongings.name}`);
// console.log(`one of my companiong belongings os ${adventure.companion.belongings[2]}`);const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];


// console.log(' first belonging: ${adventure.belonging[0]}')

// //iterate over an array inside of the object

// for(let i = 0; i< adventure.belongings.length; i++){
//     console.log(adventure.belongings[i])
// }

// //ONJ within OBJ
// const movies = [ { title: "Tokyo Story" }, 
//  { title: "Paul Blart: Mall Cop" }, 
//  { title: "L'Avventura" } ];

// console.log(movies[0].title);
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }



// const foo = {
//     arr: [1 ,2, 4]
//     obj: {
//         prop:'object proprety'
//     },
// dosomthing: () => //or we can replace it with the word function// 
//    { 
//     console.log("i did somthing")
//     console.log
// }
// }
// console.log(foor.arr[0]);//1
// console.log(foo.arr)


const foo = [
    [1, ,2 ,3],
    ["4", "5", "6"],
    [7, 8, 9],
    () => {
        console.log("i am a finction inside an array")
    }
]