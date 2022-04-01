
/* 
pari o dispari: scrivere una funzione per verificare se un numero è pari o dispari, 
quindi chiedere un numero all'utente e comunicargli se è pari o dispari
*/

// function isEven(number){
//     if(number % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// const user_number = parseInt(prompt('type a number'))

// // console.log(isEven(12));

// if (isEven(user_number)) {
//     console.log('Numero pari');
// } else {
//     console.log('Numero dispari');
// }


/* 
numeri random: generare 10 numeri random (for o while)
*/

function getRndInteger(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++){
    let random_number = getRndInteger(1, 100)
    console.log(random_number);
}