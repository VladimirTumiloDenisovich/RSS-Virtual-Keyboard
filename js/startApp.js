const body = document.querySelector('body');
body.classList.add('body');
const bodyClass = document.querySelector('.body');

function startApp() {
  bodyClass.innerHTML = `
  <div class="keyboard-area">
  <header class="keyboard-area__header">
    <div class="header__language">
      En
  </div>
    <h2 class="header__name">RSS Virtual Keyboard</h2>
    <div class="header__info">
      <p class="info__text info__text_bottom-line">Keyboard created in Macos</p>
      <p class="info__text">Please use for change language<br>AltLeft + ControlLeft</p>
  </div>
  </header>
  <textarea class="keyboard-area__textarea textarea" id="textarea" rows="5" cols="50"></textarea>

  <div class="keyboard__container">
    <button class="keyboard__key_small key keyboard__key_raw-1 key_position-start">
        \`
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        1
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        2
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        3
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        4
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        5
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        6
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        7
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        8
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        9
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        0
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        -
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-1">
        =
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-1">
        Backspace
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-2">
        Tab
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        q
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        w
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        e
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        r
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        t
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        y
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        u
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        i
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        o
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        p
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        [
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-2">
        ]
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-2">
        Del
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-3">
      CapsLock
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        a
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        s
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        d
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        f
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        g
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        h
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        j
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        k
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        l
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        ;
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        '
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-3">
        \
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-3">
        Enter
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-4">
      ⇧ Shift
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        §
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        z
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        x
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        c
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        v
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        b
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        n
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        m
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        ,
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        .
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
        /
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-4">
      ↑
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-4">
      ⇧ Shift
    </button>
    
    <button class="keyboard__key_medium key keyboard__key_raw-5">
      Control
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-5">
      Option
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-5 key_position-cmn-l">
      Command
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-5 key_position-spc">
      Space
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-5 key_position-cmn-r">
      Command
    </button>

    <button class="keyboard__key_medium key keyboard__key_raw-5">
      Option
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-5">
      ←
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-5">
      ↓
    </button>

    <button class="keyboard__key_small key keyboard__key_raw-5 key_position-end">
      →
    </button>

  </div>
</div>
  `;
}

startApp();
