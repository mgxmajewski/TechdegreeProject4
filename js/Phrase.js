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
      * @param (string) letter - Letter to check
      */
     checkLetter(letter) {
        for (let i = 0; i < game.activePhrase.phrase.length; i++) {
            if (game.activePhrase.phrase.includes(letter)) {
                return true;
            } else {
                return false;
            }
        }
     }

     /**
      * Displays passed letter on screen after a match is found
      * @param (string) letter - Letter to display
      */
     showMatchedLetter(letter) {
         const phraseChars = game.activePhrase.phrase.split('');
         console.log(phraseChars);
         for(let i = 0; i < phraseChars.length; i++){
             let phraseChar = phraseChars[i];

             //let liClassList = charLi.classList[0];
            if(phraseChar === letter) {
                let charLi = document.getElementsByClassName(`hide letter ${phraseChar}` );
                // console.log(charLi);
                charLi.item(0).classList.add('show');
                charLi[0].classList.remove('hide');
                // charLi = `<li className="hide letter ${phraseChar}">b</li>`;
                //console.log(liClassList);
            }
         }
     }
 }