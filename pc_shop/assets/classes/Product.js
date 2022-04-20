
export default class Product {
    is_available = false
    // Special method constructor
    constructor(name, description, price, category, image, likes = 0) {
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