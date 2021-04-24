scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    JumpAmount = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (JumpAmount < 2) {
        Car.vy += -100
        JumpAmount += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    Car.setPosition(5, 215)
    pause(100)
    info.changeLifeBy(-1)
})
info.onCountdownEnd(function () {
    game.over(false)
})
function Introduction (text: string) {
    game.splash("Curious George Satan Run")
    game.splash("Help Curious George Make It to His friend Satan Before time runs out ")
    game.splash("Collect bananas along the way for extra points")
    game.splash("Use the \"A\" and \"D\" key to move and the space bar to jump")
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Banana`, function (sprite, location) {
    Banana.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
let JumpAmount = 0
let Banana: Sprite = null
let Car: Sprite = null
Introduction("Introduction")
Car = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d 4 . 
    . . . f d d e e d f d d f d 4 . 
    . . . 4 d 4 e e d d d d e e d 4 
    f f . 4 d 4 e e d d 4 d d d d 4 
    f e f . 4 f e e d d d 4 4 4 4 4 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f 4 d f 4 d f . . . 
    . . . f d 4 4 d d 4 d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
Banana = assets.tile`Banana`
Banana = 0
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(11)
Car.setPosition(5, 215)
scene.cameraFollowSprite(Car)
JumpAmount = 0
Car.ay = 300
info.setLife(3)
info.setScore(0)
info.startCountdown(30)
game.onUpdate(function () {
    Car.x += controller.dx()
})
