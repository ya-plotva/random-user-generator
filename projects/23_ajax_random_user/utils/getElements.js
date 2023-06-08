export const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`${selector} selector does not exist`);
};

export const getAllElements = (selector) => {
  const element = document.querySelectorAll(selector);
  if (element) {
    return element;
  }
  throw new Error(`${selector} selector does not exist`);
};
