/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase){
         this.phrase = phrase;
     }
     
     addPhraseToDisplay() {
        const char = this.phrase.split('');
        for (let i = 0; i < char.length; i++){
            let charLi = document.createElement('li')
                if (char[i] !== ' ') {
                    charLi.classList.add("hide", "letter", char[i]);
                    charLi.textContent = char[i];
                    charUl.appendChild(charLi);
                }   else if (char[i] === ' ') {
                    charLi.className = "space";
                    charLi.innerText = char[i];
                    charUl.appendChild(charLi);
                }
        }
     }

     checkLetter(e) {
        for (let i = 0; i < this.phrase.length; i++){
            if(this.phrase.includes(e)){
              return true;
            } else { 
                return false;
            }   
        }
    }
 }