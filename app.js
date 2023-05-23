

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// for (let i = 1; i <= 100; i++) {
//     if (i%2 != 0) {
//         console.log(i);
//     }
// }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FIZZBUZZ");
//     }
//     else if (i % 3 == 0){
//         console.log("FIZZ");
//     }
//     else if (i % 5 == 0){
//         console.log("BUZZ");
//     }
// }

// exercise 3
console.log("EXERCISE 3:\n==========\n");

// let i = 1;
// while (i <= 100){
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//     i++
// }
// i = 1;
// do {if (i % 2 == 0){
//     console.log(i);
// }
// i++
// } while (i <= 100);

// i = 1;
// while (i <= 100){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FIZZBUZZ");
//     }
//     else if (i % 3 == 0){
//         console.log("FIZZ");
//     }
//     else if (i % 5 == 0){
//         console.log("BUZZ");
//     }
//     i++;
// }

// i = 1;
// do {
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log("FIZZBUZZ");
//     }
//     else if (i % 3 == 0){
//         console.log("FIZZ");
//     }
//     else if (i % 5 == 0){
//         console.log("BUZZ");
//     }
//     i++;
// } while(i <= 100);

//exercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (var x = 0; x <= n; x++) {
    if (x == value){
        console.log("Found value!");
        break;
    }
}
if (x != value){
    console.log("Did not find value");    
}

