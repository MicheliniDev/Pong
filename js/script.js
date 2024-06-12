let canvasPong = document.getElementById("canvas")        
let quadro = canvasPong.getContext("2d")
let bruh = new Audio('./bruh.mp3')
let foda = new Audio('./chickenbeatbox.mp3')
let foda2 = new Audio('./sif.mp3')

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
    dirY: 2
}

quadro.font = "20px Comic Sans MS"
let pts1 = 0
let pts2 = 0
let jogar = true

function draw() {
    quadro.fillRect(player1.px, player1.py, player1.tx, player1.ty)
    quadro.fillRect(player2.px, player2.py, player2.tx, player2.ty)
    quadro.fillRect(bolinha.px, bolinha.py, bolinha.tx, bolinha.ty)
    quadro.fillText(`Pontos: ${pts1}`, 280, 70)
    quadro.fillText(`Pontos: ${pts2}`, 900, 70)
}

function telaVencedor() {
    quadro.clearRect(0, 0, 1280, 720) // wow limpa as coisas
    quadro.font = "60px Comic Sans MS"
    quadro.fillText(`Pontos: ${pts1}`, 200, 345)
    quadro.fillText(`Pontos: ${pts2}`, 800, 345)
    if (pts1 > pts2) {
        foda.play()
    }
    else {
        foda2.play()
    }
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
    bolinha.py += bolinha.dirY

    if(bolinha.py < 0) {
        bolinha.dirY *= -1
    }
    else if (bolinha.py > 690) {
        bolinha.dirY *= -1
    }
}

function colisao() {
    if (bolinha.py + bolinha.ty >= player2.py && bolinha.py <= player2.py + player2.ty && bolinha.px >= player2.px - player2.tx && bolinha.px >= player2.px - player2.tx) {
        bolinha.dir *= -1

    }
    else if (bolinha.py + bolinha.ty >= player1.py && bolinha.py <= player1.py + player1.ty && bolinha.px <= player1.px + player1.tx && bolinha.px >= player1.px-player1.tx) {
        bolinha.dir *= -1
    }
}

function placar() {
    if(bolinha.px < -100) {
        pts2 += 1
        bolinha.px = 625
        bolinha.dir *= -1 
        bruh.play()
    }
    else if (bolinha.px > 1380) {
        pts1 += 1
        bolinha.px = 625
        bolinha.dir *= -1
        bruh.play()
    }
}

function fimJogo() {
    if(pts1 > 4 || pts2 > 4 ) {
        jogar = false
    }
}

function main() {
    if(jogar == true) {
        quadro.clearRect(0, 0, 1280, 720) // wow limpa as coisas
        draw()
        moverBolinha()
        colisao()
        placar()
        moverJogador()
        fimJogo()
    }
    else {
        telaVencedor()
    }
}

setInterval(main, 10) 