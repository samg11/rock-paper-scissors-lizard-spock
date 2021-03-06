interface winnerResults {
    userChoice: string;
    computerChoice: string;
    winner: string;
    loser: string;
    tie: boolean;
    winnerMove: string;
    loserMove: string;
}
declare const icons: any;
declare const rock: HTMLElement | null;
declare const paper: HTMLElement | null;
declare const scissors: HTMLElement | null;
declare const lizard: HTMLElement | null;
declare const spock: HTMLElement | null;
declare const computerChoiceDoc: HTMLElement | null;
declare const userChoiceDoc: HTMLElement | null;
declare const winnerDoc: HTMLElement | null;
declare const iconDict: HTMLElement[] | null[];
declare let username: string;
declare let rand: number;
declare let winner: string;
declare let loser: string;
declare let tie: boolean;
declare let winnerMove: string;
declare let loserMove: string;
declare let winnerInfo: string;
declare let computerChoiceInfo: string;
declare let userChoiceInfo: string;
declare let computerChoice: string;
declare let results: winnerResults;
declare const cap: (str: string) => string;
declare const getWinner: (userChoice: string, computerChoice: string) => winnerResults;
declare const chooseComputerMove: () => string;
declare const handleChoice: (id: string) => void;
