/* eslint-disable import/extensions */
import {
  engLowerCase, rusLowerCase, engCaps, rusCaps, boolen,
} from './keyLayout.js';

import {
  generationKeys, activeKeyboard,
} from './app.js';

function changeLanguage() {
  const btnLeng = document.querySelector('.header__language');
  if (boolen.isEng === true) {
    boolen.isEng = false;
    btnLeng.textContent = 'Ru';
  } else {
    boolen.isEng = true;
    btnLeng.textContent = 'En';
  }

  if (boolen.isCaps === false) {
    if (boolen.isEng === true) {
      activeKeyboard.array = [];
      generationKeys(engLowerCase);
      activeKeyboard.array = [...engLowerCase];
    } else {
      activeKeyboard.array = [];
      generationKeys(rusLowerCase);
      activeKeyboard.array = [...rusLowerCase];
    }
  } else if (boolen.isCaps === true) {
    if (boolen.isEng === true) {
      activeKeyboard.array = [];
      generationKeys(engCaps);
      activeKeyboard.array = [...engCaps];
    } else {
      activeKeyboard.array = [];
      generationKeys(rusCaps);
      activeKeyboard.array = [...rusCaps];
    }
  }

  return localStorage.setItem('language', JSON.stringify(boolen.isEng));
}

const runOnKeys = () => {
  let pressed;

  document.addEventListener('keydown', (event) => {
    pressed = new Set().add(event.code);

    if (pressed === 'AltLeft' || pressed === 'ControlLeft') {
      changeLanguage();
    }
    pressed.clear();
  });
};

runOnKeys();

function startLang() {
  if (boolen.isEng === true) {
    activeKeyboard.array = [];
    generationKeys(engLowerCase);
    activeKeyboard.array = [...engLowerCase];
  } else {
    activeKeyboard.array = [];
    generationKeys(rusLowerCase);
    activeKeyboard.array = [...rusLowerCase];
  }
}

startLang();
