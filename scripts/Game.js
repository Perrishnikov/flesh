//Game Constructor
function Game (){
    //this.game_id = Game.sequentialID();
    this.players; //will become array with all players
    this.deck_draw;
}

//closure to make unique Game ID's
Game.sequentialID = (function(){
    let count = 10;
    return function () {
        return count++;
    };
}());

//populate Players array
Game.prototype.MakePlayers = function(num){
    let tempArray = [];
    for(let i = 0; i < num; i++){
        tempArray[i] = new Player(); //get Player.js Constructor
    }
    this.players = tempArray;
};

Game.prototype.MakeDeck = function() {
    this.deck_draw = new Standard52(); //get Standard52 from Card.js
};

Game.prototype.ShuffleCards = function(){
    //take all discards (if any), out them in shuffle array, return new deck_draw
};

Game.prototype.DrawCardsSinglePlayer = function(num){
    //call this for each player ie. player[0].hand = Game.DrawCards().call();
    let cardsRemaining = game.deck_draw.length; //Game, not THIS
    let cardsNeeded = num;
    let newCards = ['hello'];
    console.log('this: ',this);
    this.player_hand = newCards;
};

Game.prototype.DrawCardsAllPlayers = function(){
//foreach player...
};
