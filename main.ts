let 開始時間 = 0
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        basic.showNumber(0)
        bitbot.stop(BBStopMode.Brake)
        bitbot.rotate(BBRobotDirection.Right, 40)
        開始時間 = input.runningTime()
        while (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1 && input.runningTime() - 開始時間 <= 400 || input.runningTime() - 開始時間 > 400) {
            bitbot.rotate(BBRobotDirection.Right, 40)
        }
    }
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        basic.showNumber(1)
        bitbot.rotate(BBRobotDirection.Left, 16)
    }
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        basic.showNumber(2)
        bitbot.rotate(BBRobotDirection.Right, 16)
    }
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        basic.showNumber(3)
        bitbot.go(BBDirection.Forward, 60)
    }
})
