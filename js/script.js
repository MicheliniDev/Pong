let canvasPong = document.getElementById("canvas")        
let quadro = canvasPong.getContext("2d")

quadro.fillStyle = "white" // permite preencher a cor dos objetos dentro do quadro
let player1 = {
    px: 80,
    py: 260,
    tx: 30,
    ty: 200,
}
let player2 = {
    px: 1150,
    py: 260,
    tx: 30,
    ty: 200,
}
let bolinha = {
    px: 625,
    py: 345,
    tx: 30,
    ty: 30,
}


quadro.font = "20px Comic Sans MS"
let pts1 = 0
let pts2 = 0

function draw() {
    quadro.fillRect(player1.px, player1.py, player1.tx, player1.ty)
    quadro.fillRect(player2.px, player2.py, player2.tx, player2.ty)
    quadro.fillRect(bolinha.px, bolinha.py, bolinha.tx, bolinha.ty)
    quadro.fillText(`Pontos: ${pts1}`, 200, 70)
    quadro.fillText(`Pontos: ${pts2}`, 1000, 70)
}

draw()