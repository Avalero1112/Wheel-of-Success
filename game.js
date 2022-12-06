const h2 = document.getElementsByClassName("title");
const keyboard = document.getElementsByTagName("button");
const letter = document.getElementsByClassName("letter");
const tries = document.getElementsByClassName("tries");
const heart = document.getElementsByClassName("tries").firstElementChild;
const overlay = document.getElementById("overlay");
const startBtn = document.getElementById("overlay").lastElementChild;
const ul = document.getElementById("ul");
const shownLetters = document.getElementsByClassName("show");
const space = document.getElementsByClassName('space');
const li = document.getElementsByTagName('li');

let currentPhrase = [];
let filter = [];
let heartCounter = 0; 
let arrSpan = [];
let splitPhrase;

const randomPhrase = [
    'kia stinger',
    "edm is my favorite",
    'i like marvel',
    'coding is fun',
    'hey recruiter'
];
//Select random phrase
function shufflePhrases (e) {
    for (let i = 0; i < 1; i++) {
    const arrIndex = Math.floor(Math.random() * (e.length));
    const y = currentPhrase.push(randomPhrase[arrIndex]);
    const x = currentPhrase.join('').toString();
    splitPhrase = x.split('');
    return splitPhrase;
    }  
}
const phrase = (shufflePhrases(randomPhrase));
console.log(phrase);

function appendPhrase (e) {
    for (let i = 0; i < e.length; i++) {
       const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = e[i];
        li.classList.add("letter");
        if (li.textContent === ' ') {
            li.classList.remove("letter");
            li.classList.add("space");
        }
        }
}
const allLi = appendPhrase(phrase);


//verifies phrase 
function showLetters () {
    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].addEventListener("click", (e) => {
            shownLetters.length;
            console.log(shownLetters.length);
            const array = Array.from(keyboard);
            const match = phrase.includes(array[i].textContent);
            if (match === true) {
                keyboard[i].classList.add("chosen");
                const keys = array[i].textContent.toString();
                for (let i = 0; i < letter.length + 1; i++) {
                    if (letter[i].textContent.match(keys)) {
                        letter[i].classList.add('show');
                    } else if (letter.length === shownLetters.length) {
                        wonGame();

                    }
                }
            }
            else if (match === false) {
                heartCounter++;
                removeHeart(heartCounter)
                keyboard[i].classList.add("wrong");
           }  
        })
}
}
showLetters();

console.log(letter.length);

function letterMatch (e) {
    for (i = 0; i < letter.length; i++) {

        if (e === letter[i].textContent) {
            console.log("match");
        }
    }

}

startBtn.addEventListener("click", function () {
    overlay.style.display = "none";
    shufflePhrases(randomPhrase);
    if (startBtn.innerHTML === "Try again!") {
        restartGame();
    } else if (startBtn.innerHTML === "Play again") {
        restartGame();
    }
})

        function removeHeart(counter) {
            for (let i = 0; i < counter; i++) {
                const liveHeart = tries[i].firstElementChild;
                tries[i].removeChild(liveHeart);
                let lostHeart = tries[i].insertAdjacentHTML("afterbegin", 
                "<img src='lostHeart.png' height='35px' width='30px'></img>")
                if (counter >= 5) {
                    failedGame();
                }
            } 
            
        }

        function wonGame () {
            for (let i = 0; i < letter.length; i++) {
                overlay.style.display = "flex";
                overlay.classList.add("win");
                h2.innerHTML = "You Won!";
                startBtn.innerHTML = "Play again";
                letter[i].classList.remove("show");
                }
        }


        function failedGame () {
            for (let i = 0; i < letter.length; i++) {
            overlay.style.display = "flex";
            overlay.classList.add("lose");
            h2.innerHTML = "You Lost";
            startBtn.innerHTML = "Try again!";
            letter[i].classList.remove("show");
            }
        }

        function restartGame () {
            heartCounter = 0;
            for (let i = 0; i < keyboard.length; i++) {
            keyboard[i].classList.remove("wrong");
            keyboard[i].classList.remove("chosen");
            }
            for (let i = 0; i < tries.length; i++) {
            const lostHeart = tries[i].firstElementChild;
            tries[i].removeChild(lostHeart);
            tries[i].insertAdjacentHTML("afterbegin", 
            "<img src='liveHeart.png' height='35px' width='30px'></img>")
            }
        }


