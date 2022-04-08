/* 
Live 1 Butta la pasta :
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert().
*/

// Chiedo all'utente quanto manca alla fine della cottura 
// const seconds = Number(prompt('Quanto manca alla fine della cottura della pasta?'));

// setTimeout(function(){
//     alert('La pasta è pronta')
// }, seconds * 1000)


/* 
Live 2 Buon anno :
Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
- selezionare l'elemento della dom
- appendere alla dom il contatore che parta da 10
- creare una timing function con contatore
*/

// Seleziono l'elemento counter nella dom
// const counterElement = document.querySelector('.counter')
// // Dichiaro una variabile per i secondi dai quali parte il contatore e andranno stampati in pagina
// let seconds = 10;

// // Creo una variabile per il mio contatore con la funzione set interval
// const timeInterval = setInterval(() => {
//     // Stampo in pagina il contatore
//     counterElement.innerHTML = seconds;
//     // verifico quando il contatore deve mostrare l'allerta
//     if (seconds === 0) {
//         // mostro l'allerta
//         alert('Buon anno 🎉 🎉 🎉')
//         // stoppo il contatotre con la funzione clearInterval
//         clearInterval(timeInterval)
//     }
//     // Imposto il contatore con indice di decremento
//     seconds--
// }, 1000)

// const timeInterval = setInterval(counter, 1000)

// // Creo una funzione per il mio contatore
// function counter () {
//     // Stampo nella DOM il contatore
//     counterElement.innerHTML = seconds;
//     // Verifico che quando il contatore arriverà a 0 mostri l'allerta
//     if (seconds === 0) {
//         // mostro l'allerta
//         alert('Buon anno 🎉 🎉 🎉');
//         // fermo il contatore con la funzione clearinterval
//         clearInterval(timeInterval);
//     }
//     // imposto il contatore con indice di decremento
//     seconds--
// }

/* 
Cliccando su un pulsante, viene avviato un cronometro.
Per fermare il cronometro, bisogna cliccare su un secondo pulsante.
*/

// Seleziono il pulsante start
const buttonStartElement = document.querySelector('.start')
// Seleziono l'elemento nella DOM dove verrà stampato il contatore
const timerElement = document.querySelector('.counter')
// Dichiaro una varibile per i secondi
let seconds;
let startTimer;
// Creo un evento di ascolto per la fuznione start
buttonStartElement.addEventListener('click', function() {
    // // Avviare il contatore
    // let seconds = 0;
    // startTimer = setInterval(() => {
    //     // Stampo in pagina il contatore
    // timerElement.innerHTML = seconds;
    // // Imposto il contatore con indice di incremento
    // seconds++
    // }, 1000)
    startCount()
    console.log(startCount);
})

// Seleziono il pulsante stop
const buttonStopElement = document.querySelector('.stop');
// Creo un evento di ascolto per la funzione stop
buttonStopElement.addEventListener('click', function() {
    clearInterval(startTimer);
})
    

function startCount() {
     // Avviare il contatore
     let seconds = 0;
     startTimer = setInterval(() => {
         // Stampo in pagina il contatore
     timerElement.innerHTML = seconds;
     // Imposto il contatore con indice di incremento
     seconds++
     }, 1000)
}

