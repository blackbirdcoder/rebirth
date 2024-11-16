import kaplay from 'kaplay';
import 'kaplay/global';
import { zzfx } from '../public/libs/zzfx.micro.js';

const settings = {
    scene: {
        width: 800,
        height: 600,
    },
    colors: {
        background: '#2A2F4E',
        panel: '#0E071B',
        text: '#0CF1FF',
        blinking: '#FF5000',
    },
    tile: {
        width: 32,
        height: 32,
    },
    ui: {
        panel: {
            height: 80,
        },
        control: {
            width: 200,
            height: 74,
        },
        iconWater: {
            width: 64,
            height: 64,
        },
        iconDrop: {
            width: 24,
            height: 24,
        },
        iconMushroom: {
            width: 24,
            height: 24,
        },
        iconStage: {
            width: 44,
            height: 44,
        },
    },
    game: {
        limitComponent: 5,
    },
    font: {
        size: {
            xs: 22,
        },
    },
    player: {
        speed: 100,
        delay: 0.4,
    },
    effects: {
        mushroom: {
            hit: [1.3, 0.05, 514, 0.01, 0.1, 0.17, 1, 2.4, -1, 35, 0, 0, 0, 0, 0, 0, 0.05, 1, 0.04, 0, 0],
            grow: [1.3, 0, 492, 0.15, 0.04, 0.13, 0, 2.8, 0, 30, 0, 0, 0, 0, 0, 0, 0.03, 0.74, 0.02, 0, -1212],
        },
        drops: {
            take: [1.3, 0, 208, 0.01, 0.06, 0.12, 0, 1.5, -4, 0, 433, 0.08, 0.01, 0.3, 7.4, 0, 0.07, 0.73, 0.04, 0, 0],
        },
        pause: {
            click: [1.3, 0, 441, 0.03, 0, 0.18, 0, 1.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.81, 0.03, 0, 129],
        },
        game: {
            loser: [1.3, 0, 220, 0.12, 0.18, 0.58, 2, 0.9, -8.9, 0, 0, 0, 0, 0, 0, 0.9, 0, 0.49, 0.14, 0, 0],
            restart: [1.3, 0, 685, 0.02, 0.21, 0.35, 0, 1.3, 3, 0, 112, 0.05, 0.04, 0, 10, 0, 0.04, 0.95, 0.26, 0, 0],
            win: [
                1.3, 0, 349.2282, 0.24, 0.21, 0.33, 0, 0.8, 0, 0, 231, 0.01, 0.09, 0, 0, 0, 0.01, 0.87, 0.27, 0.01, 7,
            ],
        },
    },
};

