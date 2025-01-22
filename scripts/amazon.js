// import { calculateCartQuantity } from '../data/cart.js' //the 2dots goes outside the scripts folder
import {products, loadProducts} from '../data/products.js '
import { formatCurrency } from './utils/money.js'
import {cart} from '../data/cart-class.js'

loadProducts(renderProductsGrid) //waited for the https to finish a request and run the code which is the function renderProductsGrid()

function renderProductsGrid() {
  updateCartQuantity()
    let productsHTML = ''
    const url = new URL(window.location.href)
    const search = url.searchParams.get('search')
    let filteredProducts = products

    if(search){
      filteredProducts = products.filter((product) => {
        let matchingKeyword = false

        product.keywords.forEach((keyword) => {
          if(keyword.toLowerCase().includes(search.toLowerCase())){
            matchingKeyword = true
          } 
        })

        return matchingKeyword || product.name.toLowerCase().includes(search.toLowerCase())
      })
    }

    filteredProducts.forEach((product) => {
      productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        ${product.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>`
    })

    let isClicked = false
    let hamburgerButton = document.querySelector('.js-hamburger-toggle')
    let hamburgerDropdown = document.querySelector('.js-hamburger-menu-dropdown')      

    hamburgerButton.addEventListener('click', () => {
        if(!isClicked){
          hamburgerDropdown.classList.add('hamburger-dropdown-added')
          isClicked = true
          console.log('clicked')
        }
        else{
          hamburgerDropdown.classList.remove('hamburger-dropdown-added') 
          isClicked = false
        }
      
    })

      document.querySelector('.js-products-grid').innerHTML = productsHTML

      function  updateCartQuantity(){
        const cartQuantity = cart.calculateCartQuantity()
        if(cartQuantity === 0){
          document.querySelector('.js-cart-quantity').innerHTML = ''
        }
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
        
      }
      const cartQuantity = cart.calculateCartQuantity()
      if(cartQuantity === 0){
        document.querySelector('.js-cart-quantity-mobile').innerHTML = 0
      }else{
        document.querySelector('.js-cart-quantity-mobile').innerHTML = cartQuantity
      }

      document.querySelectorAll('.js-add-to-cart').forEach((button) => {
      button.addEventListener('click', ()=>{
        const {productId} = button.dataset

        cart.addToCart(productId)

        let addedToCart = document.querySelector(`.js-added-to-cart-${productId}`)

      let addedMessageTimeoutId
      let timeout
      let isDisplayed = false

      addedToCart.classList.add('added-to-cart-visible')

      setTimeout(() => {
        if(addedMessageTimeoutId){
          clearTimeout(addedMessageTimeoutId)
        }
        timeout = setTimeout(() => {
          addedToCart.classList.remove('added-to-cart-visible')
        })
            
          addedMessageTimeoutId = timeout
        }, 2000)

        updateCartQuantity()
        })
      })


    document.querySelector('.js-search-button').addEventListener('click', () => {
      const  search = document.querySelector('.js-search-bar').value
      window.location.href = `amazon.html?search=${search}`
    })
}

  
