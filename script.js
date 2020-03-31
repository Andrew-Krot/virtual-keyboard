/* eslint-disable no-undef */
/* eslint-disable eol-last */


// Create layout

const container = document.createElement('div');
container.className = 'container';
document.body.prepend(container);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
container.prepend(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
container.append(keyboard);

const keyboardKeys = document.createElement('div');
keyboardKeys.className = 'keyboard__keys';
keyboard.append(keyboardKeys);


// Get key on keyboard

const key = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101,
  114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106,
  107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47,
];

// Click on real keyboard

function init() {
  let out = '';
  for (let i = 0; i < key.length; i += 1) {
    if (i === 13 || i === 26 || i === 37) {
      out += '<br>';
    }
    out += `<button class="keyboard__key" data = "${key[i]}" >${String.fromCharCode(key[i])}</button>`;
  }
  document.querySelector('.keyboard__keys').innerHTML = out;
}
init();

document.onkeypress = function (event) {
  document.querySelector('.textarea').innerHTML += event.key;
  console.log(event.code);
  console.log(event.keyCode);
  document.querySelectorAll('.keyboard__keys .keyboard__key').forEach((elem) => {
    elem.classList.remove('active');
  });

  document.querySelector(`.keyboard__keys .keyboard__key[data = "${event.keyCode}"]`).classList.add('active');
};