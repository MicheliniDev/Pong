let canvasPong = document.getElementById("canvas")        
let quadro = canvasPong.getContext("2d")

quadro.fillStyle = "white" // permite preencher a cor dos objetos dentro do quadro
let player1 = {
    px: 80,
    py: 260,
    tx: 30,
    ty: 200,
    dir : 0
}
let player2 = {
    px: 1150,
    py: 260,
    tx: 30,
    ty: 200,
    dir: 0
}
let bolinha = {
    px: 625,
    py: 345,
    tx: 30,
    ty: 30,
    dir: 8,
}

quadro.font = "20px Comic Sans MS"
let pts1 = 0
let pts2 = 0

function draw() {
    quadro.fillRect(player1.px, player1.py, player1.tx, player1.ty)
    quadro.fillRect(player2.px, player2.py, player2.tx, player2.ty)
    quadro.fillRect(bolinha.px, bolinha.py, bolinha.tx, bolinha.ty)
    quadro.fillText(`Pontos: ${pts1}`, 280, 70)
    quadro.fillText(`Pontos: ${pts2}`, 900, 70)
}

document.addEventListener("keydown", function(keyPressed){
    if(keyPressed.keyCode == 87) {
        player1.dir -= 8
    }
    else if(keyPressed.keyCode == 83){
        player1.dir += 8
    }
})

document.addEventListener("keyup", function(keyPressed) {
    if(keyPressed.keyCode == 87) {
        player1.dir = 0
    }
    else if(keyPressed.keyCode == 83){
        player1.dir = 0
    }
})

document.addEventListener("keydown", function(keyPressed){
    if(keyPressed.keyCode == 38) {
        player2.dir -= 8
    }
    else if(keyPressed.keyCode == 40){
        player2.dir += 8
    }
})

document.addEventListener("keyup", function(keyPressed){
    if(keyPressed.keyCode == 38) {
        player2.dir = 0
    }
    else if(keyPressed.keyCode == 40){
        player2.dir = 0
    }
})

function moverJogador() {
    if (player1.py < 0) {
        player1.py = 0
    }
    if (player1.py > 520) {
        player1.py = 520
    }
    if (player2.py < 0) {
        player2.py = 0
    }
    if (player2.py > 520) {
        player2.py = 520
    }
    player1.py += player1.dir
    player2.py += player2.dir
}

function moverBolinha() {
    bolinha.px += bolinha.dir
    if (bolinha.px > player2.px) {
        bolinha.dir *= -1
    }
    else if (bolinha.px < 90) {
        bolinha.dir *= -1
    }
}

function placar() {
    if(bolinha.px < 90) {
        pts1 += 1 
    }
    else if (bolinha.px > 1150) {
        pts2 += 1
    }
}

function main() {
    quadro.clearRect(0, 0, 1280, 720) // wow limpa as coisas

    draw()
    moverBolinha()
    placar()
    moverJogador()
}

setInterval(main, 10) 