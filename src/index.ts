interface winnerResults {
    userChoice: string,
    computerChoice: string,
    winner: string,
    loser: string,
    tie: boolean,
    winnerMove: string,
    loserMove: string
}

const icons: any = document.querySelectorAll(".icon");
const rock: HTMLElement | null = document.getElementById('rock')!;
const paper: HTMLElement | null = document.getElementById('paper')!;
const scissors: HTMLElement | null = document.getElementById('scissors')!;
const lizard: HTMLElement | null = document.getElementById('lizard')!;
const spock: HTMLElement | null = document.getElementById('spock')!;
const computerChoiceDoc: HTMLElement | null = document.getElementById('computerChoice')!;
const userChoiceDoc: HTMLElement | null = document.getElementById('userChoice')!;
const winnerDoc: HTMLElement | null = document.getElementById('winner')!;
const iconDict: HTMLElement[] | null[] = [rock,paper,scissors,lizard,spock]
let rand: number;
let winner: string;
let loser: string;
let tie: boolean;
let winnerMove: string;
let loserMove: string;
let winnerInfo: string;
let computerChoiceInfo: string;
let userChoiceInfo: string;
let computerChoice: string;
let results: winnerResults;

const getWinner = (userChoice: string, computerChoice: string): winnerResults => {
    winner = "";
    tie = false;
    winnerMove = "";
    loserMove = "";

    console.log(userChoice + computerChoice);

    switch (userChoice + computerChoice) {
        // ties
        case "rockrock":
            winner = "tie";break;
        case "paperpaper":
            winner = "tie";break;
        case "scissorsscissors":
            winner = "tie";break;
        case "lizardlizard":
            winner = "tie";
            break;
        case "spockspock":
            winner = "tie";
            break;

        // user wins
        case "rocklizard":
            winner = "user";break;
        case "rockscissors":
            winner = "user";break;
        case "lizardspock":
            winner = "user";break;
        case "lizardpaper":
            winner = "user";break;
        case "spockscissors":
            winner = "user";break;
        case "spockrock":
            winner = "user";break;
        case "scissorspaper":
            winner = "user";break;
        case "scissorslizard":
            winner = "user";break;
        case "paperspock":
            winner = "user";break;
        case "paperrock":
            winner = "user";
            break;
        default:
            winner = "computer";
    }

    console.log(winner);

    if (winner == "user") {
        loser = "computer";
        winnerMove = userChoice;
        loserMove = computerChoice;
    } else if (winner == "computer") {
        loser = "user";
        winnerMove = computerChoice;
        loserMove = userChoice;
    } else if (winner == "tie") {
        loser = "tie";
        tie = true;
    }

    return {userChoice, computerChoice, winner, loser, tie, winnerMove, loserMove}
}

const chooseComputerMove = (): string => {
    rand = Math.floor(Math.random() * 5);

    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        case 3:
            return "lizard";
        case 4:
            return "spock";
    }
    return "error";
}

const handleChoice = (id: string) => {
    computerChoice = chooseComputerMove();
    results = getWinner(id, computerChoice);
    console.log(results);

    if (results.tie) {
        winnerInfo = "It was a tie!";
    } else {
        winnerInfo = `${results.winner} wins! ${results.winnerMove} beats ${results.loserMove}`;
    }

    userChoiceInfo =     `You chose ${results.userChoice}`
    computerChoiceInfo = `The computer chose ${results.computerChoice}`;

    computerChoiceDoc.innerText = computerChoiceInfo;
    userChoiceDoc.innerText = userChoiceInfo;
    winnerDoc.innerText = winnerInfo;
}

for (let icon in iconDict) {
    console.log(icon);
    console.log(icons[icon]);
    icons[icon].addEventListener("click", (e: any) => {
        handleChoice(e.path[1].id);
        console.log(e.path);
    },false);
}