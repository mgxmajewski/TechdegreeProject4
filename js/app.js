/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
       
       
const game = new Game();
const phrase = new Phrase();
const keyboard = document.querySelectorAll(".key");
const usedKeysArray = [];


for (let key of keyboard) {
    key.addEventListener("click", (e) => {
        if (e.target.classList.contains("key")) {
            let keyPressedHTML = e.target;
            //keyPressedHTML.classList.toggle('btn__reset:active');
            return game.handleInteraction(keyPressedHTML);
        }
    })
}

window.addEventListener('keydown', (e) => {
    console.log(e.key);
    if(!usedKeysArray.includes(e.key)) {
        for (let key of keyboard) {
            if (key.innerText === e.key){
                usedKeysArray.push(e.key);
                return game.handleInteraction(key);
            }
        }
    }
})

document.getElementById("btn__reset").addEventListener('click', () => game.gameReset());
