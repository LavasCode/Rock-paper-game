alert('WELCOME USER!');
let score= JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

updateScore();

function playerClick(playerMove)
{
    const computerMove=randomMove();
    randomMove();
let result='';
if (playerMove==='rock')
{
    if (computerMove==='rock')
    {
        result='Tie.';
    }
    else if (computerMove==='paper')
    {
        result='Ahh you lose!';
    }
    else if (computerMove==='scissors')
    {
        result='Yay you win!';
    }
}
else if (playerMove==='paper')
{
    if (computerMove==='rock')
    {
        result='Yay you win!';
    }
    else if (computerMove==='paper')
    {
        result='Tie.';
    }
    else if (computerMove==='scissors')
    {
        result='Ahh you lose!';
    }
}
else if (playerMove==='scissors')
{
    if (computerMove==='rock')
    {
        result='Ahh you lose!';
    }
    else if (computerMove==='paper')
    {
        result='Yay you win!';
    }
    else if (computerMove==='scissors')
    {
        result='Tie.';
    }
}
if(result==='Yay you win!'){
score.wins+=1;
}
else if (result==='Ahh you lose!'){
    score.losses+=1;
}
else if(result==='Tie.'){
    score.ties+=1;
}


localStorage.setItem('score', JSON.stringify(score));
updateScore();

document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
}

function updateScore()
{
document.querySelector('.js-score').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function randomMove()
{
    let computerMove='';
 let randomNum=Math.random();
 if((randomNum>=0) && (randomNum<(1/3)))
 computerMove='rock';
 else if ((randomNum>=(1/3)) && (randomNum<2/3))
 computerMove='paper';
 else computerMove='scissors'; 
 return computerMove;
}
