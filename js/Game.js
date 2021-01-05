/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

     /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

     createPhrases() {
         const randomPhrase = [
             new Phrase('team treehouse tech degree'),
             new Phrase('javascript is cool'),
             new Phrase('coding is fun'),
             new Phrase('object oriented programming')
         ];
         return randomPhrase;
     }

     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()* this.phrases.length)]
     }

     startGame() {
         const overlayDiv = document.getElementById(`overlay`);
         overlayDiv.style.display = 'none';
         const randomPhrase = game.getRandomPhrase();
         const phrase = new Phrase(randomPhrase.phrase);
         this.activePhrase = phrase.phrase;
         phrase.addPhraseToDisplay();
         console.log(this.activePhrase);
         //console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
     }

     handleInteraction(keyPressedHTML) {
         keyPressedHTML.disabled = true;
         // keyPressedHTML.style.backgroundColor = 'grey';
         keyPressedHTML.style.cursor = 'no-drop';
         let keyPressedText = keyPressedHTML.innerText;
         phrase.checkLetter(keyPressedText);
         console.log(keyPressedText);
         if (phrase.checkLetter(keyPressedText)) {
             keyPressedHTML.style.backgroundColor = '#a9f9c1';
             phrase.showMatchedLetter(keyPressedText);
         } else if (!phrase.checkLetter(keyPressedText)){
             keyPressedHTML.style.backgroundColor = '#f9a9a9';
             game.removeLife();
         }
         this.checkForWin();
     }

     /**
      * Checks for winning move
      * @return {void} True if game has been won, false if game wasn't
      won
      */
     checkForWin() {
         let phrase = this.activePhrase;
         let phraseToCompare = phrase.split(' ').join('');
         let charsGuessed = document.getElementsByClassName('show');
         console.log(phraseToCompare.length);
         console.log(phraseToCompare);
         console.log(charsGuessed.length);
         if (phraseToCompare.length === charsGuessed.length) {
             console.log('won');
             this.gameOver(true);
         }
         console.log('checked for win');
     };

     /**
      * Increases the value of the missed property
      * Removes a life from the scoreboard
      * Checks if player has remaining lives and ends game if player is out
      */
     removeLife() {
         let livesMissedGameOver = 5;
         let missedGuesses = this.missed;
         let usersLives = document.getElementsByClassName('tries');
         usersLives.item(missedGuesses).firstChild.src = "images/lostHeart.png";
         console.log(this.missed);
         console.log(usersLives);
         this.missed++;
         if (this.missed === livesMissedGameOver) {
             this.gameOver(false);
         }
     };

     /**
      * Displays game over message
      * @param {boolean} gameWon - Whether or not the user won the game
      */
     gameOver(gameWon) {
         const overlayDiv = document.getElementById(`overlay`);
         const gameOverMessage = document.getElementById('game-over-message');
         overlayDiv.style.display = '';
         overlayDiv.classList.remove('start');

         if (gameWon === true) {
             overlayDiv.classList.add('win');
             gameOverMessage.innerText = 'WIN';
         } else {
             overlayDiv.classList.add('lose');
             gameOverMessage.innerText = 'LOOSE';
         }
     };

     keyboardReset() {
         let keys = document.getElementsByClassName("key");
         console.log(keys);
         for (let i = 0; i < keyboard.length; i++) {
             console.log(keys[i]);
             let key = keys[i];
             key.innerText = 'z';

     }
 }

     gameBoardReset() {
         let phraseToReset = document.getElementById("phrase");
         let usersLives = document.getElementsByClassName('tries');
         for (let i =0; i < usersLives.length; i++) {
             usersLives.item(i).firstChild.src = "images/liveHeart.png";
         }
         phraseToReset.innerHTML = "";
         this.activePhrase = null;
         this.missed = 0;




         // const phraseChars = game.activePhrase;
         // for(let i = 0; i < phraseChars.length; i++){
         //     let phraseChar = phraseChars[i];
         //     //let liClassList = charLi.classList[0];
         //     if(phraseChar) {
         //         let phraseChars = document.getElementsByClassName(`letter`).item(0).classList;
         //         let numOfCharsClassAttr = phraseChars.length;
         //         console.log(phraseChars[numOfCharsClassAttr]);
         //         console.log(numOfCharsClassAttr);
                 // charLi = `<li className="hide letter ${phraseChar}">b</li>`;
                 //console.log(liClassList);
             //}
         //}

     }
 }

