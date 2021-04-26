scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    currentLevel += 1
    info.changeLifeBy(2)
    music.baDing.play()
    if (hasNextLevel()) {
        pause(1000)
        game.splash("Next Level")
        setLevelTileMap(currentLevel)
    } else {
        game.over(true, effects.confetti)
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    JumpAmount = 0
})
function setLevelTileMap (num: number) {
    if (num == 0) {
        tiles.setTilemap(tilemap`level1`)
        Car.setPosition(5, 214)
        info.startCountdown(50)
    } else if (num == 1) {
        tiles.setTilemap(tilemap`level3`)
        Car.setPosition(5, 214)
        info.startCountdown(70)
    } else if (num == 2) {
        tiles.setTilemap(tilemap`level2`)
        Car.setPosition(5, 214)
        info.startCountdown(50)
    } else if (num == 3) {
        tiles.setTilemap(tilemap`level7`)
        Car.setPosition(5, 214)
        info.startCountdown(60)
    } else if (num == 4) {
        tiles.setTilemap(tilemap`level9`)
        Car.setPosition(5, 214)
        info.startCountdown(70)
    }
    hasNextLevel()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (JumpAmount < 2) {
        Car.vy += -100
        JumpAmount += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    music.smallCrash.play()
    pause(100)
    Car.setPosition(5, 214)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    Car.setPosition(5, 215)
    music.zapped.play()
})
info.onCountdownEnd(function () {
    music.buzzer.play()
    game.over(false)
})
function Introduction (text: string) {
    game.splash("Curious George Satan Run")
    game.splash("Help Curious George Make It to His friend Satan Before time runs out ")
    game.splash("Collect bananas along the way for extra points")
    game.splash("Use the \"A\" and \"D\" key to move and the space bar to jump")
    game.splash("P.S. George can use his monkey grip to grip to all sides of walls")
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Banana`, function (sprite, location) {
    info.changeScoreBy(1)
    music.beamUp.play()
    tiles.setTileAt(location, assets.tile`myTile11`)
})
function hasNextLevel () {
    return currentLevel != levelCount
}
let levelCount = 0
let currentLevel = 0
let JumpAmount = 0
let Car: Sprite = null
Introduction("Introduction")
Car = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . . f e e e d d d d f . . 
    . . . . f f e e d f d d f d c . 
    . . . f d d e e d f d d f d c . 
    . . . c d b e e d d d d e e d c 
    f f . c d b e e d d c d d d d c 
    f e f . c f e e d d d c c c c c 
    f e f . . f f e e d d d d d f . 
    f e f . f e e e e f f f f f . . 
    f e f f e e e e e e e f . . . . 
    . f f e e e e f e f f e f . . . 
    . . f e e e e f e f f e f . . . 
    . . . f e f f b d f b d f . . . 
    . . . f d b b d d c d d f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(11)
Car.setPosition(5, 214)
scene.cameraFollowSprite(Car)
JumpAmount = 0
Car.ay = 300
info.setLife(3)
info.setScore(0)
currentLevel = 0
levelCount = 5
setLevelTileMap(currentLevel)
game.onUpdate(function () {
    Car.x += controller.dx()
})
