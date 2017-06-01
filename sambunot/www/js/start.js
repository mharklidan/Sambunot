var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

var background;

var mainState = {

    preload:function(){

    game.load.image("background","img/bg1.png")
    game.load.image("start","img/start.png")
    game.load.image("menu","img/menu.png")
    game.load.image("about","img/about.png")



    },

    create:function(){

    game.add.sprite(0,0,"background");
    start = game.add.button(150,150,"start",start);
    start.scale.x= .8;
    start.scale.y= .8;

    menu = game.add.button(290,350,"menu",menu);
    menu.scale.x= .8;
    menu.scale.y= .8;

    },


    update: function () {

},
}

function start ()
{
     window.location.href="index1.html";
  {start.frame=0}  
setTimeout(function(){
    
start.frame=0;
game._paused=false;
},50);
}

function menu ()
{
     window.location.href="menu.html";
  {menu.frame=0}  
setTimeout(function(){
    
menu.frame=0;
game._paused=false;
},50);
}

function about ()
{
     window.location.href="about.html";
  {about.frame=0}  
setTimeout(function(){
    
about.frame=0;
game._paused=false;
},50);
}



    game.state.add("mainState",mainState);
    game.state.start("mainState");