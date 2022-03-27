input.onGesture(Gesture.Shake, function () {
    retry = true
    while (retry) {
        hand = randint(1, 4)
        if (hand == 1) {
            basic.showLeds(`
                . . . . .
                . # # . .
                . # # . .
                . . . . .
                . . . . .
                `)
            retry = false
        } else if (hand == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            retry = false
        } else if (hand == 3) {
            if (_super == 1) {
                basic.showLeds(`
                    # # . # #
                    # . # . #
                    . # . # .
                    # . # . #
                    # # . # #
                    `)
                _super += 1
                retry = false
            } else {
                retry = true
            }
        } else {
            basic.showIcon(IconNames.Scissors)
            retry = false
        }
    }
})
let hand = 0
let retry = false
let _super = 0
_super = 1
