let moves = ["up", "left", "right", "down"]
let turnTxt = document.querySelector(".turn")
let streakTxt = document.querySelector(".streak")
let streak = 0
var turn

let youImg = document.querySelector(".you-img")
let oppImg = document.querySelector(".opp-img")

var oppHP = 3

function firstTurn(){
    if ((Math.floor(Math.random() * 2)) == 1){
        turnTxt.innerHTML = "YOUR TURN"
        turn = "you"
    }
    else{
        turnTxt.innerHTML = "OPP TURN"
        turn = "opp"
    }
}
firstTurn()

function move(n){
    let yourMove = moves[n]
    if (yourMove == null){
        return 0
    }

    let x = Math.floor(Math.random() * moves.length)
    while (moves[x] == null){
        x = Math.floor(Math.random() * moves.length)
    }
    let oppMove = moves[x]

    let assist = Math.random()
    if (assist <= 0.3){
        oppMove = moves[n]
        console.log("GOOD LUCK!!!")
    }

    if (yourMove == oppMove){
        streak += 1
        moves[n] = null
        if (streak == 4){
            document.getElementById(`opp-heart${oppHP}`).classList.add("grayscale")
            oppHP -= 1
            streak = 0
            moves = ["up", "left", "right", "down"]
        }
    }
    else{
        streak = 0
        moves = ["up", "left", "right", "down"]
    }
    console.log("OPP HP: "+oppHP)
    console.log(assist)
    console.log(moves)
    streakTxt.innerHTML = streak
    youImg.src = `./assests/point-${yourMove}.png`
    oppImg.src = `./assests/head-${oppMove}.png`
}

if (turn == "you"){
    document.addEventListener('keydown', (event) =>{
        if (event.key == "w"){
            move(0)
        }
        if (event.key == "a"){
            move(1)
        }
        if (event.key == "d"){
            move(2)
        }
        if (event.key == "s"){
            move(3)
        }
    })
}



