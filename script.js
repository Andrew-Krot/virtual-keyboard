/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable eol-last */


// Create layout

const keyboardLayout = {
  elements: {
    container: null,
    description: null,
    textarea: null,
    keyboard: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    capslock: false,
  },

  init() {
    // Create Container
    this.elements.container = document.createElement('div');
    this.elements.container.className = 'container';
    document.body.append(this.elements.container);

    // Create Description
    this.elements.description = document.createElement('p');
    this.elements.description.className = 'description';
    this.elements.description.innerHTML = 'Для смены раскладки нажмите "֎"';
    this.elements.container.append(this.elements.description);

    // Create Textarea
    this.elements.textarea = document.createElement('textarea');
    this.elements.textarea.className = 'textarea';
    this.elements.container.append(this.elements.textarea);

    // Create Keyboard
    this.elements.keyboard = document.createElement('div');
    this.elements.keyboard.className = 'keyboard';
    this.elements.container.append(this.elements.keyboard);

    // Create Keys
    this.elements.keyboard.appendChild(this.createKeys());
  },


  createKeys() {
    const fragment = document.createDocumentFragment();
    const engKeys = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
      'CapsLk', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
      'LShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '⮝', 'RShift',
      'LCtrl', '֎', 'Win', 'LAlt', 'Space', 'RAlt', 'RCtrl', '⮜', '⮟', '⮞',
    ];
    const rusKeys = [
      'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', '+', 'Backspace',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
      'CapsLk', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
      'LShift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '⮝', 'RShift',
      'LCtrl', '֎', 'Win', 'Alt', 'Space', 'Alt', 'RCtrl', '⮜', '⮟', '⮞',
    ];

    rusKeys.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['Backspace', '\\', 'Enter', 'RShift'].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      switch (key) {
        case 'Backspace':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.textContent = key;
          keyElement.addEventListener('click', () => {
            this.elements.textarea.innerHTML += key;
          });
          break;

        case 'Tab':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.textContent = key;
          keyElement.addEventListener('click', () => {
            this.elements.textarea.innerHTML += '     ';
          });
          break;

        case 'CapsLk':
          keyElement.classList.add('keyboard__key-caps-enter');
          keyElement.textContent = key;
          keyElement.addEventListener('click', () => {
            this.elements.textarea.innerHTML += key;
          });
          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key-caps-enter');
          keyElement.textContent = key;
          keyElement.addEventListener('click', () => {
            this.elements.textarea.innerHTML += key;
          });
          break;

        case 'LShift':
          keyElement.classList.add('keyboard__key-left-shift');
          keyElement.textContent = key;
          keyElement.addEventListener('click', () => {
            this.elements.textarea.innerHTML += key;
          });
          break;

        case 'LCtrl':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.textContent = key;
          keyElement.addEventListener('click', () => {
            this.elements.textarea.innerHTML += key;
          });
          break;

        case 'Space':
          keyElement.classList.add('keyboard__key-extra-wide');
          keyElement.addEventListener('click', () => {
            this.elements.textarea.innerHTML += ' ';
          });
          break;

        default:
          keyElement.textContent = key;
          keyElement.addEventListener('click', () => {
            this.elements.textarea.innerHTML += key;
          });
      }

      fragment.append(keyElement);
      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });
    return fragment;
  },
};

window.addEventListener('DOMContentLoaded', () => {
  keyboardLayout.init();
});