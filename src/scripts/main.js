'use strict';

const catalog = document.getElementById('catalog-menu');
const catalogList = document.getElementById('catalog-list');
const burgerMobile = document.getElementById('burger-mobile');
const burgerMenu = document.getElementById('burger__menu');

catalog.addEventListener('click', () => {
  catalogList.classList.toggle('searchbar__list--toggle');
});

burgerMobile.addEventListener('click', () => {
  burgerMenu.classList.toggle('navbar__menu--active');
});
