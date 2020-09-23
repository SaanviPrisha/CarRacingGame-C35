class Game {
    constructor() {

    }
    getGameState() {
        var countRef = database.ref("gameState")
        countRef.on("value", function(data) {
            gameState = data.val()
        })
    }
    //updates the number of the player count
    updateGameState(State) {
        database.ref("/").update({
            gameState: State
        })
    }
    start() {
        if(gameState == 0) {
            player = new Player()
            player.getCount()

            form = new Form()
            form.display();
        }
    }
}