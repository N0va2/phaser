import Phaser from "phaser";
import CONST from "../const";

export class LoadScene extends Phaser.Scene{
    constructor() {
        super({
            key: CONST.SCENES.LOAD
        })
    }

    loadImages()
    {
        this.load.setPath("./assets/image");

        for(let prop in CONST.IMAGE)
        {
            this.load.image(CONST.IMAGE[prop], CONST.IMAGE[prop]);
        }
    }

    loadAudio()
    {
        this.load.setPath("./assets/audio");

        for(let prop in CONST.AUDIO)
        {
            this.load.audio(CONST.AUDIO[prop], CONST.AUDIO[prop]);
        }
    }

    /*loadSprites(frameConfig?: Phaser.Loader.FileTypes.ImageFrameConfig)
    {
        this.load.setPath("./assets/sprite");

        for(let prop in const.SPRITE)
        {
            this.load.spritesheet(const.SPRITE[prop], const.SPRITE[prop], frameConfig);
        }
    }*/

    preload(){

        //load images, sounds

        this.loadImages();
        this.loadAudio();

        this.load.spritesheet("ship", "./assets/sprite/ship.png", 
        {
            frameHeight: 75,
            frameWidth: 99
        });

        //this.load.audio("title_music", "./assets/audio/POL-star-way-short.wav");


        //create loading bar

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })

        this.load.on("progress", (percent) =>{
            loadingBar.fillRect(0, this.game.renderer.height/2, this.game.renderer.width * percent, 50);
            console.log(percent);
        })

        this.load.on("complete", () =>
        {
            console.log("done")
        })

    }

    create() {
        this.scene.start(CONST.SCENES.MENU);
    }
}