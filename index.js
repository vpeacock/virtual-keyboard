const BODY = document.querySelector('body');
const pageContent = `  <header class="header section ">
<div class="container header__container">
    <h1 class="main-title">Virtual keyboard</h1>
    <p class="header__text">Данная клавиатура создана в операционной системе <span class="info">Windows</span></p>
    <p class="header__text">Для переключения языка используйте сочетание клавиш <span class="info">Ctrl + Alt</span></p>
    <p class="header__text">Текущий язык раскладки клавиатуры: <span class="current-lang"></span></p>
</div>
</header>

<main class="main section">
<div class="container main__container">
    <div class="keyboard-input__container">
        <textarea name="field-text" placeholder="Enter some text" class="keyboard-input" cols="70"
            rows="5" autofocus></textarea>
    </div>
</div>
</main>

<footer class="footer section">
<div class="container footer__container">
    <div class="contacts__container">
        <ul class="contacts">
            <li class="contacts__item"><a href="https://rs.school/" class="contacts__link" target="_blank">
                    <img class="contacts__img contacts__img_rs" src="./assets/svg/rs_school.svg" width="100"
                        height="100" alt="rs school logo"></a>
            </li>
            <li class="contacts__item contacts__item_year">
                <div class="icons icons_year">2022</div>
            </li>
            <li class="contacts__item">
                <a href="https://github.com/vpeacock" class="contacts__link" target="_blank">
                    <div class="icons">
                        <img class="contacts__img contacts__img_gh" src="./assets/images/githab_logo.png"
                            width="100" height="100" alt="github logo">
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>
</footer>`;

BODY.insertAdjacentHTML('beforeend', pageContent);
const langText = document.querySelector('.current-lang');

const keyboardInput = document.querySelector('.keyboard-input');

const keysIcons = {
  Tab: 'keyboard_tab',
  Backspace: 'keyboard_backspace',
  ' ': 'space_bar',
  CapsLock: 'keyboard_capslock',
  ArrowUp: 'north',
  ArrowDown: 'south',
  ArrowLeft: 'west',
  ArrowRight: 'east',
};

const keysWide = [
  'Tab',
  'Backspace',
  'CapsLock',
  'Enter',
  'Shift',
  'Control',
  'Alt',
  'Delete',
];

const keyExtraWide = [' '];
const keyActivatable = ['Shift', 'CapsLock'];
const keysSpecial = ['Shift', 'CapsLock'];

const en = {
  keyLayout: [
    [
      '`',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
    ],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    [
      'CapsLock',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      ';',
      "'",
      'Enter',
    ],
    [
      'Shift',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '/',
      'Shift',
      'Delete',
    ],
    [
      'Control',
      'Alt',
      ' ',
      'Control',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ],
  ],

  keyLayoutShift: [
    [
      '~',
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '+',
      'Backspace',
    ],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
    [
      'CapsLock',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      ':',
      '"',
      'Enter',
    ],
    [
      'Shift',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      '<',
      '>',
      '?',
      'Shift',
      'Delete',
    ],
    [
      'Control',
      'Alt',
      ' ',
      'Control',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ],
  ],

  keyLayoutCaps: [
    [
      '`',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
    ],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    [
      'CapsLock',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      ';',
      "'",
      'Enter',
    ],
    [
      'Shift',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      ',',
      '.',
      '/',
      'Shift',
      'Delete',
    ],
    [
      'Control',
      'Alt',
      ' ',
      'Control',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ],
  ],
};

