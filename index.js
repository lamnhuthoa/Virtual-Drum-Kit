//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll("button").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    var drumKind = document.querySelectorAll(".drum")[i].getAttribute("class");
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var drumKind = this.innerHTML;
        makeSound(drumKind);
        buttonAnimation(drumKind)
    });
}

//Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var bass = new Audio("./sounds/kick-bass.mp3");
            bass.play();
            break;
        case "k":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    
    setTimeout (function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}