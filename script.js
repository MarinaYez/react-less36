// let = UsersNames = ['Mike', 'Bob', 'Nikola'];
// let users = {
//     mike: "Mike",
//     bob: "Bob",
//     nikola: "Nikola",
// };

// for (let [key, value] of Object.entries(users)) {
//   console.log(`${key}:${value}`); 
// }


// let salaries = { ///Task2
//     "Mike": 1500,
//     "Bob": 1800,
//     "Nikola": 1700
// };


// // function maxSalary(salaries) { //Variant1
// //     // let max;
// //     // let min = salaries[0];
// //     // for(let i = 0; i < salaries.length; i++){
// //     //     if((salaries[i]) < min){
// //     //         min = salaries[i];
// //     //     } else {
// //     //         max = salaries[i];
// //     //     }
// //     // }
// //     // return max;
// //  let max = salaries[0];
// //   salaries.forEach(function(e) {
// //     if (e > max) max = e;
// //   });
// //   return max;
// // }
// // let maxSalary = Math.max.apply(salaries);
// // console.log(maxSalary);


// function maxSalary(salaries) { //Variant2
//     let maxSalary = Math.max.apply(salaries);
//     for (let [key, value] of Object.entries(salaries)) {
//     }
// }
//  console.log(maxSalary);

let users = { mike: 'Mike', bob: 'Bob', nikola: 'Nikola' };//Task3
let { mike: userMike, bob: userBob, nikola: userNikola } = users;
console.log(userMike, userBob, userNikola);