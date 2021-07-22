/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Global constants.
 *
 * @ignore
 */

var CONST = {

    /**
     * Phaser Release Version
     *
     * @name Phaser.VERSION
     * @const
     * @type {string}
     * @since 3.0.0
     */
    VERSION: '3.56.0-dev',

    BlendModes: require('./renderer/BlendModes'),

    ScaleModes: require('./renderer/ScaleModes'),

    /**
     * This setting will auto-detect if the browser is capable of suppporting WebGL.
     * If it is, it will use the WebGL Renderer. If not, it will fall back to the Canvas Renderer.
     *
     * @name Phaser.AUTO
     * @const
     * @type {number}
     * @since 3.0.0
     */
    AUTO: 0,

    /**
     * Forces Phaser to only use the Canvas Renderer, regardless if the browser supports
     * WebGL or not.
     *
     * @name Phaser.CANVAS
     * @const
     * @type {number}
     * @since 3.0.0
     */
    CANVAS: 1,

    /**
     * Forces Phaser to use the WebGL Renderer. If the browser does not support it, there is
     * no fallback to Canvas with this setting, so you should trap it and display a suitable
     * message to the user.
     *
     * @name Phaser.WEBGL
     * @const
     * @type {number}
     * @since 3.0.0
     */
    WEBGL: 2,

    /**
     * A Headless Renderer doesn't create either a Canvas or WebGL Renderer. However, it still
     * absolutely relies on the DOM being present and available. This mode is meant for unit testing,
     * not for running Phaser on the server, which is something you really shouldn't do.
     *
     * @name Phaser.HEADLESS
     * @const
     * @type {number}
     * @since 3.0.0
     */
    HEADLESS: 3,

    /**
     * In Phaser the value -1 means 'forever' in lots of cases, this const allows you to use it instead
     * to help you remember what the value is doing in your code.
     *
     * @name Phaser.FOREVER
     * @const
     * @type {number}
     * @since 3.0.0
     */
    FOREVER: -1,

    /**
     * Direction constant.
     *
     * @name Phaser.NONE
     * @const
     * @type {number}
     * @since 3.0.0
     */
    NONE: 4,

    /**
     * Direction constant.
     *
     * @name Phaser.UP
     * @const
     * @type {number}
     * @since 3.0.0
     */
    UP: 5,

    /**
     * Direction constant.
     *
     * @name Phaser.DOWN
     * @const
     * @type {number}
     * @since 3.0.0
     */
    DOWN: 6,

    /**
     * Direction constant.
     *
     * @name Phaser.LEFT
     * @const
     * @type {number}
     * @since 3.0.0
     */
    LEFT: 7,

    /**
     * Direction constant.
     *
     * @name Phaser.RIGHT
     * @const
     * @type {number}
     * @since 3.0.0
     */
    RIGHT: 8,

    SCENES: {
        LOAD: "LOAD",
        MENU: "MENU"
    },

    IMAGE:
    {
        LOGO: "alien_logo.png",
        START: "start_button.png",
        BG1: "background.png",
        BG2: "background2.png",
        BG3: "background3.png",
        BG4: "background4.png",
        BG5: "background5.png",
        BG6: "background6.png",
        BG7: "background7.png",
        BG8: "background8.png",
        BG9: "background9.png",
        BG10: "background10.png",
        BG11: "background11.png",
        BG12: "background12.png"
    },

    SPRITE:
    {
        SHIP: "ship.png",
        BULLET: "bullet.png",
        HEART: "heart.png",
        EMPTYHEART: "empty_heart.png"
    },

    AUDIO:
    {
        TITLEMUSIC: "POL-star-way-short.wav",
        A: "A.mp3",
        A1: "A1.mp3",
        B: "B.mp3",
        C: "C.mp3",
        C1: "C1.mp3",
        D: "D.mp3",
        E: "E.mp3",
        F: "F.mp3"
    }

};

module.exports = CONST;
