import {
  codeKey, engLowerCase, engUpperCase, rusLowerCase, rusUpperCase, isEng
} from './keyLayout.js';

import {
  generationKeys,
} from './app.js';

function changeLanguage() {
  const btnLeng = document.querySelector('.header__language');
  if (isEng.boo === true) {
    isEng.boo = false;
    btnLeng.textContent = 'Ru';
  } else {
    isEng.boo = true;
    btnLeng.textContent = 'En';
  }

  if (isEng.boo === true) {
    generationKeys(engLowerCase);
  } else {
    generationKeys(rusLowerCase);
  }
}

function runOnKeys(...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      };
    };
    pressed.clear();

    changeLanguage();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(
  'MetaLeft',
  'Space',
);
