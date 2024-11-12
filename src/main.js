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
        'background',
        'control',
        'iconWaterOn',
        'iconWaterOff',
        'iconDrop',
        'iconMushroom',
        'iconST',
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

// 25 X 19
// const stage = [
//     'QQQQQQQQQQQQQQQQQQQQQQQQQ',
//     'QQQQQQQQQQQQQQQQQQQQQQQQQ',
//     'QQQQQQQQQQQQQQQQQQQQQQQQQ',
//     '                         ',
//     'XXXXXXXX       XXXH   XXX',
//     '       X       X      XQQ',
//     ' P     X       X      XXX',
//     '       X M     X M       ',
//     '       XXXXH   XXXXXXXXXX',
//     'XXX                      ',
//     'QQX                      ',
//     'QQX         E            ',
//     'XXX                      ',
//     '        XH       XXXH    ',
//     '        X        X       ',
//     '        X    M   X       ',
//     '        X  XXXX  X       ',
//     '   M    X  XQQX  X   M   ',
//     'XXXXXXXXX  XQQX  XXXXXXXX',
// ];

// 19 X 25

const stage = {
    level: {
        1: [
            {
                spriteName: 'box',
                pos: { x: 0, y: 160 },
                size: { width: 256, height: settings.tile.height },
            },
            {
                spriteName: 'box',
                pos: { x: 256, y: 160 },
                size: { width: settings.tile.width, height: 96 },
            },
            {
                spriteName: 'box',
                pos: { x: 256, y: 256 },
                size: { width: 96, height: settings.tile.height },
            },
            {
                spriteName: 'head',
                pos: { x: 352, y: 256 },
                size: { width: settings.tile.width, height: settings.tile.height },
            },
            {
                spriteName: 'box',
                pos: { x: 512, y: 256 },
                size: { width: 288, height: settings.tile.height },
            },
            {
                spriteName: 'box',
                pos: { x: 512, y: 160 },
                size: { width: settings.tile.width, height: 96 },
            },
            {
                spriteName: 'box',
                pos: { x: 544, y: 160 },
                size: { width: 64, height: settings.tile.height },
            },
            {
                spriteName: 'head',
                pos: { x: 608, y: 160 },
                size: { width: settings.tile.width, height: settings.tile.height },
            },
        ],
    },
};

(function main(loader, settings) {
    loader();

    const dataManger = {
        count: {
            drops: 0,
            mushroom: 0,
            stage: 1,
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

            (function creatingSimpleUI() {
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

                k.drawSprite({
                    sprite: 'iconWaterOff',
                    pos: k.vec2(settings.scene.width / 2, 8),
                    width: settings.ui.iconWater.width,
                    height: settings.ui.iconWater.height,
                });

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
            })();
        });

        (function auxiliaryBarrierUI() {
            k.add([
                k.area({ shape: new Rect(k.vec2(0, 78), k.width(), 0.1) }),
                k.pos(0, 0),
                k.body({ isStatic: true }),
                k.layer('room'),
            ]);
        })();

        const textCounterUI = (function textCounterInitUI(dm, st) {
            const setTextGO = [];
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
                setTextGO[i] = k.add([
                    k.pos(st.scene.width - 70, posY[i]),
                    k.text(`[base]${counters[i]}[/base]`, style),
                ]);
            }

            for (let i = 0; i < counters.length - 1; i++) {
                k.add([k.pos(st.scene.width - 50, posY[i]), k.text(`[base]/${st.game.limitComponent}[/base]`, style)]);
            }

            return setTextGO;
        })(dataManger, settings);

        (function buildLevel(stg, num) {
            for (const level of stg.level[num]) {
                k.add([
                    k.sprite(level.spriteName, { tiled: true, width: level.size.width, height: level.size.height }),
                    k.pos(level.pos.x, level.pos.y),
                    k.body({ isStatic: true }),
                    k.area({
                        shape: new k.Rect(k.vec2(0, 0), level.size.width, level.size.height),
                    }),
                    k.layer('room'),
                ]);
            }
        })(stage, dataManger.count.stage);

        const player = (function buildPlayer() {
            return k.add([
                k.sprite('player', { anim: 'run' }),
                k.area({ shape: new k.Rect(k.vec2(0, 10), 64, 24) }),
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
    });

    k.go('game', stage, settings, dataManger);
})(loader, settings);
