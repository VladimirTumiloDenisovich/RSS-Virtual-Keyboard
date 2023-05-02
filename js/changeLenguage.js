/* eslint-disable import/extensions */
import {
  engLowerCase, rusLowerCase, engCaps, rusCaps, boolen,
} from './keyLayout.js';

import {
  generationKeys, activeKeyboard,
} from './app.js';

const btnLeng = document.querySelector('.header__language');

function changeLanguage() {
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

function pressDblKeys() {
  let pressed = ['0'];

  document.addEventListener('keydown', (event) => {
    pressed.push(event.code);

    if (pressed[0] === 'AltLeft' && pressed[1] === 'ControlLeft') {
      changeLanguage();
      pressed = ['0'];
      return pressed;
    }
    if (pressed[0] === 'ControlLeft' && pressed[1] === 'AltLeft') {
      changeLanguage();
      pressed = ['0'];
      return pressed;
    }
    return pressed.shift();
  });
}

pressDblKeys();

function startLang() {
  if (boolen.isEng === true) {
    activeKeyboard.array = [];
    generationKeys(engLowerCase);
    activeKeyboard.array = [...engLowerCase];
    btnLeng.textContent = 'En';
  } else {
    activeKeyboard.array = [];
    generationKeys(rusLowerCase);
    activeKeyboard.array = [...rusLowerCase];
    btnLeng.textContent = 'Ru';
  }
}

startLang();
