let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let homeTeam = document.getElementById("home");
let guestTeam = document.getElementById("guest");

function addScore(team, points) {
    if (team === "home") {
        homeScore.textContent = parseInt(homeScore.textContent) + points;
    } else if (team === "guest") {
        guestScore.textContent = parseInt(guestScore.textContent) + points;
    }
}

function checkWinner() {
    if (parseInt(homeScore.textContent) > parseInt(guestScore.textContent)) {
        homeTeam.style.color = "#d6f794";
        guestTeam.style.color = "#9bb8af";
    }
    else if (parseInt(homeScore.textContent) < parseInt(guestScore.textContent)) {
        guestTeam.style.color = "#d6f794";
        homeTeam.style.color = "#9bb8af";
    }
    else {
        homeTeam.style.color = "#9bb8af";
        guestTeam.style.color = "#9bb8af";
    }
}

function newGame() {
    homeScore.textContent = "0";
    guestScore.textContent = "0";
    homeTeam.style.color = "#9bb8af";
    guestTeam.style.color ="#9bb8af";
}
