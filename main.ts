function restart () {
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 3488, 255, 67, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    user_score = 0
    comp_score = 0
    return 0
}
input.onButtonPressed(Button.A, function () {
    user_score += 1
    music.play(music.createSoundExpression(WaveShape.Square, 3426, 1, 216, 0, 359, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    scores(user_score, comp_score)
})
input.onSound(DetectedSound.Loud, function () {
    rockpaperScissors()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    comp_score += 1
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    scores(user_score, comp_score)
})
function scores (user: number, comp: number) {
    score = "" + user + ":" + comp
    basic.showString(score)
    radio.sendString(score)
    if (user == 2) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Happy)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        restart()
    }
    if (comp == 2) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Sad)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        restart()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    return 0
}
function rockpaperScissors () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    return 0
}
let hand = 0
let score = ""
let comp_score = 0
let user_score = 0
restart()