const ru = {
  keyLayout: [
    [
      'ё',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
    ],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
    [
      'CapsLock',
      'ф',
      'ы',
      'в',
      'а',
      'п',
      'р',
      'о',
      'л',
      'д',
      'ж',
      'э',
      'Enter',
    ],
    [
      'Shift',
      'я',
      'ч',
      'с',
      'м',
      'и',
      'т',
      'ь',
      'б',
      'ю',
      '.',
      'Shift',
      'Delete',
    ],
    [
      'Control',
      'Alt',
      ' ',
      'Control',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ],
  ],

  keyLayoutShift: [
    [
      'Ё',
      '!',
      '"',
      '№',
      ';',
      '%',
      ':',
      '?',
      '*',
      '(',
      ')',
      '_',
      '+',
      'Backspace',
    ],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'],
    [
      'CapsLock',
      'Ф',
      'Ы',
      'В',
      'А',
      'П',
      'Р',
      'О',
      'Л',
      'Д',
      'Ж',
      'Э',
      'Enter',
    ],
    [
      'Shift',
      'Я',
      'Ч',
      'С',
      'М',
      'И',
      'Т',
      'Ь',
      'Б',
      'Ю',
      ',',
      'Shift',
      'Delete',
    ],
    [
      'Control',
      'Alt',
      ' ',
      'Control',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ],
  ],

  keyLayoutCaps: [
    [
      'Ё',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'Backspace',
    ],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
    [
      'CapsLock',
      'Ф',
      'Ы',
      'В',
      'А',
      'П',
      'Р',
      'О',
      'Л',
      'Д',
      'Ж',
      'Э',
      'Enter',
    ],
    [
      'Shift',
      'Я',
      'Ч',
      'С',
      'М',
      'И',
      'Т',
      'Ь',
      'Б',
      'Ю',
      '.',
      'Shift',
      'Delete',
    ],
    [
      'Control',
      'Alt',
      ' ',
      'Control',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
    ],
  ],
};

let flagCrlAlt = false;
let pressed = [];
const langLocal = localStorage.getItem('lang');

