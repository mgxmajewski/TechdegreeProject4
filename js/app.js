/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
       
       
const game = new Game();
const phrase = new Phrase();
const keyboard = document.querySelectorAll(".key");


for (let key of keyboard) {
    key.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);
        if (e.target.classList.contains("key")) {
            let keyPressedHTML = e.target;
            //keyPressedHTML.classList.toggle('btn__reset:active');
            return game.handleInteraction(keyPressedHTML);
        }
    })
}

window.addEventListener('keydown', (e) => {
    console.log(e.key);
    for (let key of keyboard) {
        if (key.innerText === e.key){
            return game.handleInteraction(key);
        }
    }
})

// for (let key of keyboard) {
//     key.addEventListener("mouseover", (e) => {
//         if (e.target.classList.contains("key")) {
//             let keyPressedHTML = e.target;
//             keyPressedHTML.classList.toggle('active');
//         }
//     })
// }
//
// for (let key of keyboard) {
//     key.addEventListener("mouseout", (e) => {
//         if (e.target.classList.contains("key")) {
//             let keyPressedHTML = e.target;
//             //keyPressedHTML.classList.toggle('btn__reset');
//             key.style = '';
//             key.className= 'key';
//         }
//     })
// }




// function handleInteraction(keyPressedHTML) {
//     keyPressedHTML.disabled = true;
//     keyPressedHTML.style.backgroundColor = 'grey';
//     keyPressedHTML.style.cursor = 'no-drop';
//     let keyPressedText = keyPressedHTML.innerText;
//     phrase.checkLetter(keyPressedText);
//     console.log(keyPressedText);
//     if (phrase.checkLetter(keyPressedText)) {
//         phrase.showMatchedLetter(keyPressedText);
//     } else {
//         game.removeLife();
//     }
// }

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

document.getElementById("btn__reset").addEventListener('click', () => game.gameReset());
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