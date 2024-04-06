import ('./style.css');
import Image1 from './images/Image1.jpg';
import Image2 from './images/Image2.jpg';
import Image3 from './images/Image3.jpg';

const imageSources = [
  Image1,
  Image2,
  Image3
];

function buildPage() {
  const contentDiv = document.querySelector('#content');

  const contentHeader = document.createElement('h1');
  const contentParagraph = document.createElement('p');
  const contentImages = document.createElement('div');

  for (let i = 0; i < 3; i++) {
    let img = new Image();
    img.src = imageSources[i];
    contentImages.appendChild(img);
  }

  contentHeader.textContent = 'Pizza Out Of This Planet!';
  contentParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentParagraph);
  contentDiv.appendChild(contentImages);
}

export default buildPage;
