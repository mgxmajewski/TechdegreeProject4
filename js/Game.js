/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(){
         this.missed = 0;
         this.phrase = this.createPhrases();
         this.activePhrase = null;
     }

     /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

     createPhrases() {
         const randomPhrase = [
             new Phrase('Team Treehouse Tech degree'),
             new Phrase('Javascript is cool'),
             new Phrase('Coding is fun'),
             new Phrase('Object oriented programming') 
         ];
         return randomPhrase;
     }

     getRandomPhrase() {
        return this.phrase[Math.floor(Math.random()* this.phrase.length)]
     }

     startGame() {
         const overlayDiv = document.getElementById(`overlay`);
         overlayDiv.style.display = 'none';
         const randomPhrase = game.getRandomPhrase();
         const phrase = new Phrase(randomPhrase.phrase);
         this.activePhrase = this.getRandomPhrase();
         phrase.addPhraseToDisplay();
         //console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
     }


     /**
      * Checks for winning move
      * @return {boolean} True if game has been won, false if game wasn't
      won
      */
     checkForWin() {
         let phraseToCompare = this.activePhrase.phrase;
         let charsGuessed = document.getElementsByClassName('show');
         if (phraseToCompare.length === charsGuessed.length) {
             return true;
         } else {
             return false;
         }
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
         if (gameWon === true) {
             console.log('you win');
         } else {
             console.log('you loose');
         }
     };
 }

