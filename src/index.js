import buildPage from './build-page.js';
import buildMenu from './menu.js';

buildPage();

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
// const aboutButton = document.querySelector('#about-button');

homeButton.addEventListener('click', buildPage);
menuButton.addEventListener('click', buildMenu);
// aboutButton.addEventListener('click', buildAbout);
