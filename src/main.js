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
};

const k = kaplay({
    width: settings.scene.width,
    height: settings.scene.height,
    background: settings.colors.background,
});

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

    k.loadSprite('enemy', 'sprites/enemy.png', {
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

// 25 X 19
const stage = [
    'QQQQQQQQQQQQQQQQQQQQQQQQQ',
    'QQQQQQQQQQQQQQQQQQQQQQQQQ',
    'QQQQQQQQQQQQQQQQQQQQQQQQQ',
    '                         ',
    'XXXXXXXX       XXXH   XXX',
    '       X       X      X  ',
    '       X       X      XXX',
    '       X M     X M       ',
    '       XXXXH   XXXXXXXXXX',
    'XXX                      ',
    '  X                      ',
    '  X         E            ',
    'XXX                      ',
    '        XH       XXXH    ',
    '        X        X       ',
    '        X    M   X       ',
    '        X  XXXX  X       ',
    '   M    X  X  X  X   M   ',
    'XXXXXXXXX  X  X  XXXXXXXX',
];

(function main(loader, settings) {
    loader();
    k.scene('game', (stage, settings) => {
        k.layers(['room', 'ui'], 'room');

        k.onDraw(() => {
            k.drawSprite({
                sprite: 'background',
                pos: k.vec2(0, 0),
                width: settings.scene.width,
                height: settings.scene.height,
            });

            k.drawRect({
                width: settings.scene.width,
                height: settings.ui.panel.height,
                pos: k.vec2(0, 0),
                color: settings.colors.panel,
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
        });

        const level = k.addLevel(stage, {
            tileWidth: settings.tile.width,
            tileHeight: settings.tile.height,
            tiles: {
                X: () => [k.sprite('box'), k.area(), k.body({ isStatic: true }), k.layer('room')],
                H: () => [k.sprite('head'), k.area(), k.body({ isStatic: true }), k.layer('room')],
                M: () => [k.sprite('mushroomDry'), k.area(), k.layer('room')],
                E: () => [k.sprite('enemy', { anim: 'run' }), k.area(), k.layer('room')],
            },
        });
        console.log(level);
    });

    k.go('game', stage, settings);
})(loader, settings);
