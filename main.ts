let C1_votos = 0
let C2_Votos = 0
input.onButtonPressed(Button.A, function () {
    C1_votos += 1
    basic.showNumber(C1_votos)
})
input.onGesture(Gesture.Shake, function () {
    C1_votos = 0
    C2_Votos = 0
    basic.showNumber(C1_votos)
    basic.showNumber(C2_Votos)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (C1_votos > C2_Votos) {
        basic.showString("C1 GANADOR")
    } else {
        if (C1_votos < C2_Votos) {
            basic.showString("C2 GANADOR")
        } else {
            basic.showString("EMPATE")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    C2_Votos += 1
    basic.showNumber(C2_Votos)
})
