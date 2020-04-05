/* eslint-disable no-undef */
/* eslint-disable eol-last */


// Create layout

const container = document.createElement('div');
container.className = 'container';
document.body.prepend(container);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.setAttribute('autofocus', 'autofocus');
container.prepend(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
container.append(keyboard);

const keyboardKeys = document.createElement('div');
keyboardKeys.className = 'keyboard__keys';
keyboard.append(keyboardKeys);

const description = document.createElement('div');
description.className = 'description';
description.innerHTML = 'Для смены раскладки нажмите "֎"';
container.prepend(description);


// // Get key on keyboard

const engKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⮝', 'Win', 'Alt', 'Alt', '⮜', '⮟', '⮞',
];

const rusKeys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', '+',
  'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '⮝', 'Win', 'Alt', 'Alt', '⮜', '⮟', '⮞',
];


const wideKeys = ['Backspace', 'Tab', 'Caps', 'Enter', 'Shift', 'Ctrl'];
const extraWideKeys = [''];
const changeLanguageBtn = '֎';


function init() {
  let out = '';
  for (let i = 0; i < engKeys.length; i += 1) {
    if (i === 13) {
      // backspace, tab
      out += `<button class="keyboard__key keyboard__key-wide">${(wideKeys[0])}</button>
      <br>
      <button class="keyboard__key keyboard__key-wide">${(wideKeys[1])}</button>`;
    }

    // capslock
    if (i === 26) {
      out += `<br>
      <button class="keyboard__key keyboard__key-caps-enter">${(wideKeys[2])}</button>`;
    }

    // enter, L-shift
    if (i === 37) {
      out += `<button class="keyboard__key keyboard__key-caps-enter">${(wideKeys[3])}</button>
      <br>
      <button class="keyboard__key keyboard__key-left-shift">${(wideKeys[4])}</button>`;
    }

    // R-shift, L-ctrl
    if (i === 48) {
      out += `<button class="keyboard__key">${(wideKeys[4])}</button>
      <br>
      <button class="keyboard__key keyboard__key-wide">${(wideKeys[5])}</button>`;
    }

    // change-languge
    if (i === 48) {
      out += `<button id="changeLanguage" class="keyboard__key change-language-key">${(changeLanguageBtn)}</button>`;
    }

    // spacebar
    if (i === 50) {
      out += `<button class="keyboard__key keyboard__key-extra-wide">${(extraWideKeys[0])}</button>`;
    }

    // R-ctrl
    if (i === 51) {
      out += `<button class="keyboard__key">${(wideKeys[5])}</button>`;
    }

    out += `<button class="keyboard__key">${(engKeys[i])}</button>`;
  }
  document.querySelector('.keyboard__keys').innerHTML = out;
}
init();

document.onkeypress = function (event) {
  textarea.innerHTML += document.querySelector('.keyboard__key').innerHTML;
  document.querySelector('.keyboard__key').forEach((elem) => {
    elem.classList.remove('active');
  });
  document.querySelector('.keyboard__key').classList.add('active');
};