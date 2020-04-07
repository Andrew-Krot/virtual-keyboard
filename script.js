// Create layout
const keyboardLayout = {
  elements: {
    container: null,
    description: null,
    textarea: null,
    keyboard: null,
  },

  properties: {
    value: '',
  },

  init() {
    // Create Container
    this.elements.container = document.createElement('div');
    this.elements.container.className = 'container';
    document.body.append(this.elements.container);

    // Create Textarea
    this.elements.textarea = document.createElement('textarea');
    this.elements.textarea.className = 'textarea';
    this.elements.textarea.value = this.properties.value;
    this.elements.textarea.setAttribute('autofocus', '');
    this.elements.container.append(this.elements.textarea);

    // Create Keyboard
    this.elements.keyboard = document.createElement('div');
    this.elements.keyboard.className = 'keyboard';
    this.elements.container.append(this.elements.keyboard);

    // Create Description
    this.elements.description = document.createElement('p');
    this.elements.description.className = 'description';
    this.elements.container.append(this.elements.description);

    // Create Keys
    this.elements.keyboard.appendChild(this.createKeys());
  },


  createKeys() {
    const fragment = document.createDocumentFragment();
    const keys = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
      'CapsLk', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
      'LShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'RShift',
      'LCtrl', 'LAlt', 'Space', 'RAlt', 'RCtrl', '◄', '▼', '►',
    ];

    keys.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['Backspace', '\\', 'Enter', 'RShift'].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');
      keyElement.textContent = key;

      // Add EventListener onClick

      keyElement.addEventListener('click', () => {
        this.elements.textarea.value += key;
        keyboardLayout.elements.textarea.focus();
        document.querySelectorAll('.keyboard__key').forEach((element) => {
          element.classList.remove('active');
        });
      });

      switch (key) {
        case '`':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Backquote');
          break;

        case '1':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit1');
          break;

        case '2':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit2');
          break;

        case '3':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit3');
          break;

        case '4':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit4');
          break;

        case '5':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit5');
          break;

        case '6':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit6');
          break;

        case '7':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit7');
          break;

        case '8':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit8');
          break;

        case '9':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit9');
          break;

        case '0':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Digit0');
          break;

        case '-':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Minus');
          break;

        case '=':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Equal');
          break;

        case 'Backspace':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.setAttribute('data', key);
          break;

        case 'Tab':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.setAttribute('data', key);
          break;

        case 'q':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyQ');
          break;

        case 'w':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyW');
          break;

        case 'e':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyE');
          break;

        case 'r':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyR');
          break;

        case 't':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyT');
          break;

        case 'y':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyY');
          break;

        case 'u':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyU');
          break;

        case 'i':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyI');
          break;

        case 'o':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyO');
          break;

        case 'p':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyP');
          break;

        case '[':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'BracketLeft');
          break;

        case ']':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'BracketRight');
          break;

        case '\\':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Backslash');
          break;

        case 'CapsLk':
          keyElement.classList.add('keyboard__key-caps-enter');
          keyElement.setAttribute('data', 'CapsLock');
          break;

        case 'a':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyA');
          break;

        case 's':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyS');
          break;

        case 'd':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyD');
          break;

        case 'f':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyF');
          break;

        case 'g':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyG');
          break;

        case 'h':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyH');
          break;

        case 'j':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyJ');
          break;

        case 'k':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyK');
          break;

        case 'l':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyL');
          break;

        case ';':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Semicolon');
          break;

        case "'":
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Quote');
          break;

        case 'Enter':
          keyElement.classList.add('keyboard__key-caps-enter');
          keyElement.setAttribute('data', 'Enter');
          break;

        case 'LShift':
          keyElement.classList.add('keyboard__key-left-shift');
          keyElement.setAttribute('data', 'ShiftLeft');
          break;

        case 'z':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyZ');
          break;

        case 'x':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyX');
          break;

        case 'c':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyC');
          break;

        case 'v':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyV');
          break;

        case 'b':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyB');
          break;

        case 'n':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyN');
          break;

        case 'm':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'KeyM');
          break;

        case ',':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Comma');
          break;

        case '.':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Period');
          break;

        case '/':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'Slash');
          break;

        case 'RShift':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'ShiftRight');
          break;

        case 'LCtrl':
          keyElement.classList.add('keyboard__key-wide');
          keyElement.setAttribute('data', 'ControlLeft');
          break;

        case 'LAlt':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'AltLeft');
          break;

        case 'RCtrl':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'ControlRight');
          break;

        case 'RAlt':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'AltRight');
          break;

        case 'Space':
          keyElement.classList.add('keyboard__key-extra-wide');
          keyElement.setAttribute('data', 'Space');
          break;

        case '▲':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'ArrowUp');
          break;

        case '◄':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'ArrowLeft');
          break;

        case '▼':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'ArrowDown');
          break;

        case '►':
          keyElement.classList.add('keyboard__key');
          keyElement.setAttribute('data', 'ArrowRight');
          break;

        default:
          keyElement.setAttribute('data', key);
      }

      fragment.append(keyElement);
      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });
    return fragment;
  },
};


// keydown
document.addEventListener('keydown', (event) => {
  keyboardLayout.elements.textarea.focus();
  keyboardLayout.properties.value += event.key;
  document.querySelectorAll('.keyboard__key').forEach((element) => {
    element.classList.remove('active');
  });
  document.querySelector(`.keyboard__key[data = "${event.code}"]`).classList.add('active');
});

// keyup
document.addEventListener('keyup', () => {
  document.querySelectorAll('.keyboard__key').forEach((element) => {
    element.classList.remove('active');
  });
});


window.addEventListener('DOMContentLoaded', () => {
  keyboardLayout.init();
});
