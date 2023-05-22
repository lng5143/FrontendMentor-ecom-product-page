const overlay = document.querySelector('#overlay');
const navElements = document.querySelector('#nav-elements');
const imageClick = document.querySelector('#image-click');
const imageClickMain = document.querySelector('#image-click-main-image');
const productQuantity = document.querySelector('#product-quantity');
const cart = document.querySelector('#cart-float');
const cartNumber = document.querySelector('#cart-number')

const menuIcon = document.querySelector('#icon-menu');
const closeIconMenu = document.querySelector('#menu-close');
const mainNext = document.querySelector('#main-image-next');
const mainPrevious = document.querySelector('#main-image-previous');
const mainImage = document.querySelector('#main-image');
const closeIconClickImage = document.querySelector('#image-click-close');
const clickNext = document.querySelector('#image-click-next');
const clickPrevious = document.querySelector('#image-click-previous');
const mainThumbnails = document.querySelectorAll('.product-thumbnail');
const clickThumbnails = document.querySelectorAll('.image-click-thumbnail');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const addCart = document.querySelector('#add-to-cart');

const mediaQuery = window.matchMedia('all and (min-width: 565px)');

let quantity = 0;
let currentMainImageNumber = 1;
let currentClickImageNumber = 1;

menuIcon.addEventListener('click', openMobileMenu);
closeIconMenu.addEventListener('click', closeMobileMenu);
mainNext.addEventListener('click', nextMainImage);
mainPrevious.addEventListener('click', prevMainImage);
mainImage.addEventListener('click', openClickImage);
closeIconClickImage.addEventListener('click', closeClickImage);
clickNext.addEventListener('click', nextClickImage);
clickPrevious.addEventListener('click', prevClickImage);
plus.addEventListener('click', increaseQuantity);
minus.addEventListener('click', decreaseQuantity);
addCart.addEventListener('click', addToCart);

for (let i = 0; i < mainThumbnails.length; i++) {
    mainThumbnails[i].addEventListener('click', () => {
        mainImage.setAttribute('src', `images/image-product-${i + 1}.jpg`);
        currentMainImageNumber = i + 1;
    });
};

clickThumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener('click', () => {
        imageClickMain.setAttribute('src', `images/image-product-${i + 1}.jpg`);
        currentClickImageNumber = i + 1;
    });
});

function openMobileMenu() {
    overlay.style.display = 'block';
    navElements.style.display = 'block';
}

function closeMobileMenu() {
    overlay.style.display = 'none';
    navElements.style.display = 'none';
}

function nextMainImage() {
    if (currentMainImageNumber < 4) {
        currentMainImageNumber++;
        mainImage.setAttribute('src', `images/image-product-${currentMainImageNumber}.jpg`);
    }
}

function prevMainImage() {
    if (currentMainImageNumber > 1) {
        currentMainImageNumber--;
        mainImage.setAttribute('src', `images/image-product-${currentMainImageNumber}.jpg`);
    }
}

function openClickImage() {
    if (mediaQuery.matches) {
        overlay.style.display = 'block';
        imageClick.style.display = 'flex';
    }
}

function closeClickImage() {
    overlay.style.display = 'none';
    imageClick.style.display = 'none';
}

function nextClickImage() {
    if (currentClickImageNumber < 4) {
        currentClickImageNumber++;
        imageClickMain.setAttribute('src', `images/image-product-${currentClickImageNumber}.jpg`);
    }
}

function prevClickImage() {
    if (currentClickImageNumber > 1) {
        currentClickImageNumber--;
        imageClickMain.setAttribute('src', `images/image-product-${currentClickImageNumber}.jpg`);
    }
}

function increaseQuantity() {
    quantity++;
    productQuantity.innerHTML = quantity;
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity--;
    }
    productQuantity.innerHTML = quantity;
}

function addToCart() {
    let content = `
    <p id="cart-title">Cart</p>
          <hr>
          <div id="cart-content">
            <img id="cart-thumbnail" src="images/image-product-1-thumbnail.jpg">
            <div id="cart-text">
              <p id="cart-text-title">Fall Limited Edition Sneakers</p>
              <p id="cart-text-price">$125.00 x ${quantity} <b>$${quantity*125}.00</b></p>
            </div>
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>          </div>
          <div id="checkout">Checkout</div>
    `
    cart.innerHTML = content;
    cartNumber.innerHTML = quantity;
}