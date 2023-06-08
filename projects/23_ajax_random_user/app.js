import { getElement } from './utils/getElements.js';
import getUserInfo from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = getElement('.btn');

const showUser = async () => {
  // get unser info from API
  // I need to either use .then() or async/await because getUserInfo() is an async function -> returns a promise -> .then() example below
  // getUserInfo().then((data) => console.log(data));
  const person = await getUserInfo();
  displayUser(person);

  // display user
};

window.addEventListener('DOMContentLoaded', showUser);

btn.addEventListener('click', showUser);
