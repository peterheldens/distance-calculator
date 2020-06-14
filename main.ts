radio.onReceivedNumber(function (receivedNumber) {
    distance = Math.max(0, Math.round((-55 - 19.5 * (radio.receivedPacket(RadioPacketProperty.SignalStrength) + 55)) / 45))
})
let distance = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendNumber(0)
    basic.showNumber(distance)
})
