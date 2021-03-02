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
            console.log(e.target.innerText);
            usedKeysArray.push(e.target.innerText);
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
const header = document.querySelector('.header');
console.log(header);
function animateHeader() {
    header.classList.remove('animate__animated', 'animate__flash');
    console.log('1'+ header.classList);
    header.classList.add('animate__animated', 'animate__flash');
    console.log('2' + header.classList);
}


// Used snippet from https://animate.style/#documentation
const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });



function usedKeysArrayReset(array) {
    while(array.length > 0) {
        array.pop();
    }
}

document.getElementById("btn__reset").addEventListener('click', () => {
    game.gameReset(usedKeysArray);
    animateCSS('.header', 'bounce');
});
