console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

function guess() {
    const guess_me = parseInt(document.getElementById("reset").value);
    const number = parseInt(document.getElementById("guessed_number").value);
    // console.log(number)
    // console.log(guess_me)

    if (!number) return
    if (number === guess_me) return add_text("You got it!")
    if (number > guess_me) return add_text(`${number} is too high!`)
    if (number < guess_me) return add_text(`${number} is too low!`)
}

function reset() {
    const reset_obj = document.getElementById("reset");
    reset_obj.value = rand()
    
    const guesses = document.getElementById("guesses");
    if (guesses.children.length != 0) {
        guesses.children[0].innerHTML = "Let's go again!"
    }
   
}

function rand() {
    return Math.floor(Math.random() * 100)
}

function add_text(string) {
    const guesses = document.getElementById("guesses");
    const h1 = document.createElement("h1")
    if (guesses.children.length == 0) {
        guesses.appendChild(h1);
        h1.innerHTML = string;
    }
    else {
        guesses.children[0].innerHTML = string
    }

    // guesses.appendChild(h1)
    // h1.innerHTML = string;
}

reset()