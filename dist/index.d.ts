interface winnerResults {
    userChoice: string;
    computerChoice: string;
    winner: string;
}
declare const icons: any;
declare const rock: HTMLElement | null;
declare const paper: HTMLElement | null;
declare const scissors: HTMLElement | null;
declare const lizard: HTMLElement | null;
declare const spock: HTMLElement | null;
declare const computerChoiceDoc: HTMLElement | null;
declare const winnerDoc: HTMLElement | null;
declare const iconDict: any;
declare let rand: number;
declare let winner: string | null;
declare let computerChoice: string;
declare let results: winnerResults;
declare const getWinner: (userChoice: string, computerChoice: string) => winnerResults;
declare const chooseComputerMove: () => string;
declare const handleChoice: (id: string) => void;