/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
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

function runOnKeys(...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();

    changeLanguage();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(
  'AltLeft',
  'ControlLeft',
);

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
