'use strict';

const products = document.querySelector('.products');
const productsInCart = document.querySelector('.cart__products');

products.addEventListener('click', (event) => {
    let quantity = event.target.closest('.product__quantity').querySelector('.product__quantity-value');
    if (event.target.classList.contains('product__quantity-control_inc')) {
        quantity.innerText++;
    }
    if (event.target.classList.contains('product__quantity-control_dec') && quantity.innerText > 1) {
        quantity.innerText--;
    }
})

const productAdd = Array.from(document.querySelectorAll('.product__add'));
productAdd.forEach(element => {
    element.addEventListener('click', event => {
        let productImg = event.target.closest('.product').querySelector('.product__image').getAttribute('src');
        let productId = event.target.closest('.product').dataset.id;
        let productQuantity = event.target.closest('.product').querySelector('.product__quantity-value').innerText;

        function isProductAdded() {
            return Array.from(productsInCart.children).find(element => element.dataset.id == productId);
        }

        if (isProductAdded() == undefined) {
            productsInCart.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id=${productId}>
            <img class="cart__product-image" src=${productImg}>
            <div class="cart__product-count">${Number(productQuantity)}</div>
        </div>
        `)
        } else {
            isProductAdded().querySelector('.cart__product-count').textContent = Number(isProductAdded().querySelector('.cart__product-count').textContent) + Number(productQuantity);
        }
    })
})
