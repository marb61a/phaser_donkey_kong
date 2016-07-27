// This is a 1 state game
var GameState = {
    // Initialise the game settings
    init : function(){
        // Adapt to the screen size
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 1000;
    },
    
    // Preload the game assets
    preload : function(){
        this.load.image('ground', 'assets/images/ground.png');    
        this.load.image('platform', 'assets/images/platform.png');    
        this.load.image('goal', 'assets/images/gorilla3.png');    
        this.load.image('arrowButton', 'assets/images/arrowButton.png');    
        this.load.image('actionButton', 'assets/images/actionButton.png');    
        this.load.image('barrel', 'assets/images/barrel.png');    
    
        this.load.spritesheet('player', 'assets/images/player_spritesheet.png', 28, 30, 5, 1, 1);    
        this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', 20, 21, 2, 1, 1);
    }
};