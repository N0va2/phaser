import CONST from "../const";

export class MenuScene extends Phaser.Scene{
    constructor() {
        super({
            key: CONST.SCENES.MENU
        })
    }

    init(data: any)
    {
        console.log(data);
        console.log("I got it");
    }

    create(){


        //Draw logo, background, start button

        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, CONST.IMAGE.LOGO).setDepth(1);
        this.add.image(0,0, CONST.IMAGE.BG1).setOrigin(0).setDepth(0);
        let startButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, CONST.IMAGE.START).setDepth(1);
        startButton.scale = 0.2;

        //Add interactivity to start button
        startButton.setInteractive();

        startButton.on("pointerup", () =>
        {
            this.game.scene.start(CONST.SCENES.GAME)
        })

        //play title music
        this.sound.pauseOnBlur = false;
        this.sound.play(CONST.AUDIO.TITLEMUSIC,
        {
            loop: true
        })

    }
}