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
const iconDict: HTMLElement[] | null[] = [rock,paper,scissors,lizard,spock];
let username: string = "user";
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

// capitalize funciton
const cap = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const getWinner = (userChoice: string, computerChoice: string): winnerResults => {
    winner = "";
    tie = false;
    winnerMove = "";
    loserMove = "";

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
            winner = username;break;
        case "rockscissors":
            winner = username;break;
        case "lizardspock":
            winner = username;break;
        case "lizardpaper":
            winner = username;break;
        case "spockscissors":
            winner = username;break;
        case "spockrock":
            winner = username;break;
        case "scissorspaper":
            winner = username;break;
        case "scissorslizard":
            winner = username;break;
        case "paperspock":
            winner = username;break;
        case "paperrock":
            winner = username;
            break;
        default:
            winner = "computer";
    }

    if (winner == username) {
        loser = "computer";
        winnerMove = userChoice;
        loserMove = computerChoice;
    } else if (winner == "computer") {
        loser = username;
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

    if (results.tie) {
        winnerInfo = "Tie!";
    } else {
        winnerInfo = `${cap(results.winner)+' '} wins! ${'\n'+cap(results.winnerMove)+' '} beats ${cap(results.loserMove)}`;
    }

    userChoiceInfo =     `${cap(username)+' '} chose ${results.userChoice}`
    computerChoiceInfo = `The computer chose ${results.computerChoice}`;

    computerChoiceDoc.innerText = computerChoiceInfo;
    userChoiceDoc.innerText = userChoiceInfo;
    winnerDoc.innerText = winnerInfo;
}

for (let icon in iconDict) {
    icons[icon].addEventListener("click", (e: any) => {
        if (e.path[1].id == "") {
            handleChoice(e.path[0].id);
        } else {
            handleChoice(e.path[1].id);
        }
    });
}