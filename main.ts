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
