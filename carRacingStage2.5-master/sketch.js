var canvas, backgroundImage;
var firebase;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var player1, player2;
var player1Image, player2Image;

var ground;

function preload(){
  player1Image = loadImage("images/stick figure.png")
  player2Image = loadImage("images/stick figure.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  //drawSprites();
}
