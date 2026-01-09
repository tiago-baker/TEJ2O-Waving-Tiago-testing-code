/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Jan 2026
 * This program This program moves servo 0 and 80 degrees
*/

// variables 
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

// button A pressed
input.onButtonPressed(Button.A, function () {
    // move servo to 80 and 0 degrees 6 times
    robotbit.Servo(servoNumber1, 80)
    basic.pause(500)
    robotbit.Servo(servoNumber1, 0)
    basic.pause(500)
    robotbit.Servo(servoNumber1, 80)
    basic.pause(500)
    robotbit.Servo(servoNumber1, 0)
    basic.pause(500)
    robotbit.Servo(servoNumber1, 80)
    basic.pause(500)
    robotbit.Servo(servoNumber1, 0)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
})
