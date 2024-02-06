let P2のONとOFF = 0
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
})
input.onPinPressed(TouchPin.P2, function () {
    P2のLEDを光らせてゆっくり暗くする()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P1, 1023)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P1, 300)
        basic.pause(500)
        pins.analogWritePin(AnalogPin.P1, 0)
        basic.pause(500)
    }
})
function P2のLEDを光らせてゆっくり暗くする () {
    P2のONとOFF = 1023
    for (let index = 0; index < 1023; index++) {
        P2のONとOFF += -1
        pins.analogWritePin(AnalogPin.P2, P2のONとOFF)
        basic.pause(1)
    }
}
