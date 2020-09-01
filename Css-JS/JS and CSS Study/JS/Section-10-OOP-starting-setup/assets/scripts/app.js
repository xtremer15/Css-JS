class Product {
    constructor(title, imgURL, price, description) {
        this.title = title
        this.imgURL = imgURL
        this.price = price
        this.description = description
    }
}

class ShoppingCart {
    items = []


    addProductItem(product) {
        this.items.push(product)
        this.totalOutput = `<h2>Total: \$${1}<h2>`
    }

    renderItems() {
        const cartEl = document.createElement("section")
        cartEl.innerHTML = `
        <h2>Total: \$${0}<h2>
        <button>Order Now!</button>
        `
        cartEl.className = 'cart'
        this.totalOutput = cartEl.querySelector("h2")
        return cartEl;
    }
}

class ProductItem {

    constructor(product) {
        this.product = product
    }

    addItemToCart(){
        
    }

    renderItem() {
        const prodEl = document.createElement("li")
        prodEl.className = "product-item"
        prodEl.innerHTML = `
        <div>
        <img src="${this.product.imgURL}" alt="${this.product.title}">
        <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p> 
            <button>Add To Cart</button>
        </div>
        </div>`
        const buttonAddToCart = prodEl.querySelector("button")
        buttonAddToCart.addEventListener('click', this.addItemToCart.bind(this))
        return prodEl
    }
}



class ProductList {

    constructor() {}

    products = [

        new Product("Pillow", 'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg', 12.99, "A soft pillow "),

        new Product("Carpet", 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg', 82.99, "A nice carpet")

    ]

    render() {
        const prodList = document.createElement("ul")
        prodList.className = 'product-list'
        for (const product of this.products) {
            console.log(product);
            const productItem = new ProductItem(product)
            const productElement = productItem.renderItem();
            prodList.append(productElement)
        }

        return prodList;
    }
}

class Shop {
    renderShop() {
        const renderHook = document.getElementById("app")

        const cart = new ShoppingCart()
        const cartEl = cart.renderItems();
        const prodList = new ProductList();
        const prodListEl = prodList.render();

        renderHook.append(cartEl)
        renderHook.append(prodListEl)
    }
}

const shop = new Shop()
shop.renderShop();