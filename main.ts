input.onButtonPressed(Button.A, function () {
    basic.showString("hanleeon")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 9))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . # # # .
        . . # . .
        # # # # #
        `)
})
