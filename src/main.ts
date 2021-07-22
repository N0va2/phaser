const Phaser = require("phaser");
const { LoadScene } = require("./gameScenes/LoadScene");
const { MenuScene } = require("./gameScenes/MenuScene");

let game = new Phaser.Game({
    width: 800,
    height: 600,
    scene:
    [
        LoadScene, MenuScene
    ],
    render: {
        pixelArt: true
    }
});