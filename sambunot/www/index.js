var game = new Phaser.Game(460, 580, Phaser.CANVAS, 'gameDiv');
w = 800, h = 600;
var sound;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');
var player, bgfield, dd;
var keyboard;
var bounds = 900;
    
var basicGame = function(){

}

basicGame.prototype = {
    preload: function(){


            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;

            game.load.image("bg","img/bg.png");
            game.load.image("name","img/name.png");
            game.load.image("start","img/play.png");
            game.load.image("about","img/about.png");
            game.load.image("sambunt","img/sambunt.png");
            game.load.image("sun","img/sun.png");
            game.load.image('bg','img/bebang.png');
            game.load.image('dd','img/dd.png');
            game.load.audio('bgsound','audio/bgsound.wav');
            game.load.spritesheet('soccer','img/jingkee.png',120,120);


    },

    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0,0,bounds,h+100);


        bgfield = game.add.tileSprite(0,0,w+500,bounds,"bg");
        player = game.add.sprite(600,500,'soccer');
        dd = game.add.sprite(560,200,'dd');
        player.scale.x = 1.5;
        player.scale.y = 1.5;


        game.physics.enable(player);
        player.body.collideWorldBounds = true;
        player.animations.add('walk-left',[3,4,5],10,true);
        player.animations.add('walk-up',[9,10,11],10,true);
        player.animations.add('walk-down',[0,1,2],10,true);
        player.animations.add('walk-right',[6,7,8],10,true);
        player.animations.add('walk-left-up',[3,4,5],10,true);
        game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);

        
        sound = game.add.audio('bgsound',1,true);
        sound.loop = true;
        //gameProcess.audioloop(3000);
        sound.play();

    },

    update: function(){
        keyboard = game.input.keyboard.createCursorKeys();


            if (keyboard.left.isDown){
                player.animations.play('walk-left');
                player.body.velocity.x = -90;
            }
            else if(keyboard.up.isDown){
                player.animations.play('walk-up');
                player.body.velocity.y = -90;
                
            }
            else if(keyboard.down.isDown){
                player.animations.play('walk-down');
                player.body.velocity.y = 90;
            }
            else if(keyboard.right.isDown){
                player.animations.play('walk-right');
                player.body.velocity.x = 90;
            }
            else if(keyboard.left.isDown){
                if(keyboard.up.isDown){
                    player.animations.play('walk-left-up');
                }

            }
            
            

            else{
                player.animations.stop();
                player.body.velocity.y = 0;
                player.body.velocity.x = 0;
                player.frame = 1;

            }



    }
}   

game.state.add("playergame", basicGame,true);

var gameProcess = function(){
    "use strict";
    return{
        audioloop:function(time){
            setInterval(function(){
                sound.play();
                console.og('x');
            },time);
        }
    }
};



