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

//Test 1 - checks constructor correctness
// const phrase = new Phrase("Life is like a box of chocolates")
//console.log(`${phrase.phrase}`);


//Test 2 - check existence of array with phrases
// game.phrase.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//Test 3 - check if getRandomPhrase() generates random phrase
// const logPhrase = (phrase) =>{
//     console.log(`Phrase: ${phrase.phrase}`);
// }
//
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

//Test 4 - check if addPhraseToDisplay() appends letters as "li's" into phrase "ul"
// game.startGame();
// console.log(document.getElementById('phrase').innerHTML);

//Test 5 - check if value of game.activePhrase.phrase is updated after startGame()
// game.startGame();
// console.log(`Active Phrase: ${game.activePhrase.phrase}`);