const stage = {
    level: {
        1: {
            blocks: [
                {
                    spriteName: 'box',
                    pos: { x: 0, y: 160 },
                    size: { width: 256, height: settings.tile.height },
                    tag: 'box',
                },
                {
                    spriteName: 'box',
                    pos: { x: 256, y: 160 },
                    size: { width: settings.tile.width, height: 96 },
                    tag: 'box',
                },
                {
                    spriteName: 'box',
                    pos: { x: 256, y: 256 },
                    size: { width: 96, height: settings.tile.height },
                    tag: 'box',
                },
                {
                    spriteName: 'head',
                    pos: { x: 352, y: 256 },
                    size: { width: settings.tile.width, height: settings.tile.height },
                    tag: 'head',
                },
                {
                    spriteName: 'box',
                    pos: { x: 512, y: 256 },
                    size: { width: 288, height: settings.tile.height },
                    tag: 'box',
                },
                {
                    spriteName: 'box',
                    pos: { x: 512, y: 160 },
                    size: { width: settings.tile.width, height: 96 },
                    tag: 'box',
                },
                {
                    spriteName: 'box',
                    pos: { x: 544, y: 160 },
                    size: { width: 64, height: settings.tile.height },
                    tag: 'box',
                },
                {
                    spriteName: 'head',
                    pos: { x: 608, y: 160 },
                    size: { width: settings.tile.width, height: settings.tile.height },
                    tag: 'head',
                },
                {
                    spriteName: 'box',
                    pos: { x: 0, y: 416 },
                    size: { width: 128, height: settings.tile.height },
                    tag: 'box',
                },
                {
                    spriteName: 'box',
                    pos: { x: 128, y: 352 },
                    size: { width: settings.tile.width, height: 96 },
                    tag: 'box',
                },
                {
                    spriteName: 'head',
                    pos: { x: 160, y: 352 },
                    size: { width: settings.tile.width, height: settings.tile.height },
                    tag: 'head',
                },
                {
                    spriteName: 'box',
                    pos: { x: 0, y: 568 },
                    size: { width: 320, height: settings.tile.height },
                    tag: 'box',
                },
                {
                    spriteName: 'box',
                    pos: { x: 288, y: 472 },
                    size: { width: settings.tile.width, height: 96 },
                    tag: 'box',
                },
                {
                    spriteName: 'box',
                    pos: { x: 320, y: 472 },
                    size: { width: 64, height: settings.tile.height },
                    tag: 'box',
                },
                {
                    spriteName: 'head',
                    pos: { x: 384, y: 472 },
                    size: { width: settings.tile.width, height: settings.tile.height },
                    tag: 'head',
                },
                {
                    spriteName: 'box',
                    pos: { x: 512, y: 568 },
                    size: { width: 288, height: settings.tile.height },
                    tag: 'box',
                },
                {
                    spriteName: 'box',
                    pos: { x: 512, y: 406 },
                    size: { width: settings.tile.width, height: 162 },
                    tag: 'box',
                },
                {
                    spriteName: 'box',
                    pos: { x: 544, y: 406 },
                    size: { width: 96, height: settings.tile.height },
                    tag: 'box',
                },
                {
                    spriteName: 'head',
                    pos: { x: 640, y: 406 },
                    size: { width: settings.tile.width, height: settings.tile.height },
                    tag: 'head',
                },
            ],
            organic: [
                {
                    spriteName: 'mushroomDry',
                    pos: { x: 320, y: 224 },
                    tag: 'mushroom',
                },
                {
                    spriteName: 'mushroomDry',
                    pos: { x: 704, y: 224 },
                    tag: 'mushroom',
                },
                {
                    spriteName: 'mushroomDry',
                    pos: { x: 64, y: 384 },
                    tag: 'mushroom',
                },
                {
                    spriteName: 'mushroomDry',
                    pos: { x: 224, y: 536 },
                    tag: 'mushroom',
                },
                {
                    spriteName: 'mushroomDry',
                    pos: { x: 721, y: 536 },
                    tag: 'mushroom',
                },
            ],
            bonus: [
                {
                    spriteName: 'bonus',
                    tag: 'bonus',
                    quantity: 5,
                },
            ],
            enemies: [
                {
                    spriteName: 'enemy',
                    pos: { x: 320, y: 320 },
                    tag: 'enemyShoot',
                },
                {
                    spriteName: 'enemy',
                    pos: { x: 0, y: 0 },
                    tag: 'enemy',
                },
                {
                    spriteName: 'enemy',
                    pos: { x: 0, y: 0 },
                    tag: 'enemy',
                },
            ],
        },
    },
};

const k = kaplay({
    width: settings.scene.width,
    height: settings.scene.height,
    background: settings.colors.background,
    debugKey: 'd', // Temp option
});

k.debug.inspect = true; // DEBUG

function loader() {
    const fileName = [
        'box',
        'head',
        'mushroomDry',
        'mushroomLife',
        'background',
        'control',
        'iconWaterOn',
        'iconWaterOff',
        'iconDrop',
        'iconMushroom',
        'iconST',
        'bonus',
        'lightning',
        'lightningDown',
        'lightningUp',
        'lightningRight',
        'drops',
    ];

    for (const name of fileName) {
        k.loadSprite(`${name}`, `sprites/${name}.png`);
    }

    const fileNameAnimated = ['enemy', 'player'];

    for (const name of fileNameAnimated) {
        k.loadSprite(`${name}`, `sprites/${name}.png`, {
            sliceX: 6,
            sliceY: 1,
            anims: {
                run: {
                    from: 0,
                    to: 5,
                    loop: true,
                    speed: 5,
                },
            },
        });
    }

    k.loadFont('Silkscreen', 'fonts/Silkscreen.woff2');
    k.loadMusic('bgsound', 'music/fin.ogg');
}

