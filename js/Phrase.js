/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         this.phrase = phrase;
     }

     /**
      * Display phrase on game board
      */

     addPhraseToDisplay() {
        const phraseUl = document.getElementById('phrase');
        const char = this.phrase.split('');
        console.log(char);
        for (let i = 0; i < char.length; i++){
            let charLi = document.createElement('li');
                if (char[i] !== ' ') {
                    charLi.classList.add("hide", "letter", char[i]);
                    charLi.textContent = char[i];
                    phraseUl.appendChild(charLi);
                 } else if (char[i] === ' ') {
                    charLi.className = "space";
                    charLi.innerText = char[i];
                    phraseUl.appendChild(charLi);
                 }
         }
     }

     /**
      * Checks if passed letter is in phrase
      * @param letter
      */
     checkLetter(letter) {
        for (let i = 0; i < game.activePhrase.phrase.length; i++) {
            if (game.activePhrase.phrase.includes(letter)){
                return true;
            }
        }
     }

     /**
      * Displays passed letter on screen after a match is found
      * @param (string) letter - Letter to display
      */
     showMatchedLetter(letter) {
         const phraseChar = document.getElementsByClassName('letter');
         console.log(phraseChar);
         for(let i = 0; i < phraseChar.length; i++){
            if(letter === phraseChar) {
                phraseChar[i].classList.remove("hide");
            } else {
                phraseChar[i].classList.add("show");
            }
         }
     }
 }