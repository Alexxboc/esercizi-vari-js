/* 
MILESTONE 1

L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Milestone 2
- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
I numeri nella lista delle bombe non possono essere duplicati.
- In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/





// Seleziono il bottone nella dom
const button = document.getElementById('button');
// console.log(button);
// Creo un evento di ascolto per il click del bottone
button.addEventListener('click', function (event) {
    // prevengo il comportamento di default
    event.preventDefault();
    // console.log(event);
    // Seleziono l'elemento della dom che permette di scegliere il livello di difficoltà scelto
    const level = document.getElementById('level').value;
    // console.log(levelElement);
    // Dichiaro una variabile per il numero delle celle e per le colonne
    let numberCells, numberColumns;
    // Verifico le condizioni per ogni livello di difficoltà
    switch (level) {
        case 'easy':
            numberCells = 100;
            numberColumns = 10;
            break;
        
        case 'medium':
            numberCells = 81;
            numberColumns = 9;
            break;
    
        case 'hard':
            numberCells = 49;
            numberColumns = 7;
            break;
    }

     // Genero la lista con le bombe
     bombs = generateBombs(1, numberCells)
    // Invoco la funzione che genera le griglie
    generateGrid(numberCells, numberColumns)
   
     // Invoco la funzione che colora le celle di azzurro al click
     selectCells('.cell', 'color_blue', bombs)
     window.level = numberCells;
    //  console.log(window.level);
     

})
   
   



// Creo una funzione che generi la griglia
function generateGrid (number_of_cells, number_of_cols) {
    // Dichiaro una variabile che selezioni l'area di gioco
    const gameArea = document.querySelector('.cells')
    // Pulisco l'area di gioco
    gameArea.innerHTML = ''
    for(let i = 1; i <= number_of_cells; i++){
        const cell = document.createElement('div')
        // Appendo alla cella il numero progressivo
        cell.append(i)
        cell.classList.add('cell')
        // Dimensiono la larghezza della cella
        cell.style.width = `calc(100% / ${number_of_cols})`
        // Appendo la cella all'area di gioco
        gameArea.append(cell)
    }
}

// Creo una funzione che gestisca il click delle caselle
function selectCells (css_selector) {
    // Seleziono tutte le celle
    const cells = document.querySelectorAll(css_selector)
    // Inizializzo un array vuoto che tenga traccia delle caselle selezionate 
    const attempts = []
    // Ciclo all'interno delle celle
    for (let i = 0; i < cells.length; i++) {
    const cellElement = cells[i];
    // console.log(cellElement);
    const cellValue = Number(cellElement.innerText) 
    // console.log(cellValue);
    cellElement.addEventListener('click', function ()  {
        // console.log(this);
        if (bombs.includes(cellValue)) {
            this.style.backgroundColor = 'red'
            this.innerText = '💣'
            setTimeout(() => {
                alert('Hai selezionato una bomba, la partita è terminata')
            }, 1000)
        } else {
            this.style.backgroundColor = 'cornflowerblue'
            this.style.color = 'white'
            attempts.push(cellValue)
            // console.log(attempts);
        }
    })
    
    }
}
        
        
            
    
// Creo una funzione che crei dei numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

// Creo una funzione che generi le bombe
function generateBombs(min, max) {
    const bombs = [] 
    while (bombs.length !== 16) {
      const bomb = getRndInteger(min, max)
      if (!bombs.includes(bomb)) { 
        bombs.push(bomb)
      }
    }
    return bombs
  }



    
    


