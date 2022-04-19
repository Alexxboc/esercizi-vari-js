/* Strutture dati avanzate */

/* Class expression - not hoisted

const NomeClasse = class {
    
}

*/
/* Class Declaration (ES6) - not hoisted 
- class keyword
- {code here}

// Sintax
class NameClass {

}

*/ 

class Product {
    is_available = false
    // Special method constructor
    constructor(name, description, price, category, image, likes = getRndInteger()) {
       this.name = name 
       this.description = description
       this.price = price 
       this.image = image
       this.category = category
       this.likes = likes
    }

    // Class methods
    /**
     * Increases the likes current product instance
     */
    increaseLikes() {
        return this.likes += 1
    }

    decreaseLikes() {
        return this.likes -= 1
    }

}

// const mouse = new Product('Anker Vertical Mouse', 'compy vertical mouse', 40.99, '', 'black', 'pc accessories', 0)

const products = [
    new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', './assets/img/ssd.jpg'),
    new Product('Aoc 24inc Monitor', 'ultra thin monitor', 149.99, 'PC Monitors', './assets/img/monitor.jpg'),
    new Product('Corsair ATX Case', 'Small form factor atx desktop pc case', 99.99, 'PC Accessories', './assets/img/case.jpg'),
    new Product('Anker Vertical mouse', 'Comfy vertical mouse', 29.99, 'PC accessories', './assets/img/mouse.jpg'),
    new Product('Lenovo Idea pad', 'Modern 8gb ram ultra thin laptop', 549.99, 'Laptops', './assets/img/laptop.webp'),
    new Product('Walking desk', 'Get fit with the best walking desk', 649.99, 'Office equipment', './assets/img/desk.webp'),
]


console.log(products);

// const ssd = new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', './ssd.jpg')
// ssd.increaseLikes()
// console.log(ssd);
/**
 * 
 * @param {*} product 
 * @returns 
 */
function generateProduct(product) {
    return `
    <div class="product">
        <img src="${product.image}" alt="">
        <div class="product_details">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="btn btn_dark buy_now" data-product-name="${product.name}" data-product-price="${product.price}">Buy Now</button>
            <a class="like"><i class="fa-solid fa-heart" aria-hidden="true"></i></a>
            <div class="counter">${product.likes}</div>
            
        </div>
        <div class="price">
        ${product.price}           
        </div>
    </div>
       `
        
}

/**
 * Generate Products cards inside the dom element
 * @param {array} products_array A loist of products
 * @param {object} dom_object a dom element
 * @return void
 */
function generateProductsCard(products_array, dom_object) {
    
    products_array.forEach(product => {
        const markup = generateProduct(product)
        dom_object.insertAdjacentHTML('beforeend', markup)
    });
    
}

const productsElement = document.querySelector('.products')
generateProductsCard(products, productsElement)

const cart = []

document.querySelectorAll('.buy_now').forEach(element => {

    element.addEventListener('click', function () {
        // console.log(this);
        const name = this.getAttribute('data-product-name')
        const price = parseInt(this.getAttribute('data-product-price')) 
        // console.log(name, price);
        const purchase_product = {name, price}
        cart.push(purchase_product)
        console.log(cart);

        // sow cart items inside the cart dom element
        document.querySelector('.cart').insertAdjacentHTML('beforeend', `<li class="item"> ${purchase_product.name} €${purchase_product.price} </li>`)

        // (Loop over the cart items)
        let sum = 0;
        cart.forEach(element => {
            sum += element.price
        })
        // sum all prices
        console.log(sum);
        // show cart total 
        document.querySelector('.total').innerHTML = `Total: € ${sum.toFixed(2)}` 

    })
})

// const counterElement = document.querySelectorAll('.counter')
// // console.log(counterElement);
// counterElement.forEach(element => {
//     // console.log(element);
//     let counterNumber = Number (element.innerHTML)
//     // console.log(counterNumber);
//     // counterNumber.increaseLikes()
//     // console.log(counterNumber);
// })

let counterElement = document.querySelectorAll('.counter')

const likeButton = document.querySelectorAll('.like')
likeButton.forEach((element, index) => {
    // console.log(index);
    element.addEventListener('click', function (event) {
        event.preventDefault()
        // console.log(this);
        this.classList.toggle('color_red')
        let likesNumber;
        console.log(likesNumber);
        if(this.classList.contains('color_red')) {
            likesNumber = products[index].increaseLikes()
            counterElement[index].innerHTML = likesNumber
        } else {
            likesNumber = products[index].decreaseLikes()
            counterElement[index].innerHTML = likesNumber
        }
        
    })
})
        
function getRndInteger() {
    return Math.floor(Math.random() * 1000 )
  }
        



        

