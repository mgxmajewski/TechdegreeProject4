/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
       
       

const charDiv = document.getElementById("phrase");
const charUl = charDiv.firstElementChild;
console.log(charUl);

// console.log(charUl);
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
    };
    const game = new Game();
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    logPhrase(game.getRandomPhrase());
    
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();

document.getElementById("btn__reset").addEventListener('click', () => game.startGame());