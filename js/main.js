'use strict';

const menuButton = document.querySelector('.menu-button'),
  menu = document.querySelector('.navbar'),
  closeButton = document.querySelector('.close-button');

const toggleMenu = (event) => {
  menu.classList.toggle('is-open');
};

menuButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

