const codeKey = ['IntlBackslash', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter', 'ShiftLeft', 'Backquote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const engLowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del', '⇪ CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\', 'Enter', '⇧ Shift', '§', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', '⇧ Shift', 'Control', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↓', '→'];
const engUpperCase = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del', '⇪ CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter', '⇧ Shift', '±', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', '⇧ Shift', 'Control', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↓', '→'];
const rusLowerCase = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del', '⇪ CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter', '⇧ Shift', ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', '⇧ Shift', 'Control', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↓', '→'];
const rusUpperCase = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del', '⇪ CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'Enter', '⇧ Shift', '[', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', '⇧ Shift', 'Control', 'Option', 'Command', ' ', 'Command', 'Option', '←', '↓', '→'];
const exceptions = [13, 14, 27, 28, 41, 42, 55, 56, 57, 58, 60, 61];
const isEng = {
  boo: true,
};

export {
  codeKey, engLowerCase, engUpperCase, rusLowerCase, rusUpperCase, exceptions, isEng,
};
