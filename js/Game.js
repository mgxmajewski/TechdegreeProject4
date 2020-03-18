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
             new Phrase('Teamtreehouse Techdegree'),
             new Phrase('Javascript is cool'),
             new Phrase('Coding is fun'),
             new Phrase('Object oriented programming') 
         ];
         return randomPhrase;
     }

     getRandomPhrase() {
        return this.phrase[Math.floor(Math.random()* this.phrase.length)]
     }

 }