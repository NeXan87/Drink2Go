import { isEscapeKey } from './utils.js';

const headerElement = document.querySelector('.main-header');

const addEventListener = () => {
  document.addEventListener('keydown', closeMobileMenu);
  document.addEventListener('click', closeMobileMenu);
};

const removeEventListener = () => {
  document.removeEventListener('keydown', closeMobileMenu);
  document.removeEventListener('click', closeMobileMenu);
};

const closeMobileMenu = (evt) => {
  if (
    isEscapeKey(evt) ||
    (!evt.target.closest('.main-header__button') &&
      !evt.target.closest('.main-header__site-list'))
  ) {
    removeEventListener();
    headerElement.classList.remove('is-open');
  }
};

function onButtonElementClick(evt) {
  headerElement.classList.toggle('is-open');

  if (headerElement.classList.contains('is-open')) {
    addEventListener();
  } else {
    closeMobileMenu(evt);
  }
}

const initButtonMenuActions = () => {
  const headerButtonElement = document.querySelector('.main-header__button');
  headerButtonElement.addEventListener('click', onButtonElementClick)
};

export { initButtonMenuActions };
