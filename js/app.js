import {
  codeKey, engLowerCase, engUpperCase, rusLowerCase, rusUpperCase, isEng
} from './keyLayout.js';

function getCL(data) {
  return console.log(data);
}

getCL('test');

const allBtn = document.querySelectorAll('.key');

function generationKeys(layout) {
  for (let i = 0; i < allBtn.length; i += 1) {
    allBtn[i].textContent = layout[i];
  }
}

function clickShift(position, value) {
  if (value === 'down') {
    if (position === 'left') {
      allBtn[42].classList.add('key_active');
    } else {
      allBtn[55].classList.add('key_active');
    }
    if (isEng.boo === true) {
      generationKeys(engUpperCase);
    } else {
      generationKeys(rusUpperCase);
    }
  } else if (value === 'up') {
    if (isEng.boo === true) {
      generationKeys(engLowerCase);
    } else {
      generationKeys(rusLowerCase);
    }
  };
}

const keyboard = document.querySelector('.body');

keyboard.addEventListener('keydown', (event) => {
  const clickKey = event.code;
  const indexPressKey = codeKey.findIndex((key) => key === clickKey);
  getCL(indexPressKey);

  console.log(clickKey);

  allBtn[indexPressKey].classList.add('key_active');

  if (clickKey === 'ShiftLeft') {
    clickShift('left', 'down');
  } else if (clickKey === 'ShiftRight') {
    clickShift('right', 'down');
  }
});

function clearKey(event) {
  const clickKey = event.code;
  const indexPressKey = codeKey.findIndex((key) => key === clickKey);
  allBtn[indexPressKey].classList.remove('key_active');
}

keyboard.addEventListener('keyup', (event) => {
  clearKey(event);
  const clickKey = event.code;
  if (clickKey === 'ShiftLeft') {
    clickShift('left', 'up');
  } else if (clickKey === 'ShiftRight') {
    clickShift('right', 'up');
  }
});

export {
  generationKeys,
};