const KEYBOARD = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
    langKeys: '',
    keyboardLayout: '',
  },

  properties: {
    value: '',
    capsLock: false,
    shift: false,
    lang: 'en',
  },

  init() {
    if (langLocal) {
      this.properties.lang = langLocal;
    }
    langText.textContent = this.properties.lang;
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.main.appendChild(this.elements.keysContainer);
    document.querySelector('.main__container').appendChild(this.elements.main);
  },

  createKeys() {
    const templateKeyboard = document.createDocumentFragment();

    const createIconHTML = (iconName) => `<i class="material-icons">${iconName}</i>`;

    this.elements.keys = [];

    if (this.properties.lang === 'en') {
      this.elements.langKeys = en;
    } else {
      this.elements.langKeys = ru;
    }

    if (this.properties.capsLock) {
      this.elements.keyboardLayout = this.elements.langKeys.keyLayoutCaps;
    } else if (this.properties.shift) {
      this.elements.keyboardLayout = this.elements.langKeys.keyLayoutShift;
    } else {
      this.elements.keyboardLayout = this.elements.langKeys.keyLayout;
    }

    this.elements.keyboardLayout.forEach((layout) => {
      layout.forEach((key) => {
        this.elements.keys.push(key);
        const keyElement = document.createElement('button');
        keyElement.setAttribute('type', 'button');
        keyElement.classList.add('keyboard__key');

        if (keysWide.includes(key)) {
          keyElement.classList.add('keyboard__key_wide');
        } else if (keyExtraWide.includes(key)) {
          keyElement.classList.add('keyboard__key_extra-wide');
        }

        if (keyActivatable.includes(key)) {
          keyElement.classList.add('keyboard__key_activatable');
        }

        if (key in keysIcons) {
          keyElement.innerHTML = createIconHTML(keysIcons[key]);
        } else {
          keyElement.textContent = key;
          if (key === 'Control') {
            keyElement.textContent = 'Ctrl';
          }
        }

        keyElement.addEventListener('click', () => {
          keyboardInput.focus();
          if (pressed.length > 0 && pressed.length === 0 && key !== 'Control' && key !== 'Alt') {
            pressed = [];
          } else if (key === 'Control' || key === 'Alt') {
            if (pressed.length === 1) {
              pressed = [];

              this.changeLanguage();
            } else {
              pressed.push(key);
            }
          } else {
            this.action(key);
          }
        });

        templateKeyboard.appendChild(keyElement);
      });
      templateKeyboard.appendChild(document.createElement('br'));
    });

    return templateKeyboard;
  },

  action(key) {
    if (key === 'Backspace') {
      this.properties.value = this.properties.value.slice(0, keyboardInput.selectionEnd - 1);
      keyboardInput.value = this.properties.value;
    } else if (key === 'Delete') {
      this.properties.value = Array.from(this.properties.value);
      this.properties.value.splice(keyboardInput.selectionStart, 1);
      this.properties.value = this.properties.value.join('');
      keyboardInput.value = this.properties.value;
    } else if (key === 'Enter') {
      this.properties.value += '\n';
      keyboardInput.value = this.properties.value;
    } else if (key === ' ') {
      this.properties.value += key;
      keyboardInput.value = this.properties.value;
    } else if (key === 'Tab') {
      this.properties.value = Array.from(this.properties.value);
      this.properties.value.splice(keyboardInput.selectionStart, 0, '    ');
      this.properties.value = this.properties.value.join('');
      keyboardInput.value = this.properties.value;
    } else if (key === 'ArrowRight') {
      keyboardInput.selectionEnd += 1;
      keyboardInput.selectionStart = keyboardInput.selectionEnd;
    } else if (key === 'ArrowLeft') {
      keyboardInput.selectionEnd -= 1;
      keyboardInput.selectionStart = keyboardInput.selectionEnd;
    } else if (key === 'ArrowUp') {
      keyboardInput.selectionStart = 0;
      keyboardInput.selectionEnd = 0;
    } else if (key === 'ArrowDown') {
      keyboardInput.selectionStart += keyboardInput.value.length;
      keyboardInput.selectionEnd = keyboardInput.selectionStart;
    } else if (key === 'CapsLock') {
      this.toggleCapsLock();
    } else if (key === 'Shift') {
      this.toggleShift();
    } else {
      this.properties.value += key;
      keyboardInput.value = this.properties.value;
    }
  },

  toggleCapsLock() {
    if (this.properties.shift) {
      this.toggleShift();
    }
    document.querySelectorAll('.keyboard__key').forEach((button) => {
      if (button.firstChild.textContent === keysIcons.CapsLock) {
        if (!button.classList.contains('keyboard__key_active')) {
          this.properties.capsLock = true;
          this.elements.keysContainer.innerHTML = '';
          this.elements.keysContainer.appendChild(this.createKeys());
          const keyBoardKeys = document.querySelectorAll('.keyboard__key');
          keyBoardKeys.forEach((key) => {
            if (key.firstChild.textContent === keysIcons.CapsLock) {
              key.classList.add('keyboard__key_active');
            }
          });
        } else {
          this.properties.capsLock = false;
          this.elements.keysContainer.innerHTML = '';
          this.elements.keysContainer.appendChild(this.createKeys());
          const keyBoardKeys = document.querySelectorAll('.keyboard__key');
          keyBoardKeys.forEach((key) => {
            if (key.firstChild.textContent === keysIcons.CapsLock) {
              key.classList.remove('keyboard__key_active');
            }
          });
        }
      }
    });
  },

  toggleShift() {
    if (this.properties.capsLock) {
      this.toggleCapsLock();
    }
    document.querySelectorAll('.keyboard__key').forEach((button) => {
      if (button.textContent === 'Shift') {
        if (!button.classList.contains('keyboard__key_active')) {
          this.properties.shift = true;
          this.elements.keysContainer.innerHTML = '';
          this.elements.keysContainer.appendChild(this.createKeys());
        } else {
          this.properties.shift = false;
          this.elements.keysContainer.innerHTML = '';
          this.elements.keysContainer.appendChild(this.createKeys());
        }
      }
    });

    document.querySelectorAll('.keyboard__key').forEach((button) => {
      if (button.textContent === 'Shift') {
        if (this.properties.shift) {
          button.classList.add('keyboard__key_active');
        } else {
          button.classList.remove('keyboard__key_active');
        }
      }
    });
  },

  changeLanguage() {
    if (this.properties.capsLock) {
      this.toggleCapsLock();
    }

    if (this.properties.shift) {
      this.toggleShift();
    }

    if (this.properties.lang === 'en') {
      this.properties.lang = 'ru';
    } else {
      this.properties.lang = 'en';
    }
    localStorage.setItem('lang', this.properties.lang);
    langText.textContent = this.properties.lang;
    this.elements.keysContainer.innerHTML = '';
    this.elements.keysContainer.appendChild(this.createKeys());
  },
};

