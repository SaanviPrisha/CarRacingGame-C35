class Form {
    constructor() {

    }
    display() {
        //creates the title
        var title = createElement('h2')
        title.html("Car Racing Game")
        title.position(130, 10)

        //creates the input button
        var input = createInput("Name")
        input.position(130, 160)

        //creates the play button
        var playButton = createButton("Play!")
        playButton.position(140, 180)

        //shows the game screen
        playButton.mousePressed(function() {
            input.hide()
            playButton.hide()
            var name = input.value()
            playerCount = playerCount + 1
            player.update(name)
            player.updateCount(playerCount)
            var greeting = createElement('h3')
            greeting.html("Hello " + name)
            greeting.position(130, 160)
        })
    }
}