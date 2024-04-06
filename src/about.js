function buildAbout() {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '';

  const contentHeader = document.createElement('h1');
  const contentParagraph = document.createElement('p');

  contentHeader.textContent = 'About';
  contentParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentParagraph);
}

export default buildAbout;
