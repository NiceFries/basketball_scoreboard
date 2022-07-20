let scoreHome = 0
let scoreboardHome = document.getElementById("score-home")
let scoreGuest = 0
let scoreboardGuest = document.getElementById("score-guest")

function add1home() {
    scoreHome += 1
    scoreboardHome.textContent = scoreHome
}

function add2home() {
    scoreHome += 2
    scoreboardHome.textContent = scoreHome
}

function add3home() {
    scoreHome += 3
    scoreboardHome.textContent = scoreHome
}

function add1guest() {
    scoreGuest += 1
    scoreboardGuest.textContent = scoreGuest
}

function add2guest() {
    scoreGuest += 2
    scoreboardGuest.textContent = scoreGuest
}

function add3guest() {
    scoreGuest += 3
    scoreboardGuest.textContent = scoreGuest
}

function newgame() {
    
}