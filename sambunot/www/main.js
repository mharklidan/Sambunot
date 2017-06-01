var game = new Phaser.Game(460, 580, Phaser.CANVAS, 'gameDiv');

var bg;
var bgMusic;
var start;
var about;
var name;
var sun;



var mainState =

    {

        preload:function()
        {
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;

            game.load.image("bg","img/bg.png");
            game.load.image("name","img/name.png");
            game.load.image("start","img/play.png");
            game.load.image("about","img/about.png");
            game.load.image("sun","img/sun.png");

            game.load.audio("bgMusic","audio/tunog.ogg");
        },
        create:function()
        {
            bg = game.add.tileSprite(0,0,800,600, "bg");
            bgMusic = game.add.audio("bgMusic",1,true);
            bgMusic.play();
            name = game.add.image(25,50,"name");
            
            start = game.add.button(125,350,"start",umpisa);
            about = game.add.button(410,530,"about",about);
            sun = game.add.image(80,200,"sun");
            sun.scale.x = 1.5;
            sun.scale.y = 1.5;

        },


        update:function ()
        {
            bg.tilePosition.x -=.5;
        },

        audioloop:function()
        {
            setInterval(function(){
                bgMusic.play();
            },5000)
        }
    }
        function umpisa ()
        {
            window.location.href="play.html";
        }
        function about ()
        {
            window.location.href="about.html";
        }


    game.state.add("mainState",mainState);
    game.state.start("mainState");