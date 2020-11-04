let i = 0
while (i < 10) {
    bitbot.rotatems(BBRobotDirection.Left, 30, 400)
    basic.showNumber(i)
    basic.showIcon(IconNames.Sad)
    i += 1
}
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
