homeScore=0
guestScore=0
homeScoreEl = document.getElementById("home-score")
guestScoreEl = document.getElementById("guest-score")

function homeIncrementByOne(){
    homeScore+=1
    homeScoreEl.innerText = homeScore
}

function homeIncrementByTwo(){
    homeScore+=2
    homeScoreEl.innerText = homeScore
}

function homeIncrementByThree(){
    homeScore+=3
    homeScoreEl.innerText = homeScore
}

function guestIncrementByOne(){
    guestScore+=1
    guestScoreEl.innerText = guestScore
}

function guestIncrementByTwo(){
    guestScore+=2
    guestScoreEl.innerText = guestScore
}

function guestIncrementByThree(){
    guestScore+=3
    guestScoreEl.innerText = guestScore
}