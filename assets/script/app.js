'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.hamburger-nav');
const body = document.querySelector('body');

const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
}); 

document.addEventListener('keydown', (event) => {
    if (navigation.classList.contains('active') && event.key === 'Escape') {
        navigation.classList.remove('active');
    }
});

function showOverlayMessage() {
    overlay.style.display = 'flex';

    setTimeout(function () {
        closeOverlay();
    }, 2000);
}

function closeOverlay() {
    overlay.style.display = 'none';
}

window.addEventListener('load', showOverlayMessage);
