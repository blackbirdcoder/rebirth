import kaplay from 'kaplay';
import 'kaplay/global';

const settings = {
    scene: {
        width: 800,
        height: 600,
    },
    colors: {
        background: '#2A2F4E',
        panel: '#0E071B',
        text: '#0CF1FF',
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
        },
    };

    k.scene('game', (stage, settings, dataManger) => {
        k.layers(['room', 'ui'], 'room');

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

        console.log(levelGO);

        (function mushroomsHandling(lgo, lim, tile, txtCmp, dm) {
            for (const mushroom of lgo.organic) {
                mushroom.onCollide((other) => {
                    if (other.tags[0] === 'drops') {
                        other.destroy();
                        ++mushroom.wateringCounter;
                        console.log(mushroom.wateringCounter);
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
                            ++dm.count.mushroom;
                            txtCmp.mushroom.text = `[base]${dm.count.mushroom}[/base]`;
                        }
                    }
                });
            }
        })(levelGO, settings.game.limitComponent, settings.tile, textCounterUI, dataManger);

        (function enemiesHandling(lgo) {
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
                k.wait(2, () => {
                    k.loop(1, () => {
                        const speeds = [175, 255, 300];
                        const currentLightning = directions[k.randi(directions.length)];
                        const lightning = add([
                            k.sprite(Object.keys(currentLightning)[0]),
                            k.pos(enemyShoot.enemy.pos.x, enemyShoot.enemy.pos.y),
                            k.area({ collisionIgnore: ['enemy', 'bonus'] }),
                            k.body({ isStatic: true }),
                            k.move(Object.values(currentLightning)[0], speeds[k.randi(speeds.length)]),
                            k.offscreen({ destroy: true }),
                            'lightning',
                        ]);
                    });
                });
            };
            enemyShootThrowingLightning();
        })(levelGO);

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

        (function playerExternalHandler(pl, dm, st, lgo, stg, txtCmp) {
            pl.onCollide((other) => {
                if (other.tags[0] === 'bonus') {
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
                    console.log('YOU WIN! NEXT STAGE ...');
                }
            });

            k.onKeyPress('space', () => {
                if (dm.activate.watering) {
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
        })(player, dataManger, settings, levelGO, stage, textCounterUI);
    });

    k.go('game', stage, settings, dataManger);
})(loader, settings);
