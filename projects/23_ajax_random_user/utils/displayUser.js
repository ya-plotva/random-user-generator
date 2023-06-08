import { getElement, getAllElements } from './getElements.js';
import removeActiveStyle from './removeActiveBtnStyle.js';

const img = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const icons = [...getAllElements('.icon')];

const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  // setting style 'active' to the name icon by default
  removeActiveStyle(icons);
  icons[0].classList.add('active');

  // iterating over btns-icons
  icons.forEach((icon) => {
    const label = icon.dataset.label;
    icon.addEventListener('click', () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      // changing style for an active icon
      removeActiveStyle(icons);
      icon.classList.add('active');

      console.log(person[label]);
    });
  });
};

export default displayUser;
