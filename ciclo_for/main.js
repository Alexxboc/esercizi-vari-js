/* Stampare numeri da 1 a 100 */ 

// const listHtml = document.getElementById(`list`);

// for(let i = 0; i <= 100; i++) {
//     console.log(i)
//     let listItem = `<li> elemento lista n ${i}</li>`
//     listHtml.innerHTML = listHtml.innerHTML + listItem
// }


/* Stampare i numeri da 20 a 50 */

// const listHtml = document.getElementById(`list`);

// for (let i = 20; i <= 50; i++){
//     console.log(i)
//     let listItem = `<li class="elemento-${i}"> elemento lista n ${i}`
//     listHtml.insertAdjacentHTML(`beforeend`, listItem)
// }

/* Stampare numeri da 100 fino a 1 */

// const listHtml = document.getElementById(`list`);

// for (let i = 100; i >= 1; i--) {
//     console.log(i);

//     listHtml.innerHTML += `<li class="elemento-${i}"> elemento lista n ${i}`
// }

/* Stampare numeri da  1000 fino a 500 */

// const listHtml = document.getElementById(`list`);

// for (let i = 1000; i > 500; i--) {
//     console.log(i);
//    let listItem = document.createElement(`li`);
//    listItem.append(`lista n ${i}`)
//    listHtml.append(listItem)

//    listItem.classList.add(`item-${i }`)
// }

/* Tombola */

const numbersElement = document.querySelector(`.numbers`)
for (let i = 1; i <= 100; i++){
    console.log(i);
    const markupLi = `
    <div class="number">
    <div>${i}</>
    </div>`

    numbersElement.insertAdjacentHTML
    (`beforeend`, markupLi)
}