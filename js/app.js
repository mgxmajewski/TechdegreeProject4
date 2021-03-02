/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
       
       
const game = new Game();
const phrase = new Phrase();
const keyboard = document.querySelectorAll(".key");
let usedKeysArray = [];

for (let key of keyboard) {
    key.addEventListener("click", (e) => {
        if (e.target.classList.contains("key")) {
            let keyPressedHTML = e.target;
            usedKeysArray.push(e);
            //keyPressedHTML.classList.toggle('btn__reset:active');
            return game.handleInteraction(keyPressedHTML);
        }
    })
}

window.addEventListener('keydown', (e) => {

    if(!usedKeysArray.includes(e.key)){
        for (let key of keyboard) {
            if (key.innerText === e.key){
                usedKeysArray.push(e.key);
                return game.handleInteraction(key);
            }
        }
    }
})

function animateHeader() {
    const header = document.querySelector('.header');
    console.log(header);
    header.classList.add('animate__animated', 'animate__flash');
}


function usedKeysArrayReset(array) {
    while(array.length > 0) {
        array.pop();
    }
}

document.getElementById("btn__reset").addEventListener('click', () => {
    game.gameReset(usedKeysArray);
    animateHeader();
});
