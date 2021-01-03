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

     // createPhrases() {
     //     const randomPhrase = [
     //         new Phrase('Team Treehouse Tech degree'),
     //         new Phrase('Javascript is cool'),
     //         new Phrase('Coding is fun'),
     //         new Phrase('Object oriented programming')
     //     ];
     //     return randomPhrase;
     // }

     createPhrases() {
         const randomPhrase = [
             new Phrase('Tea'),
             // new Phrase('Cod')
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
        let pharseToCompare = this.activePhrase.phrase;
        let charsGuessed = document.getElementsByClassName('show');
        if (pharseToCompare.length === charsGuessed.length) {
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
     removeLife() {};

     /**
      * Displays game over message
      * @param {boolean} gameWon - Whether or not the user won the game
      */
     gameOver(gameWon) {};
 }