window.addEventListener('DOMContentLoaded', () => {
  KEYBOARD.init();
});

let keyPressed = null;

document.addEventListener('keydown', (e) => {
  if (e.key !== 'CapsLock') {
    keyPressed = null;

    if (!KEYBOARD.elements.keys.includes(e.key)) {
      let arraysObject = Object.values(en);
      let indexElem = null;
      let arrTmp = null;

      arraysObject.forEach((arr) => {
        arrTmp = [].concat(...arr);
        if (arrTmp.includes(e.key)) {
          indexElem = arrTmp.indexOf(e.key);
          keyPressed = KEYBOARD.elements.keys[indexElem];
        }
      });

      if (!keyPressed) {
        arraysObject = Object.values(ru);
        arraysObject.forEach((arr) => {
          arrTmp = [].concat(...arr);
          if (arrTmp.includes(e.key)) {
            indexElem = arrTmp.indexOf(e.key);
            keyPressed = KEYBOARD.elements.keys[indexElem];
          }
        });
      }
    } else {
      keyPressed = e.key;
    }

    if (KEYBOARD.elements.keys.includes(keyPressed)) {
      if (!keysSpecial.includes(keyPressed)) {
        const keyBoardKeys = document.querySelectorAll('.keyboard__key');

        keyBoardKeys.forEach((key) => {
          if (key.textContent === keyPressed || (keyPressed === 'Control' && key.textContent === 'Ctrl')) {
            key.classList.add('keyboard__key_active');
          }
        });
        if (keyPressed in keysIcons) {
          keyBoardKeys.forEach((key) => {
            if (key.firstChild.textContent === keysIcons[keyPressed]) {
              key.classList.add('keyboard__key_active');
            }
          });
        }

        if (e.altKey && e.ctrlKey && !flagCrlAlt && !e.shiftKey) {
          flagCrlAlt = true;
          KEYBOARD.changeLanguage();
        } else if (keyPressed !== 'Control' && keyPressed !== 'Alt') {
          KEYBOARD.action(keyPressed);
        }
      }
    }
  }
  e.preventDefault();
});

document.addEventListener('keyup', (e) => {
  if (e.key !== 'CapsLock') {
    if (KEYBOARD.elements.keys.includes(keyPressed)) {
      const keyBoardKeys = document.querySelectorAll('.keyboard__key');

      flagCrlAlt = false;

      if (keyPressed === 'Shift') {
        KEYBOARD.action(keyPressed);
      }

      keyBoardKeys.forEach((key) => {
        key.classList.remove('keyboard__key_active');
        if (key.textContent === 'Shift' && KEYBOARD.properties.shift) {
          key.classList.add('keyboard__key_active');
        } else if (
          key.firstChild.textContent === keysIcons.CapsLock && KEYBOARD.properties.capsLock
        ) {
          key.classList.add('keyboard__key_active');
        }
      });
    }
  } else if (e.key === 'CapsLock' && !e.shiftKey) {
    KEYBOARD.toggleCapsLock();
  }
  e.preventDefault();
});
