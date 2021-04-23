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
function Introduction (text: string) {
    game.splash("Curious George Satan Run")
    game.splash("Help Curious George Make It to His friend Satan Before time runs out ")
    game.splash("Collect bananas along")
    game.splash("Use the \"A\" and \"D\" key to move and the space bar to jump")
}
let JumpAmount = 0
let Car: Sprite = null
Introduction("Introduction")
Car = sprites.create(img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(11)
Car.setPosition(5, 215)
scene.cameraFollowSprite(Car)
JumpAmount = 0
Car.ay = 300
info.setLife(3)
game.onUpdate(function () {
    Car.x += controller.dx()
})
