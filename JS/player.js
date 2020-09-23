class Player {
    constructor() {

    }
    getCount() {
        var countRef = database.ref("playerCount")
        countRef.on("value", function(data) {
            playerCount = data.val()
        })
    }
    //updates the number of the player count
    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }
    //updates the name
    update(name) {
        var playerIndex = "player" + playerCount
        database.ref(playerIndex).set({
            playerName: name
        })
    }

}