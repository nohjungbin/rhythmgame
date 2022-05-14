input.onButtonPressed(Button.A, function () {
    serial.writeNumber(1)
})
input.onButtonPressed(Button.B, function () {
    serial.writeNumber(2)
})
basic.showString("helloworld!")
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
    basic.showString(serial.readUntil(serial.delimiters(Delimiters.NewLine)))
    basic.pause(1000)
})
