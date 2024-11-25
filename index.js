let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let newGameButton = document.getElementById('ng-btn');

let homeResult = 0;
let guestResult = 0;

function updateScore(event) {
  const button = event.target;
  const team = button.getAttribute('data-team');
  const points = parseInt(button.getAttribute('data-points'));

  if (team == 'home') {
    homeResult += points;
    homeScore.textContent = homeResult;
  } else if (team == 'guest') {
    guestResult += points;
    guestScore.textContent = guestResult;
  }
}

const scoreButtons = document.querySelectorAll('[data-team]');
scoreButtons.forEach((button) => {
  button.addEventListener('click', updateScore);
});

newGameButton.addEventListener('click', function () {
  homeResult = 0;
  guestResult = 0;
  guestScore.textContent = guestResult;
  homeScore.textContent = homeResult;
});
