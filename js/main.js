/*
    1. Create a new game instance
    2. the game variable equal a "new" Phaser.Game and the parameters are.
    3. the width[640] and height[360], then the render-type[Phaser.AUTO]
    Phaser Game Docs: http://phaser.io/docs/2.4.4/Phaser.Game.html
*/

var game = new Phaser.Game(640, 360, Phaser.AUTO);

/*
    1. A Game-State are a javascript object set to variable of course.
    2. Usually have a a preload option set to that object that is a function.
    3. Preload is where game files are loaded
    4. Then once all the images and such are loaded into memory the create function is made.
    5. Update function is called many times a second to check for updates in the game.
*/

var GameState = {
    // load the game assets before the game starts
    preload: function(){
        /*
            "this" refers to the current object we are in.
            "load" refers to a load object Phaser has. that allows us to load a new image.
            "image" parameters are are key-name, image-path.
         */
        this.load.image('background', 'assets/img/background.png')
    },
    // executed after everything is loaded
    create: function () {
        // new sprite -- this.game will always give us access to the main game object
        // now that we have this.game.add.sprite() the sprite parameters...
        // coordinates[0, 0], and the image-key that we choose in preload
        // coordinates in Phaser start in top left corner
        this.background = this.game.add.sprite(0, 0, 'background')
    },
    // called multiple times per second
    update: function () {
        
    }
};

/*
    1. Now we add the new GameState object to the actual game.
    2. We add a state to a game by calling the game variable.
    3. then we use the add() function to set a prefered key-name then the object itself.
    4. Now we need to start the game by using the game.state.start('state name').
*/

game.state.add("GameState", GameState);
game.state.start('GameState');