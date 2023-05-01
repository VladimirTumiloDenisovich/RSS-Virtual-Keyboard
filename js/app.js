import {
  codeKey, engLowerCase, engUpperCase, rusLowerCase, rusUpperCase, engCaps, rusCaps,
  exceptions, boolen,
} from './keyLayout.js';

const activeKeyboard = {
  array: [...engLowerCase],
};
let activeKey = '';
let indexPressKey;

const allBtn = document.querySelectorAll('.key');

function generationKeys(layout) {
  for (let i = 0; i < allBtn.length; i += 1) {
    allBtn[i].textContent = layout[i];
  }
}

let undoValue = [...activeKeyboard.array];

function clickShift(position, value) {
  if (value === 'down') {
    if (position === 'left') {
      allBtn[42].classList.add('key_active');
    } else {
      allBtn[55].classList.add('key_active');
    }
    if (boolen.isEng === true) {
      undoValue = [...activeKeyboard.array];
      activeKeyboard.array = [];
      generationKeys(engUpperCase);
      activeKeyboard.array = [...engUpperCase];
    } else {
      undoValue = [...activeKeyboard.array];
      activeKeyboard.array = [];
      generationKeys(rusUpperCase);
      activeKeyboard.array = [...rusUpperCase];
    }
  } else if (value === 'up') {
    if (boolen.isEng === true) {
      activeKeyboard.array = [];
      generationKeys(undoValue);
      activeKeyboard.array = [...undoValue];
    } else {
      activeKeyboard.array = [];
      generationKeys(undoValue);
      activeKeyboard.array = [...undoValue];
    }
  }
}

function clickCaps(value) {
  if (value === 'down') {
    boolen.isCaps = true;

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
  if (value === 'up') {
    boolen.isCaps = false;

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
}

const keyboard = document.querySelector('.body');

keyboard.addEventListener('keydown', (event) => {
  const clickKey = event.code;
  indexPressKey = codeKey.findIndex((key) => key === clickKey);

  allBtn[indexPressKey].classList.add('key_active');

  if (exceptions.indexOf(indexPressKey) === -1) {
    activeKey = activeKeyboard.array[indexPressKey];
  } else {
    activeKey = '';
  }

  if (clickKey === 'ShiftLeft') {
    clickShift('left', 'down');
  } else if (clickKey === 'ShiftRight') {
    clickShift('right', 'down');
  } else if (clickKey === 'CapsLock') {
    clickCaps('down');
  }
});

function clearKey(event) {
  const clickKey = event.code;
  indexPressKey = codeKey.findIndex((key) => key === clickKey);
  allBtn[indexPressKey].classList.remove('key_active');
}

keyboard.addEventListener('keyup', (event) => {
  clearKey(event);
  const clickKey = event.code;
  if (clickKey === 'ShiftLeft') {
    clickShift('left', 'up');
  } else if (clickKey === 'ShiftRight') {
    clickShift('right', 'up');
  } else if (clickKey === 'CapsLock') {
    clickCaps('up');
  }
});

const textArea = document.querySelector('.keyboard-area__textarea');

function getCaretPos(obj) {
  if (obj.selectionStart) {
    return obj.selectionStart;
  }
  if (document.selection) {
    obj.focus();
    const r = document.selection.createRange();
    if (r == null) {
      return 0;
    }
    const re = obj.createTextRange();
    const rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);
    return rc.text.length;
  }
  return 0;
}

function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  } else if (input.createTextRange) {
    const range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
}

let result = '';

function backspaceBtn(position) {
  const caretPos = position;
  result = result.split('');
  result.splice(caretPos, 1);
  textArea.value = result.join('');
  result = result.join('');
}

function backspaceMouseBtn(position) {
  const caretPos = position;
  result = result.split('');
  result.splice(caretPos - 1, 1);
  textArea.value = result.join('');
  result = result.join('');
}

function deleteBtn(position) {
  const caretPos = position;
  result = result.split('');
  result.splice(caretPos, 1);
  textArea.value = result.join('');
  result = result.join('');
}

function enterBtn(position) {
  const caretPos = position - 1;
  result = result.split('');
  result.splice(caretPos, 0, '\r');
  textArea.value = result.join('');
  result = result.join('');
}

function enterMouseBtn(position) {
  const caretPos = position;
  result = result.split('');
  result.splice(caretPos, 0, '\r');
  textArea.value = result.join('');
  result = result.join('');
}

function updateValue() {
  const caretPos = getCaretPos(textArea);
  result = result.split('');
  if (activeKey !== '') {
    result.splice(caretPos - 1, 0, activeKey);
  }
  textArea.value = result.join('');
  result = result.join('');

  if (activeKeyboard.array[indexPressKey] === 'Backspace') {
    backspaceBtn(caretPos);
  }

  if (activeKeyboard.array[indexPressKey] === 'Del') {
    deleteBtn(caretPos);
  }

  if (activeKeyboard.array[indexPressKey] === 'Enter') {
    enterBtn(caretPos);
  }

  setSelectionRange(textArea, caretPos, caretPos);
}

function mouseUpdateValue(key) {
  const caretPos = getCaretPos(textArea);
  activeKey = key;
  result = result.split('');
  if (activeKey !== '') {
    result.splice(caretPos, 0, activeKey);
  }
  textArea.value = result.join('');
  result = result.join('');

  if (activeKeyboard.array[indexPressKey] === 'Backspace') {
    backspaceMouseBtn(caretPos);
  }

  if (activeKeyboard.array[indexPressKey] === 'Del') {
    deleteBtn(caretPos);
  }

  if (activeKeyboard.array[indexPressKey] === 'Enter') {
    enterMouseBtn(caretPos);
  }

  textArea.focus();
}

textArea.addEventListener('input', updateValue);

keyboard.addEventListener('click', (event) => {
  if (event.target.localName === 'button') {
    if (event.target.innerText === '') {
      return mouseUpdateValue(' ');
    }
    indexPressKey = activeKeyboard.array.findIndex((key) => key === event.target.innerText);
    if (exceptions.indexOf(indexPressKey) === -1) {
      activeKey = activeKeyboard.array[indexPressKey];
    } else {
      activeKey = '';
    }

    return mouseUpdateValue(activeKey);
  }
  return NaN;
});

export {
  generationKeys, allBtn, activeKeyboard,
};
