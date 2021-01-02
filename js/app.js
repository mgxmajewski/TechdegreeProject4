/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
       
       
const game = new Game();
const phrase = new Phrase();
//const charDiv = document.getElementById("phrase");
//const charUl = charDiv.firstElementChild;


// console.log(charUl);
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     // const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
    
// // const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

document.getElementById("btn__reset").addEventListener('click', () => game.startGame());
// const letters = new Phrase ();
// phrase.checkLetter();

//Test  1
// const phrase = new Phrase("Life is like a box of chocolates")
//console.log(`${phrase.phrase}`);


//Test 2
game.phrase.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
