let countHome = 00
let countGuest = 00

let threeHome = document.getElementById("three-home").textContent
let twoHome = document.getElementById("two-home").textContent
let oneHome = document.getElementById("one-home").textContent

function incrementThreeHome() {
    countHome += 3
    document.getElementById("home").textContent = countHome;
}

function incrementTwoHome() {
    countHome += 2
    document.getElementById("home").textContent = countHome;
}

function incrementOneHome() {
    countHome += 1
    document.getElementById("home").textContent = countHome;
}

// Guest scores
function incrementThreeGuest() {
    countGuest += 3
    document.getElementById("guest").textContent = countGuest;
}

function incrementTwoGuest() {
    countGuest += 2
    document.getElementById("guest").textContent = countGuest;
}

function incrementOneGuest() {
    countGuest += 1
    document.getElementById("guest").textContent = countGuest;
}

// Guess the leader
function guessLeader() {
    if (countHome > countGuest) {
        document.getElementById("home").style.color = "#D97706";
        document.getElementById("guest").style.color = "#F94F6D";
    } else if (countHome < countGuest) {
        document.getElementById("guest").style.color = "#D97706";
        document.getElementById("home").style.color = "#F94F6D";
    } else {
        document.getElementById("guest").style.color = "#F94F6D";
        document.getElementById("home").style.color = "#F94F6D";
    }
}

// Timer

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            document.getElementById("guest").style.transition = "all 1s ease-in";
            document.getElementById("home").style.transition = "all 1s ease-in";
            if (countHome > countGuest) {
                document.getElementById("home").style.marginTop = "20px";
                document.getElementById("home").style.transition = "all 1s ease-in";
            } else if (countHome < countGuest) {
                document.getElementById("guest").style.marginTop = "20px";
            } else {
                document.getElementById("guest").style.marginTop = "20px";
                document.getElementById("home").style.marginTop = "20px";
            }
        }
    }, 1000);
}

window.onload = function() {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};