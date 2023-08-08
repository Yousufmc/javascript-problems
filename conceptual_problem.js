// // function isInteger(number){
// //    if(typeof number !== "number"){
// //     return'Please provide a number'
// //    }
// //    else if(number % 1 == 0){
// //     return true;
// //    }
// //    else{
// //     return false;
// //    }
// // }
// // console.log(isInteger(2.5))

// // Problem -01
// function isInteger(number){
// if(typeof number !== "number"){
//     return 'Please Provide a valid Number.'
// }else if(number % 1 == 0){
//     return true;
// }
// else{
//     return false;
// }

// }
// console.log(isInteger(2))

// // Problem -02:
// function isJavaScriptFile(x) {
//   if (typeof x !== "string") {
//     return "please Provide a string.";
//   } else if (x.toLowerCase().endsWith(".js") === true) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let x = "index.js";
// console.log(isJavaScriptFile(x));

// Problem -03:
// function mindGame(x){
// if (typeof x !== "number"){
//     return "please input a number.";
// }
// else if (x <=0){
//     return "Please Provide a Positive Number."
// }
// else{output = (((x*3)+10)/2)-5}
// return output;
//     }
// let x = '10';
// console.log(mindGame(x));

// basic Problem :4
// function isLGSeven(x) {
//   if (typeof x !== "number") {
//     return "Please provide a number.";
//   } else {
//     const differ = x - 7;
//     if (differ < 7) {
//       return differ;
//     } else {
//       return x * 2;
//     }
//   }
// }
// isLGSeven(5);

// // Intermediate Problem-01:
// function findingBadData(arr) {
//   if (!Array.isArray(arr)) {
//     return "Please provide me a array";
//   } else {
//     let badData = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] !== "number") {
//         return "please give me number";
//       } else {
//         if (arr[i] < 0) {
//           badData++;
//         }
//       }
//     }
//     return badData
//   }
// }
// const arr = [-5, 2, -7, -9] ;
// console.log(findingBadData(arr))
// // console.log(typeof(arr));

// Problem -02:

// function gemsToDiamond(x, y, z){
//   if(typeof x !== "number" || typeof y !== "number" ||typeof z !== "number"){
//     return 'give a valid number'
//   }
//   else if(x < 0 || y < 0 || z < 0){
//     return 'give a positive number.'
//   }else{
//     const num1 = 21;
//     const num2 = 32;
//     const num3 = 43;
//     const total = 21*x + 32*y + 43*z
//     if(total > 2000) {return total- 2000}
//     else{return total}
//   }
// }

// // console.log(gemsToDiamond(1, 1, 1))
// // console.log(gemsToDiamond(20, 200, 50))
// console.log(gemsToDiamond(100, 5, 1))