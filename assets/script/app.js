'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.hamburger-nav');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
}); 

document.addEventListener('keydown', (event) => {
    if (navigation.classList.contains('active') && event.key === 'Escape') {
        navigation.classList.remove('active');
    }
});
