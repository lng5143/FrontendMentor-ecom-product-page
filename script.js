const overlay = document.querySelector('#overlay');
const navElements = document.querySelector('#nav-elements');
const imageClick = document.querySelector('#image-click');

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

menuIcon.addEventListener('click', openMobileMenu);
closeIconMenu.addEventListener('click', closeMobileMenu);
mainNext.addEventListener('click', nextMainImage);
mainPrevious.addEventListener('click', prevMainImage);
mainImage.addEventListener('click', openClickImage);
closeIconClickImage.addEventListener('click', closeClickImage);
clickNext.addEventListener('click', nextClickImage);
clickPrevious.addEventListener('click', prevClickImage);
// mainThumbnails.addEventListener('click', chooseMainImageByThumbnail);
// clickThumbnails.addEventListener('click', chooseClickImageByThumbnail);
plus.addEventListener('click', increaseQuantity);
minus.addEventListener('click', decreaseQuantity);
addCart.addEventListener('click', addCart);



function openMobileMenu() {
    overlay.style.display = 'block';
    navElements.style.display = 'block';
}

function closeMobileMenu() {
    overlay.style.display = 'none';
    navElements.style.display = 'none';
}

function nextMainImage() {

}

function prevMainImage() {

}

function openClickImage() {
    if (mediaQuery.matches) {
        overlay.style.display = 'block';
        imageClick.style.display = 'flex';
        console.log('open click iamge');
    }
}

function closeClickImage() {
    overlay.style.display = 'none';
    imageClick.style.display = 'none';
}

function nextClickImage() {

}

function prevClickImage() {

}

function chooseMainImageByThumbnail() {

}

function chooseClickImageByThumbnail() {

}

function increaseQuantity() {

}

function decreaseQuantity() {

}

function addToCart() {

}