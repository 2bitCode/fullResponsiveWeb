var computer_score = 0;
var user_score = 0;
const user_score_span = document.querySelector(".user-score");
const computer_score_span = document.querySelector(".computer-score");
const game_status = document.querySelector(".game-status");
const rock_img =  document.getElementById('r');
const paper_img =  document.getElementById('p');
const scissor_img =  document.getElementById('s');
const win_status = document.getElementById('win_status');

rock_img.addEventListener('click', function()
{
  game('r');
}
);

paper_img.addEventListener('click', function()
{
  game('p');
}
);

scissor_img.addEventListener('click', function()
{
  game('s');
}
);

function game(player_choice)
{
  var computer_choice = generateComputerChoice();
  var choice = player_choice + computer_choice;
  switch (choice)
  {
    case 'rp':
    case 'ps':
    case 'sr':
      computer_wins(choice);
      break;
    case 'pr':
    case 'sp':
    case 'rs':
      player_wins(choice);
      break;
  }
}

function generateComputerChoice()
{
  var random = Math.floor(Math.random() * 3);
  if(random==0)
    return 'r';
  else if (random == 1)
    return 'p';
  else
    return 's';
}

function whoBeatsWhom(choice)
{
  switch (choice)
  {
    case 'rp':
    case 'pr':
      return "Paper beats Rock. Paper wins.🔥"
      break;
    case 'ps':
    case 'sp':
      return "Scissor beats Paper. Scissor wins.🔥"
      break;
    case 'sr':
    case 'rs':
      return "Rock beats Scissor. Rock wins.🔥"
      break;
    default:

  }
}

function computer_wins(choice)
{
  //chnages after computer wins
  console.log(choice);
  console.log("Computer wins");
  computer_score += 1;
  game_status.innerHTML = whoBeatsWhom(choice);
  win_status.innerHTML = "You lost. 🅾";
  computer_score_span.innerHTML = computer_score;
}

function player_wins(choice)
{
  //chnages after player wins
  console.log(choice);
  console.log("Player wins");
  user_score += 1;
  game_status.innerHTML = whoBeatsWhom(choice);
  win_status.innerHTML = "You won. 🤗";
  user_score_span.innerHTML = user_score;
}
