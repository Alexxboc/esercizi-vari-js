/* 
Creare in Js una griglia 8x8
Ogni voglia che clicco il quadrato si colora di verde
*/


// Creo una funzione che generi le celle
function generateGrid(number_of_cells, selector, element_name, class_name) {
    // Seleziono l'elemento contenitore nella DOM
    const cellsElement = document.querySelector(selector)
    // Genero il numero di celle con un ciclo for
    for (let i = 1; i <= number_of_cells; i++) {
         // Dichiaro una variabile dove creo l'elemento della DOM
      const cell = document.createElement(element_name)
        // Aggiungo la classe all'elemento 
      cell.classList.add(class_name)
        // Appendo l'elemento nella DOM
      cellsElement.append(cell)
    }
  }
  
// Creo una funzione che selezioni TUTTI gli elementi creati
  function selectCells(selector) {
    //   Dichiaro una variabile dove seleziono gli elementi
    const cells = document.querySelectorAll(selector)
    return cells
  }
  
// Creo una funzione per rendere "Attive le celle"
  function activateCell(selector, active_class) {
    const cells = selectCells(selector)
    //console.log(cells);
  
    for (let index = 0; index < cells.length; index++) {
      const cell = cells[index];
      cell.addEventListener('click', function () {
        console.log(this);
        //this.classList.add(active_class)
        this.firstChild.style.opacity = 1
        if (isEven(this.innerText)) {
          this.style.backgroundColor = 'palegreen'
        } else {
          this.style.backgroundColor = 'red'
  
        }
      })
    }
  }
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateGridNumbers(min, max) {
    const gridNumbers = []
  
    while (gridNumbers.length !== max) {
      const randomNumber = getRandomInteger(min, max)
  
      if (!gridNumbers.includes(randomNumber)) {
        gridNumbers.push(randomNumber)
      }
    }
    return gridNumbers
  }
  
  function isEven(n) {
    if (n % 2 === 0) {
      return true
    } else {
      return false
  
    }
  }
  
  function fillCells(selector) {
    const cells = selectCells(selector)
    console.log(cells);
    for (let index = 0; index < cells.length; index++) {
      const cell = cells[index];
      console.log(cell);
      const gridNumbers = generateGridNumbers(1, 64)
      cell.innerHTML = `<span>${gridNumbers[index]}</span>`
    }
  }
  
  generateGrid(64, '.cells', 'div', 'cell')
  activateCell('.cell', 'selected')
  fillCells('.cell')