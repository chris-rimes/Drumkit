var buttons = document.querySelectorAll('.drum');

//Code for mouseclicks
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    var buttoninnerHTML = this.innerHTML;

    makeSound(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
  });
}

//Code for keypress
document.addEventListener('keydown', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// function to create and play sounds
function makeSound(key) {
  switch (key) {
    case 'a':
      var audio = new Audio('sounds/808s/Uzi-F.wav');
      audio.play();
      break;

    case 's':
      var audio = new Audio('sounds/808s/Uzi-C.wav');
      audio.play();
      break;

    case 'd':
      var audio = new Audio('sounds/808s/Uzi-D.wav');
      audio.play();
      break;

    case 'f':
      var audio = new Audio('sounds/808s/Uzi-E.wav');
      audio.play();
      break;

    case 'g':
      var audio = new Audio('sounds/whistle.wav');
      audio.play();
      break;

    case 'h':
      var audio = new Audio('sounds/Claps/Clap.wav');
      audio.play();
      break;

    case 'j':
      var audio = new Audio('sounds/Claps/Cymatics - Uzi Clap 1.wav');
      audio.play();
      break;

    case 'k':
      var audio = new Audio('sounds/Hey.wav');
      audio.play();
      break;

    case 'l':
      var audio = new Audio('sounds/Open Hihats/Uzi6.wav');
      audio.play();
      break;

    default:
      console.log(event.key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
