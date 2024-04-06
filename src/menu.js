import('./style.css');

const pizzaMenu = {
  'BBQ Bacon': 'Bacon, BBQ Sauce',
  'Hawaiian': 'Ham, Pineapple',
  'Creamy Bacon & Spinach': 'Cream cheese base, bacon, spinach, onion, feta',
  'Mexian Fiesta': 'Ground Beef, jalapeño, green pepper, onion',
  'Club': 'Ham, Bacon, Chicken, BBQ Sauce',
};

function buildMenu() {
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = '';

  const contentHeader = document.createElement('h1');
  contentHeader.textContent = 'Menu';

  contentDiv.appendChild(contentHeader);

  for (let key in pizzaMenu) {
    let menuSelection = document.createElement('div');
    let itemName = document.createElement('h2');
    let itemDescription = document.createElement('p');

    itemName.textContent = key;
    itemDescription.textContent = pizzaMenu[key];

    menuSelection.appendChild(itemName);
    menuSelection.appendChild(itemDescription);

    contentDiv.appendChild(menuSelection);
  }

}

export default buildMenu;
