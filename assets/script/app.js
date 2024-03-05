'use strict';

// JavaScript to toggle the navigation menu on click
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.hamburger-nav');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
}); 