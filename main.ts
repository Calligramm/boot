radio.onReceivedNumber(function (receivedNumber) {
    Knopfdruck = receivedNumber
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xWert = value
        xWert = xWert - 513
    }
    if (name == "y") {
        yWert = value
        yWert = yWert - 513
    }
    if (name == "z") {
        Knopfdruck = value
    }
})
let yWert = 0
let xWert = 0
let Knopfdruck = 0
radio.setGroup(2)
let Motor_a = l298.create_motor(DigitalPin.P0, DigitalPin.P1, AnalogPin.C16)
let motor_b = l298.create_motor(DigitalPin.P2, DigitalPin.P3, AnalogPin.C17)
let vehicle = l298.create_vehicle(Motor_a, motor_b)
basic.forever(function () {
    vehicle.drive(yWert, xWert)
    if (Knopfdruck == 1) {
        Motor_a.stop()
        motor_b.stop()
    }
})
