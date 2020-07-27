var buttons = document.querySelectorAll('.drum');
var isPlaying = false;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    var buttoninnerHTML = this.innerHTML;

    makeSound(buttoninnerHTML);
  });
}

document.addEventListener('keydown', function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'a':
      var audio = new Audio('sounds/808s/Uzi-F.wav');
      audio.play();
      break;

    case 's':
      var audio = new Audio('sounds/808s/Uzi-C.wav');
      audio.volume = 0.9;
      audio.play();
      break;

    case 'd':
      var audio = new Audio('sounds/808s/Uzi-D.wav');
      audio.play();
      audio.volume = 0.9;
      break;

    case 'f':
      var audio = new Audio('sounds/808s/Uzi-E.wav');
      audio.pause;
      audio.play();
      audio.volume = 0.9;
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
