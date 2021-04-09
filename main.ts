radio.onReceivedNumber(function (receivedNumber) {
    radio.sendNumber(13)
    basic.showIcon(IconNames.No)
    music.playMelody("E B C5 A B G A F ", 120)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(13)
basic.forever(function () {
	
})
