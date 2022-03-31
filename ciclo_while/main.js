const shoppingListElement = document.querySelector('.shopping .list')

const shoppingList = ['pane', 'latte di avena', 'gelato', 'pizza'];


let counter = 0

while (counter < shoppingList.length){
    const product = shoppingList[counter]

    const liElement = document.createElement(`li`)

    liElement.append(product)
    shoppingListElement.append(liElement)

counter++   
}

