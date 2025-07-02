function playGame(userChoice) {
  const choices = ['snake', 'water', 'gun'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `Your Choice: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer's Choice: ${computerChoice}`;

  let result = '';
  if (userChoice === computerChoice) {
    result = "It's a Tie!";
  } else if (
    (userChoice === 'snake' && computerChoice === 'water') ||
    (userChoice === 'water' && computerChoice === 'gun') ||
    (userChoice === 'gun' && computerChoice === 'snake')
  ) {
    result = 'You Win!';
  } else {
    result = 'You Lose!';
  }

  document.getElementById('game-result').textContent = `Result: ${result}`;
}
