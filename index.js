
let countH = 0
let countG = 0
//let count = 0

let homeCount = document.getElementById("homeId")

let guestCount = document.getElementById("guestId")


function homeOne(){
    countH += 1
    homeCount.textContent = countH

}

function homeTwo(){
    countH += 2
    homeCount.textContent = countH

}

function homeThree(){
    countH += 3
    homeCount.textContent = countH

}

function guestOne(){
    countG += 1
    guestCount.textContent = countG

}

function guestTwo(){
    countG += 2
    guestCount.textContent = countG

}

function guestThree(){
    countG += 3
    guestCount.textContent = countG

}

function reset() {
    //let resetCount = count
    homeCount.textContent = countH
    guestCount.textContent = countG
    countH = 0
    countG = 0

}












