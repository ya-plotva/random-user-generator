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

  // icon btn handler
  function iconClickHandler() {
    const label = this.dataset.label;
    title.textContent = `My ${label} is`;
    value.textContent = person[label];
    removeActiveStyle(icons);
    this.classList.add('active');
    console.log(person[label]);

    // removing the event listener
    icons.forEach((icon) =>
      icon.removeEventListener('click', iconClickHandler)
    );
  }

  // iterating over btns-icons
  icons.forEach((icon) => icon.addEventListener('click', iconClickHandler));
};

export default displayUser;
