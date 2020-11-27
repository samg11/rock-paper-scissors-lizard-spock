"use strict";const icons=document.querySelectorAll(".icon");const rock=document.getElementById('rock');const paper=document.getElementById('paper');const scissors=document.getElementById('scissors');const lizard=document.getElementById('lizard');const spock=document.getElementById('spock');const computerChoiceDoc=document.getElementById('computerChoice');const winnerDoc=document.getElementById('winner');const iconDict={rock,paper,scissors,lizard,spock};let rand;let winner;let loser;let tie;let winnerMove;let loserMove;let winnerInfo;let computerChoiceInfo;let computerChoice;let results;const getWinner=(userChoice,computerChoice)=>{winner=null;tie=false;console.log(userChoice+computerChoice);switch(userChoice+computerChoice){case"rockrock":winner="tie";break;case"paperpaper":winner="tie";break;case"scissorsscissors":winner="tie";break;case"lizardlizard":winner="tie";break;case"spockspock":winner="tie";break;case"rocklizard":winner="user";break;case"rockscissors":winner="user";break;case"lizardspock":winner="user";break;case"lizardpaper":winner="user";break;case"spockscissors":winner="user";break;case"spockrock":winner="user";break;case"scissorspaper":winner="user";break;case"scissorslizard":winner="user";break;case"paperspock":winner="user";break;case"paperrock":winner="user";break;default:winner="computer";}
if(winner=="user"){loser="computer";winnerMove=userChoice;loserMove=computerChoice;}
else if(winner=="computer"){loser="user";winnerMove=userChoice;loserMove=computerChoice;}
else{loser="tie";tie=true;winnerMove=null;loserMove=null;}
return{userChoice,computerChoice,winner,loser,tie,winnerMove,loserMove};};const chooseComputerMove=()=>{rand=Math.floor(Math.random()*5);switch(rand){case 0:return"rock";case 1:return"paper";case 2:return"scissors";case 3:return"lizard";case 4:return"spock";}
return"error";};const handleChoice=(id)=>{computerChoice=chooseComputerMove();results=getWinner(id,computerChoice);console.log(results);if(results.tie){winnerInfo="It was a tie!";}
else{winnerInfo=`${results.winner}wins!${results.winnerMove}beats ${results.loserMove}`;}
computerChoiceInfo=`The computer chose ${results.computerChoice}`;computerChoiceDoc.innerText=computerChoiceInfo;winnerDoc.innerText=winnerInfo;};for(let icon in icons){icons[icon].addEventListener("click",(e)=>{handleChoice(e.path[1].id);},false);}