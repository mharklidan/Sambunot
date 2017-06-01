var w = 800, h = 600;
var sound;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');
var player, bgfield, dd;
var restart;
var quit;
var keyboard;
var bounds = 900;

var basicGame = function(){

}

basicGame.prototype = {
    preload: function(){
        game.load.image('bg','img/bebang.png');
        game.load.image('dd','img/dd.png');
        game.load.audio('bgsound','audio/bgsound.wav');
        game.load.spritesheet('soccer','img/jingkee.png',120,120);
		game.load.image("restart","img/restart.png");
		game.load.image("quit","img/quit.png");


    },

    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.setBounds(0,0,bounds,h+100);


        bgfield = game.add.tileSprite(0,0,w+500,bounds,"bg");
        player = game.add.sprite(600,500,'soccer');
        dd = game.add.sprite(500,100,'dd');
        player.scale.x = 1.5;
        player.scale.y = 1.5;
		
		
		restart = game.add.button(20,10,"restart",back);
		restart.scale.x= 1;
		restart.scale.y= 1;

		quit = game.add.button(280,10,"quit",quit);
		quit.scale.x= 1;
		quit.scale.y= 1;


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
function back(){
     window.location.href="index.html";
  {restart.frame=0}  
setTimeout(function(){
    
restart.frame=0;
game._paused=false;
},50);
}


function quit(){
     window.location.href="index.html";
  {quit.frame=0}  
setTimeout(function(){
    
quit.frame=0;
game._paused=false;
},50);
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
game.state.add("mainState",mainState);
game.state.start("mainState");



