input.onButtonPressed(Button.A, function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(1000)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.Happy)
