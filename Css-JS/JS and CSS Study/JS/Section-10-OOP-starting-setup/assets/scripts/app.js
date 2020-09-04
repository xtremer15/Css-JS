class Product {
    constructor(title, imgURL, price, description) {
        this.title = title
        this.imgURL = imgURL
        this.price = price
        this.description = description
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.attrValue = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.renderId = renderHookId
    }
    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag)
        if (cssClasses) {
            rootElement.cssClasses = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attribute of attributes) {
                rootElement.setAttribute(attribute.name, attribute.value)
            }
        }
        document.getElementById(this.renderId).append(rootElement)
        return rootElement
    }
}

class ShoppingCart extends Component {
    items = []

    // De discutata cu razvan cum se face trigger la setter in felul de mai jos
    set cartItems(value) {
        this.items = value
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}<h2>`
    }

    get totalAmount() {
        const sum = this.items.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0)
        return sum
    }

    constructor(renderHookId) {
        super(renderHookId)
    }

    // De discutata cu razvan cum se face trigger la setter in felul de mai jos
    addProductItem(product) {
        const updatedItems = [...this.items]
        updatedItems.push(product)
        this.cartItems = updatedItems;
    }

    renderItems() {
        const cartEl = this.createRootElement("section", "cart");
        cartEl.innerHTML = `
        <h2>Total: \$${0}<h2>
        <button>Order Now!</button>
        `
        this.totalOutput = cartEl.querySelector("h2")
    }
}

class ProductItem {

    constructor(product) {
        this.product = product
    }

    addItemToCart() {
        App.addItemToCart(this.product)
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

        this.cart = new ShoppingCart('app')
        this.cart.renderItems();
        const prodList = new ProductList();
        const prodListEl = prodList.render();


        renderHook.append(prodListEl)
    }
}

class App {
    static init() {
        const shop = new Shop()
        shop.renderShop();
        this.cart = shop.cart;
    }

    static addItemToCart(product) {
        this.cart.addProductItem(product);
    }
}

App.init();