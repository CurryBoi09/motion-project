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
        Monkey.setPosition(20, 213)
        info.startCountdown(50)
    } else if (num == 1) {
        tiles.setTilemap(tilemap`level2`)
        Monkey.setPosition(8, 213)
        info.startCountdown(50)
    } else if (num == 2) {
        tiles.setTilemap(tilemap`level3`)
        Monkey.setPosition(8, 213)
        info.startCountdown(70)
    } else if (num == 3) {
        tiles.setTilemap(tilemap`level7`)
        Monkey.setPosition(8, 213)
        info.startCountdown(60)
    } else if (num == 4) {
        tiles.setTilemap(tilemap`level9`)
        Monkey.setPosition(8, 213)
        info.startCountdown(70)
    } else if (num == 5) {
        tiles.setTilemap(tilemap`level16`)
        Monkey.setPosition(8, 16)
        info.startCountdown(120)
        hasNextLevel()
    } else if (num == 6) {
        tiles.setTilemap(tilemap`level27`)
        Monkey.setPosition(20, 1150)
        info.startCountdown(70)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (JumpAmount < 2) {
        Monkey.vy += -100
        JumpAmount += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    music.smallCrash.play()
    pause(100)
    info.changeLifeBy(-1)
    if (currentLevel == 5) {
        Monkey.setPosition(10, 16)
    } else if (currentLevel == 6) {
        Monkey.setPosition(20, 1150)
    } else {
        Monkey.setPosition(20, 195)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    info.changeScoreBy(5)
    info.changeLifeBy(1)
    music.beamUp.play()
    tiles.setTileAt(location, assets.tile`myTile11`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    music.zapped.play()
    if (currentLevel == 6) {
        Monkey.setPosition(20, 1150)
    } else {
        Monkey.setPosition(5, 215)
    }
})
info.onCountdownEnd(function () {
    music.buzzer.play()
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile15`)
    Monkey.setImage(assets.image`Golden Curious George`)
    game.showLongText("You have unlocked the golden curious george skin", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    music.bigCrash.play()
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`myTile11`)
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
let Monkey: Sprite = null
Introduction("Introduction")
Monkey = sprites.create(img`
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
scene.cameraFollowSprite(Monkey)
JumpAmount = 0
Monkey.ay = 300
info.setLife(3)
info.setScore(0)
currentLevel = 0
levelCount = 7
setLevelTileMap(currentLevel)
if (Monkey.x < 1) {
    if (currentLevel == 5) {
        Monkey.setPosition(8, 16)
    } else {
        Monkey.setPosition(7, 214)
    }
}
game.onUpdate(function () {
    Monkey.x += controller.dx()
})
