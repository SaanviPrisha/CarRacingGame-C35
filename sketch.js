var database;
var playerCount = 0;
var gameState = 0;
var form, game, player;

function setup(){
    createCanvas(500,500);
    
    database = firebase.database()

    game = new Game()
    game.getGameState();
    game.updateGameState(0);
    game.start();
}

function draw(){
    
}

