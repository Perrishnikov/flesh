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

//populate this.players with the set number
Game.prototype.MakePlayers = function (num){
    let tempArray = [];
    for(let i = 0; i < num; i++){
        tempArray[i] = new Player(); //get Player Constructor
    }
    this.players = tempArray;
};

Game.prototype.MakeDeck = function () {
    
    this.deck_draw = new Standard52();
};
