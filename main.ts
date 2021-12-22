namespace SpriteKind {
    export const water = SpriteKind.create()
    export const WATERSECOND = SpriteKind.create()
    export const JUICER = SpriteKind.create()
    export const COLA = SpriteKind.create()
    export const LAVA = SpriteKind.create()
    export const bat = SpriteKind.create()
    export const three = SpriteKind.create()
    export const hellfox = SpriteKind.create()
    export const flam = SpriteKind.create()
    export const emperion = SpriteKind.create()
    export const invis = SpriteKind.create()
    export const bear = SpriteKind.create()
    export const poo = SpriteKind.create()
    export const dragonbestpetinthegame = SpriteKind.create()
    export const ELF = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    ask_if_buy_water = game.ask(" orange juice pet for 3.5k points ")
    if (controller.A.isPressed()) {
        info.changeScoreBy(-3500)
    }
    JUICEE = sprites.create(img`
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        `, SpriteKind.JUICER)
    pause(50000000000000000000000000000)
    JUICEE.follow(mySprite, 57)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (!(controller.A.isPressed())) {
        mySprite5 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.poo)
    }
    if (Math.percentChance(43)) {
        ask_if_buy_water = game.ask("volcano PET FOR 1M")
        if (controller.A.isPressed()) {
            info.changeScoreBy(-1000000)
            bat = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 5 5 5 5 5 5 5 . . . . 
                . . . . . 5 4 4 4 4 4 5 . . . . 
                . . . . . 5 4 4 4 f 4 5 . . . . 
                . 5 5 5 5 5 4 f 4 4 4 5 5 5 5 5 
                5 5 . . . 5 4 4 4 4 5 5 . . . . 
                5 5 . . . 5 4 4 4 4 4 5 . . . . 
                . 5 5 5 . 5 4 4 f f 4 5 5 . . . 
                . . . . 5 5 4 f f 4 4 5 5 5 5 . 
                . . . . . 5 4 4 4 4 4 5 . . 5 5 
                . . . . . 5 5 5 5 5 5 5 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.bat)
            pause(50000000000000000000000000000)
            bat.follow(mySprite, 86)
        }
    }
    if (Math.percentChance(0.17)) {
        ask_if_buy_water = game.ask("volcano PET FOR 1M")
        if (controller.A.isPressed()) {
            info.changeScoreBy(-1000000)
            three_headed = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                5 5 5 5 5 5 . . . 5 5 5 5 5 5 5 
                5 4 5 5 4 5 . . . 5 5 4 5 5 5 4 
                5 5 5 5 5 5 . . . 5 5 5 5 5 5 5 
                5 5 4 4 5 5 . . . 5 5 5 5 5 5 5 
                5 5 5 5 5 5 . . . 5 5 4 4 4 5 5 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 4 . . . . . . 
                . . . . . 5 4 5 5 5 . . . . . . 
                . . . . . 5 5 4 4 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.three)
            pause(50000000000000000000000000000)
            three_headed.follow(mySprite, 86)
        }
    }
    if (Math.percentChance(0.1)) {
        ask_if_buy_water = game.ask("volcano PET FOR 1M")
        if (controller.A.isPressed()) {
            info.changeScoreBy(-1000000)
            flamortus = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 2 2 2 2 2 c . . . . . . . . . 
                c c c 2 2 2 2 . . 2 2 2 2 2 2 2 
                . . 2 2 2 2 2 . 2 2 c 2 2 c c 2 
                . . 2 c 2 2 . 2 2 2 2 2 2 2 2 c 
                . . . 2 2 2 . 2 2 2 2 c c c 2 c 
                . . . . . . . 2 2 2 2 2 2 c c c 
                . . 2 2 2 2 c 2 2 c 2 2 . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                . . 2 2 2 c c c c c 2 c 2 2 . . 
                . . . 2 2 c 2 2 2 c c c 2 . . . 
                . . . . 2 2 2 2 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.flam)
            pause(50000000000000000000000000000)
            flamortus.follow(mySprite, 86)
        }
    }
    if (Math.percentChance(43)) {
        ask_if_buy_water = game.ask("volcano PET FOR 1M")
        if (controller.A.isPressed()) {
            info.changeScoreBy(-1000000)
            h_fox = sprites.create(img`
                . . . . 5 . . . . . . . 5 . . . 
                . . . 5 5 5 . . . . . 5 5 5 . . 
                . . 5 5 5 5 5 . . . 5 5 5 5 5 . 
                . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                . . 4 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . . 4 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . . 4 4 4 4 5 5 5 5 4 4 4 4 4 . 
                . . 4 4 4 4 5 5 5 5 4 4 4 4 4 . 
                . . 4 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . . 4 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . . 4 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . . 4 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . . 4 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . . 4 5 5 5 5 5 5 5 5 5 5 5 4 . 
                . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.hellfox)
            pause(50000000000000000000000000000)
            h_fox.follow(mySprite, 86)
        }
    }
    if (Math.percentChance(13)) {
        ask_if_buy_water = game.ask("volcano PET FOR 1M")
        if (controller.A.isPressed()) {
            info.changeScoreBy(-1000000)
            lava_slug = sprites.create(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 f 5 5 f 5 5 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 f 5 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 5 f 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 f 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 f 5 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 f 5 5 5 5 4 . 
                4 5 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.LAVA)
            pause(50000000000000000000000000000)
            lava_slug.follow(mySprite, 86)
        }
    }
})
scene.onOverlapTile(SpriteKind.COLA, sprites.swamp.swampTile12, function (sprite, location) {
    pause(50000)
    info.changeScoreBy(850)
})
scene.onOverlapTile(SpriteKind.LAVA, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.changeScoreBy(65)
})
scene.onOverlapTile(SpriteKind.JUICER, sprites.castle.tileDarkGrass2, function (sprite, location) {
    pause(0)
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.emperion, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.changeScoreBy(101)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    ask_if_buy_water = game.ask(" COKE pet for 50K points ")
    if (controller.A.isPressed()) {
        info.changeScoreBy(-50000)
        COLA = sprites.create(img`
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . 2 f f f f f f 2 . . . . . 
            . . . 2 f f f f f f 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 . . . . . 
            . . . 2 2 f f f f 2 2 . . . . . 
            . . . 2 2 f 2 2 2 2 2 . . . . . 
            . . . 2 2 f 2 f f 2 2 . . . . . 
            . . . 2 2 f 2 f f 2 2 . . . . . 
            . . . f f f 2 2 2 f f . . . . . 
            . . f f . f . f . f f . . . . . 
            . . f . f . f . f . f . . . . . 
            `, SpriteKind.COLA)
        pause(50000000000000000000000000000)
        COLA.follow(mySprite, 75)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    ask_if_buy_water = game.ask("buy water pet for 1k points ")
    if (controller.A.isPressed()) {
        info.changeScoreBy(-1000)
        water_2 = sprites.create(img`
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 8 9 9 9 9 9 8 . . . . . 
            . . . . 9 9 6 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 6 9 . . . . . 
            . . . . 6 9 9 8 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 8 9 9 9 9 8 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 9 9 9 9 9 9 9 . . . . . 
            . . . . 9 6 9 6 9 6 9 . . . . . 
            . . . . 9 6 9 6 9 6 9 . . . . . 
            . . . 9 . 9 . 9 . 9 . 9 . . . . 
            `, SpriteKind.WATERSECOND)
        pause(50000000000000000000000000000)
        water_2.follow(mySprite, 33)
    }
})
scene.onOverlapTile(SpriteKind.three, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.changeScoreBy(84)
    info.player2.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    ask_if_buy_water = game.ask(" ELF pet for 450 K 2Ppoints ")
    if (controller.A.isPressed()) {
        info.player2.changeScoreBy(-250000)
    }
    ELFFY = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . d d d 2 2 d . . . . . 
        . . . . . d d d d d d d . . . . 
        . 7 7 7 7 d d d d d d d d . . . 
        7 7 7 7 7 d f f d d f f d 7 7 7 
        . 7 7 7 7 7 7 7 d d d d 7 7 7 7 
        . . 7 7 7 7 7 f f d 7 7 7 7 7 7 
        . . . . 7 7 7 7 7 f 7 7 7 7 7 . 
        . . . . . . 2 7 7 2 7 7 . . . . 
        . . . . . . 2 . 7 2 . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        . . . 2 2 . . . . . . 2 2 . . . 
        `, SpriteKind.ELF)
    pause(50000000000000000000000000000)
    ELFFY.follow(mySprite, 99.9999)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    info.changeScoreBy(50)
    info.player2.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.emperion, assets.tile`myTile9`, function (sprite, location) {
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.COLA, sprites.castle.tileDarkGrass2, function (sprite, location) {
    pause(0)
    info.changeScoreBy(25)
})
scene.onOverlapTile(SpriteKind.ELF, sprites.dungeon.chestClosed, function (sprite, location) {
    info.player2.changeScoreBy(4)
})
scene.onOverlapTile(SpriteKind.hellfox, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.player2.changeScoreBy(1)
    info.changeScoreBy(48)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    ask_if_buy_water = game.ask("m-6 for 450mm")
    if (controller.A.isPressed()) {
        info.changeScoreBy(-450000000)
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . d d d . . . . . . . . 
            . . . . . . . . d d d d . . . . 
            . . . . . . . . . . . d . . . . 
            . . . 9 9 9 9 9 9 d d d . . . . 
            . . . b b b 9 9 9 9 9 . . . . . 
            . . . . 9 b b 9 9 9 9 9 . . . . 
            . . . d d 9 b b 9 9 f 9 9 9 . . 
            d d . d . . 9 b 9 9 9 9 9 f . . 
            . d d d . . . b b 9 9 9 9 9 . . 
            . . . . . . . 9 b b 9 9 9 9 . . 
            . . . . . . . . 9 b b 9 9 9 . . 
            . . . . . . . . . 9 b b 9 9 . . 
            . . . . . . . . . . 9 b 9 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bear)
        mySprite3.follow(mySprite, 97.9)
    }
    if (!(controller.A.isPressed())) {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    }
})
scene.onOverlapTile(SpriteKind.ELF, assets.tile`myTile8`, function (sprite, location) {
    info.player2.changeScoreBy(4)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.COLA, sprites.swamp.swampTile9, function (sprite, location) {
    pause(50000)
    info.changeScoreBy(850)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    ask_if_buy_water = game.ask(" heaven  pet for 10m points ")
    if (controller.A.isPressed()) {
        info.changeScoreBy(-10000000)
        em = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . d . . . . . . . . . . . . . . 
            . . d . . . . . . . . . 5 5 . . 
            . . . d d 1 1 1 1 1 5 5 5 . . . 
            . . 5 . . 9 1 1 1 9 . . 5 . . . 
            . . 5 5 5 1 1 1 1 1 5 5 5 . . 5 
            5 5 5 . . 1 9 9 1 1 d . . 5 5 . 
            5 5 . d 5 1 1 9 9 9 . d 5 . . . 
            . . . 5 d . . . . . . . d d . . 
            . 5 d . . . . . . . . . . . d . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.emperion)
        pause(50000000000000000000000000000)
        em.follow(mySprite, 97)
    }
    if (!(controller.A.isPressed())) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.invis)
    }
})
scene.onOverlapTile(SpriteKind.COLA, sprites.swamp.swampTile14, function (sprite, location) {
    pause(50000)
    info.changeScoreBy(850)
})
sprites.onOverlap(SpriteKind.dragonbestpetinthegame, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.setPosition(67, 40)
    tiles.setTilemap(tilemap`WINTER`)
    controller.moveSprite(mySprite)
})
sprites.onOverlap(SpriteKind.emperion, SpriteKind.Player, function (sprite, otherSprite) {
    tiles.setTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.ELF, assets.tile`myTile13`, function (sprite, location) {
    info.player2.changeScoreBy(4)
})
scene.onOverlapTile(SpriteKind.dragonbestpetinthegame, assets.tile`myTile9`, function (sprite, location) {
    info.player2.changeScoreBy(2)
    info.changeScoreBy(250)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(10)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    tiles.setTilemap(tilemap`level1`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.COLA, sprites.swamp.swampTile7, function (sprite, location) {
    pause(50000)
    info.changeScoreBy(850)
})
scene.onOverlapTile(SpriteKind.ELF, assets.tile`myTile27`, function (sprite, location) {
    info.player2.changeScoreBy(4)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.ELF, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.player2.changeScoreBy(4)
})
scene.onOverlapTile(SpriteKind.WATERSECOND, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.player2.changeScoreBy(1)
    info.changeScoreBy(3)
})
scene.onOverlapTile(SpriteKind.bat, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.changeScoreBy(48)
    info.player2.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.COLA, sprites.swamp.swampTile8, function (sprite, location) {
    pause(50000)
    info.changeScoreBy(850)
})
scene.onOverlapTile(SpriteKind.flam, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.player2.changeScoreBy(1)
    info.changeScoreBy(95)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    ask_if_buy_water = game.ask("cyborg bear for 50m")
    if (controller.A.isPressed()) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e 1 8 8 8 . . . 
            . . . . . . e e e 1 8 f 8 . . . 
            . . . . . . e e e 1 8 8 f . . . 
            . . . . . . e e e e 1 8 8 . . . 
            . . . . . . e e e 1 1 f 8 . . . 
            . . . . . . e 1 1 8 8 f f . . . 
            . . . . . . e e 1 8 8 8 8 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bear)
        mySprite3.follow(mySprite, 97.9)
    }
    if (!(controller.A.isPressed())) {
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    info.changeScoreBy(564)
})
scene.onOverlapTile(SpriteKind.water, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.changeScoreBy(1)
    info.player2.changeScoreBy(0.1)
})
scene.onOverlapTile(SpriteKind.bear, assets.tile`myTile9`, function (sprite, location) {
    info.changeScoreBy(127)
})
scene.onOverlapTile(SpriteKind.COLA, sprites.swamp.swampTile6, function (sprite, location) {
    pause(50000)
    info.changeScoreBy(850)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    ask_if_buy_water = game.ask("dragon for 1b")
    if (controller.A.isPressed()) {
        info.changeScoreBy(-1000000000)
        _99pacegalaxydrag = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . a 
            a a . . . . . . . . . . . . a . 
            . 3 3 3 . f 9 9 f 9 . . . a . . 
            . . a 3 3 9 9 9 8 9 . . a . . . 
            . . . a a 8 9 9 9 a a a . . . . 
            . . . . . 9 f f 9 9 . . . . . . 
            . . . . . 9 9 9 9 9 . . . . . . 
            . . . . . a . . . . a a . . . . 
            . . . . . a . . . . . a . . . . 
            . . . . a . . . . . . . a . . . 
            . . . a . . . . . . . . . a . . 
            `, SpriteKind.dragonbestpetinthegame)
        pause(50000000000000000000000000000)
        _99pacegalaxydrag.follow(mySprite, 100)
    }
})
let _99pacegalaxydrag: Sprite = null
let mySprite2: Sprite = null
let em: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let ELFFY: Sprite = null
let water_2: Sprite = null
let COLA: Sprite = null
let lava_slug: Sprite = null
let h_fox: Sprite = null
let flamortus: Sprite = null
let three_headed: Sprite = null
let bat: Sprite = null
let mySprite5: Sprite = null
let JUICEE: Sprite = null
let ask_if_buy_water = false
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
let water = sprites.create(img`
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 8 9 9 9 9 9 8 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 8 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 8 9 9 9 9 8 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 . 9 . 9 . 9 . . . . . 
    . . . . 9 . 9 . 9 . 9 . . . . . 
    . . . 9 . 9 . 9 . 9 . 9 . . . . 
    `, SpriteKind.water)
water.follow(mySprite, 25)
if (info.score() <= -1) {
    game.over(false, effects.slash)
}
forever(function () {
    pause(20000)
    water.destroy(effects.spray, 100000)
    water = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.water)
    water.follow(mySprite, 25)
})