(function main(loader, settings) {
    loader();

    const dataManger = {
        count: {
            drops: 0,
            mushroom: 0,
            stage: 1,
        },
        activate: {
            watering: false,
            pause: false,
            win: false,
            loser: false,
        },
    };

    const notificationWindow = function (txt, cbg, ct, ws, fs, res) {
        const restartText = 'Press restart <R>';
        const style = {
            size: fs.xs * 3,
            font: 'Silkscreen',
            styles: {
                base: {
                    color: k.rgb(ct),
                },
            },
        };
        const window = k.add([k.rect(k.width(), k.height()), k.color(cbg), k.layer('ui')]);
        window.add([k.text(`[base]${txt}[/base]`, style), k.anchor('center'), k.pos(ws.width / 2, ws.height / 2)]);
        if (res) {
            style['size'] = 25;
            window.add([
                k.text(`[base]${restartText}[/base]`, style),
                k.anchor('center'),
                k.pos(ws.width / 2, (ws.height + 100) / 2),
            ]);
        }
        return window;
    };

    const audioEffect = function (audio) {
        zzfx(...audio);
    };

    k.layers(['room', 'ui'], 'room');

    k.scene('start', () => {
        k.onKeyPress('enter', () => {
            k.go('game', stage, settings, dataManger);
        });
    });

    const music = k.play('bgsound');
    music.volume = 8.0;
    music.loop = true;
    music.stop();

    k.scene('game', (stage, settings, dataManger, ms) => {
        music.play();
        k.onDraw(() => {
            (function background() {
                k.drawSprite({
                    sprite: 'background',
                    pos: k.vec2(0, 0),
                    width: settings.scene.width,
                    height: settings.scene.height,
                });
            })();

            (function creatingSimpleUI(dm) {
                k.drawRect({
                    pos: k.vec2(0, 0),
                    color: settings.colors.panel,
                    width: settings.scene.width,
                    height: settings.ui.panel.height,
                });

                k.drawSprite({
                    sprite: 'control',
                    pos: k.vec2(0, 0),
                    width: settings.ui.control.width,
                    height: settings.ui.control.height,
                });
                if (dm.activate.watering) {
                    k.drawSprite({
                        sprite: 'iconWaterOn',
                        pos: k.vec2(settings.scene.width / 2, 8),
                        width: settings.ui.iconWater.width,
                        height: settings.ui.iconWater.height,
                    });
                } else {
                    k.drawSprite({
                        sprite: 'iconWaterOff',
                        pos: k.vec2(settings.scene.width / 2, 8),
                        width: settings.ui.iconWater.width,
                        height: settings.ui.iconWater.height,
                    });
                }

                k.drawSprite({
                    sprite: 'iconDrop',
                    pos: k.vec2(settings.scene.width - 100, 3),
                    width: settings.ui.iconDrop.width,
                    height: settings.ui.iconDrop.height,
                });

                k.drawSprite({
                    sprite: 'iconMushroom',
                    pos: k.vec2(settings.scene.width - 100, 28),
                    width: settings.ui.iconMushroom.width,
                    height: settings.ui.iconMushroom.height,
                });

                k.drawSprite({
                    sprite: 'iconST',
                    pos: k.vec2(settings.scene.width - 110, 42),
                    width: settings.ui.iconStage.width,
                    height: settings.ui.iconStage.height,
                });
            })(dataManger);
        });

        (function auxiliaryBarrierUI() {
            const barrier = k.add([
                k.area({ shape: new Rect(k.vec2(0, 78), k.width(), 0.1) }),
                k.pos(0, 0),
                k.body({ isStatic: true }),
                k.layer('room'),
            ]);
            barrier.onCollide((other) => {
                if (other.tags[0] === 'lightning') {
                    other.destroy();
                }
            });
        })();

        const textCounterUI = (function textCounterInitUI(dm, st) {
            const nameComp = ['drops', 'mushroom', 'stage'];
            const setTextGO = {
                drops: null,
                mushroom: null,
                stage: null,
            };
            const counters = [dm.count.drops, dm.count.mushroom, dm.count.stage];
            const posY = [3, 30, 53];
            const style = {
                size: st.font.size.xs,
                width: 80,
                font: 'Silkscreen',
                styles: {
                    base: {
                        color: k.rgb(st.colors.text),
                    },
                },
            };

            for (let i = 0; i < counters.length; i++) {
                setTextGO[nameComp[i]] = k.add([
                    k.pos(st.scene.width - 70, posY[i]),
                    k.text(`[base]${counters[i]}[/base]`, style),
                ]);
            }

            for (let i = 0; i < counters.length - 1; i++) {
                k.add([k.pos(st.scene.width - 50, posY[i]), k.text(`[base]/${st.game.limitComponent}[/base]`, style)]);
            }

            return setTextGO;
        })(dataManger, settings);

        const levelGO = (function buildLevel(stg, num, tile) {
            const levelObjects = {
                blocks: [],
                organic: [],
                bonus: [],
                enemies: [],
                scatterBonus: function (bonusData) {
                    for (const item of bonusData) {
                        for (let i = 0; i < item.quantity; i++) {
                            const pos = { x: k.randi(768), y: k.randi(100, 568) };
                            levelObjects.bonus.push(
                                k.add([
                                    k.sprite(item.spriteName),
                                    k.pos(pos.x, pos.y),
                                    k.area({
                                        shape: new k.Rect(k.vec2(0, 0), tile.width, tile.height),
                                        collisionIgnore: ['enemy'],
                                    }),
                                    k.body(),
                                    k.layer('room'),
                                    item.tag,
                                ])
                            );
                        }
                    }
                },
            };

            for (const item of stg.level[num].blocks) {
                levelObjects.blocks.push(
                    k.add([
                        k.sprite(item.spriteName, { tiled: true, width: item.size.width, height: item.size.height }),
                        k.pos(item.pos.x, item.pos.y),
                        k.body({ isStatic: true }),
                        k.area({
                            shape: new k.Rect(k.vec2(0, 0), item.size.width, item.size.height),
                        }),
                        k.layer('room'),
                        item.tag,
                    ])
                );
            }
            for (const item of stg.level[num].organic) {
                levelObjects.organic.push(
                    k.add([
                        k.sprite(item.spriteName),
                        k.pos(item.pos.x, item.pos.y),
                        k.body({ isStatic: true }),
                        k.area({
                            shape: new k.Rect(k.vec2(0, 0), tile.width, tile.height),
                            collisionIgnore: ['hero'],
                        }),
                        k.layer('room'),
                        item.tag,
                        { wateringCounter: 0 },
                    ])
                );
            }
            for (const item of stg.level[num].enemies) {
                levelObjects.enemies.push(
                    k.add([
                        k.sprite(item.spriteName, { anim: 'run' }),
                        k.pos(item.pos.x, item.pos.y),
                        k.body({ isStatic: true }),
                        k.area({
                            shape: new k.Rect(k.vec2(0, 16), 64, 16),
                            collisionIgnore: ['enemy', 'enemyShoot', 'bonus', 'mushroom', 'mushroomLife'],
                        }),
                        k.layer('room'),
                        k.timer(),
                        item.tag,
                    ])
                );
            }
            levelObjects.scatterBonus(stg.level[num].bonus);
            return levelObjects;
        })(stage, dataManger.count.stage, settings.tile);

        (function mushroomsHandling(lgo, lim, tile, txtCmp, dm, bli, eff, au) {
            const blinking = function (mushroom, bli) {
                mushroom.use('color');
                mushroom.color = k.rgb(bli);
                k.wait(0.2, () => {
                    mushroom.color = k.rgb(255, 255, 255);
                });
            };

            for (const mushroom of lgo.organic) {
                mushroom.onCollide((other) => {
                    if (other.tags[0] === 'drops') {
                        other.destroy();
                        blinking(mushroom, bli);
                        ++mushroom.wateringCounter;
                        if (mushroom.wateringCounter <= 4) au(eff.hit);
                        if (mushroom.wateringCounter === lim) {
                            const pos = { x: mushroom.pos.x, y: mushroom.pos.y };
                            mushroom.destroy();
                            k.add([
                                k.sprite('mushroomLife'),
                                k.pos(pos.x, pos.y),
                                k.body({ isStatic: true }),
                                k.area({
                                    shape: new k.Rect(k.vec2(0, 0), tile.width, tile.height),
                                    collisionIgnore: ['hero'],
                                }),
                                k.layer('room'),
                                'mushroomLife',
                            ]);
                            au(eff.grow);
                            ++dm.count.mushroom;
                            txtCmp.mushroom.text = `[base]${dm.count.mushroom}[/base]`;
                        }
                    }
                });
            }
        })(
            levelGO,
            settings.game.limitComponent,
            settings.tile,
            textCounterUI,
            dataManger,
            settings.colors.blinking,
            settings.effects.mushroom,
            audioEffect
        );

        (function enemiesHandling(lgo, dm) {
            const enemyShoot = {
                enemy: null,
                pos: { x: undefined, y: undefined },
            };

            for (const enemy of lgo.enemies) {
                if (enemy.tags[0] === 'enemyShoot') {
                    enemyShoot['enemy'] = enemy;
                    enemyShoot.pos.x = enemy.pos.x;
                    enemyShoot.pos.y = enemy.pos.y;
                }

                if (enemy.tags[0] === 'enemy') {
                    enemy.pos.x = 1036;
                    enemy.pos.y = k.randi(80, 537);
                    enemy.applyImpulse(vec2(k.randi(-50, -151), 0));

                    enemy.onUpdate(() => {
                        if (Math.floor(enemy.pos.x) < 0) {
                            enemy.pos.x = 1036;
                            enemy.pos.y = k.randi(80, 537);
                        }
                    });
                }
            }

            const enemyShootMove = function (startPosX, posY, endPosX, speed) {
                k.wait(2, () => {
                    enemyShoot.enemy
                        .tween(
                            k.vec2(startPosX, posY),
                            k.vec2(endPosX, posY),
                            speed,
                            (val) => (enemyShoot.enemy.pos = val)
                        )
                        .then(() => {
                            enemyShootMove(endPosX, enemyShoot.pos.y, startPosX, 2);
                        });
                });
            };
            enemyShootMove(enemyShoot.pos.x, enemyShoot.pos.y, enemyShoot.pos.x + 264, 2);

            const enemyShootThrowingLightning = function () {
                const directions = [
                    { lightning: k.LEFT },
                    { lightningDown: k.DOWN },
                    { lightningUp: k.UP },
                    { lightningRight: k.RIGHT },
                ];

                const createLightning = function () {
                    if (dm.activate.pause) {
                        return false;
                    }
                    const speeds = [175, 255, 300];
                    const currentLightning = directions[k.randi(directions.length)];
                    const lightning = add([
                        k.sprite(Object.keys(currentLightning)[0]),
                        k.pos(enemyShoot.enemy.pos.x, enemyShoot.enemy.pos.y),
                        k.area({ shape: new Rect(k.vec2(10, 10), 13, 16), collisionIgnore: ['enemy', 'bonus'] }),
                        k.body({ isStatic: true }),
                        k.move(Object.values(currentLightning)[0], speeds[k.randi(speeds.length)]),
                        k.offscreen({ destroy: true }),
                        'lightning',
                    ]);
                };

                k.wait(2, () => {
                    k.loop(1, () => {
                        createLightning();
                    });
                });
            };
            enemyShootThrowingLightning();
        })(levelGO, dataManger);

        const player = (function buildPlayer() {
            return k.add([
                k.sprite('player', { anim: 'run' }),
                k.area({ shape: new k.Rect(k.vec2(0, 10), 64, 24), collisionIgnore: ['mushroom', 'mushroomLife'] }),
                k.pos(32, 192),
                k.body(),
                k.layer('room'),
                'hero',
            ]);
        })();

        (function playerMovement(pl, st) {
            const dir = k.vec2(0, 0);
            const abilityMove = {
                x: true,
                y: true,
            };
            const repel = () => {
                if (dir.x) {
                    dir.x *= -1;
                    dir.y = 0;
                    pl.move(dir);
                    abilityMove.x = false;
                    k.wait(st.player.delay, () => (abilityMove.x = true));
                }
                if (dir.y) {
                    dir.x = 0;
                    dir.y *= -1;
                    pl.move(dir);
                    abilityMove.y = false;
                    k.wait(st.player.delay, () => (abilityMove.y = true));
                }
            };

            k.onKeyDown('right', () => {
                if (abilityMove.x) {
                    dir.x = st.player.speed;
                    dir.y = 0;
                }
            });

            k.onKeyDown('left', () => {
                if (abilityMove.x) {
                    dir.x = -st.player.speed;
                    dir.y = 0;
                }
            });

            k.onKeyDown('up', () => {
                if (abilityMove.y) {
                    dir.x = 0;
                    dir.y = -st.player.speed;
                }
            });

            k.onKeyDown('down', () => {
                if (abilityMove.y) {
                    dir.x = 0;
                    dir.y = st.player.speed;
                }
            });

            pl.onUpdate(() => {
                const plPosX = Math.floor(pl.pos.x);
                const plPosY = Math.floor(pl.pos.y);

                if (plPosX > 0 && plPosX < 736 && plPosY > 73 && plPosY < 568) {
                    pl.move(dir);
                } else {
                    repel();
                }
            });

            pl.onCollide(() => {
                repel();
            });
        })(player, settings);

        (function playerExternalHandler(pl, dm, st, lgo, stg, txtCmp, eff, nw, au) {
            let winnerWindow = null;
            const notificationText = {
                win: 'you are a winner',
                loser: 'you loser',
            };
            pl.onCollide((other) => {
                if (other.tags[0] === 'bonus') {
                    au(eff.drops.take);
                    other.destroy();
                    ++dm.count.drops;
                    txtCmp.drops.text = `[base]${dm.count.drops}[/base]`;
                }
            });
            pl.onUpdate(() => {
                if (dm.count.drops == st.game.limitComponent) {
                    dm.activate.watering = true;
                }
                if (dm.count.mushroom == st.game.limitComponent) {
                    dm.activate.watering = false;
                    dm.activate.win = true;
                    music.stop();
                    au(eff.game.win);
                    pl.destroy();
                    winnerWindow = nw(
                        notificationText.win,
                        st.colors.panel,
                        st.colors.text,
                        st.scene,
                        st.font.size.xs,
                        true
                    );
                    k.get().forEach((item) => {
                        item.paused = !dm.activate.pause;
                    });
                }
            });

            k.onKeyPress('space', () => {
                if (dm.activate.watering && !dm.activate.pause) {
                    --dm.count.drops;
                    txtCmp.drops.text = `[base]${dm.count.drops}[/base]`;
                    const currentDrops = k.add([
                        k.sprite('drops'),
                        k.pos(pl.pos.x + 16, pl.pos.y),
                        k.body({ isStatic: true }),
                        k.area({ collisionIgnore: ['hero', 'enemy', 'lightning', 'shootEnemy'] }),
                        k.move(k.DOWN, 150),
                        k.layer('room'),
                        'drops',
                    ]);
                    if (dm.count.drops <= 0) {
                        dm.activate.watering = false;
                        k.wait(2, () => {
                            lgo.scatterBonus(stg.level[dm.count.stage].bonus);
                        });
                    }
                }
            });

            pl.onCollide((other) => {
                if (other.tags[0] === 'enemy' || other.tags[0] === 'shootEnemy' || other.tags[0] === 'lightning') {
                    au(eff.game.loser);
                    pl.destroy();
                    music.stop();
                    dm.activate.loser = true;
                    winnerWindow = nw(
                        notificationText.loser,
                        st.colors.panel,
                        st.colors.text,
                        st.scene,
                        st.font.size.xs,
                        true
                    );
                    k.get().forEach((item) => {
                        item.paused = !dm.activate.pause;
                    });
                }
            });
        })(
            player,
            dataManger,
            settings,
            levelGO,
            stage,
            textCounterUI,
            settings.effects,
            notificationWindow,
            audioEffect
        );

        (function pauseHandler(dm, clr, sc, fs, eff, nw, au) {
            let pausedWindow = null;
            const pauseText = 'pause';
            k.onKeyPress('p', () => {
                if (!dm.activate.win && !dm.activate.loser) {
                    k.get().forEach((item) => {
                        item.paused = !dm.activate.pause;
                    });
                    dm.activate.pause = !dm.activate.pause;
                    if (dm.activate.pause) {
                        music.stop();
                        au(eff.click);
                        pausedWindow = nw(pauseText, clr.panel, clr.text, sc, fs, false);
                    } else {
                        music.play();
                        au(eff.click);
                        pausedWindow.destroy();
                    }
                }
            });
        })(
            dataManger,
            settings.colors,
            settings.scene,
            settings.font.size,
            settings.effects.pause,
            notificationWindow,
            audioEffect
        );

        k.onKeyPress('r', () => {
            if (!dataManger.activate.pause) {
                audioEffect(settings.effects.game.restart);
                k.get().forEach((item) => item.destroy());
                dataManger = {
                    count: {
                        drops: 0,
                        mushroom: 0,
                        stage: 1,
                    },
                    activate: {
                        watering: false,
                        pause: false,
                        win: false,
                        loser: false,
                    },
                };
                k.go('game', stage, settings, dataManger);
            }
        });
    });

    k.go('start');
})(loader, settings);
