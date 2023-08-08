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
