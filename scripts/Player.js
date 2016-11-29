//Card Constructor
//game.players[].
function Player (){
    this.player_id = Player.id++;
    this.player_name; //set with proto function
    this.player_hand = [];
    this.player_deck_draw = [];
    this.player_deck_discard = [];
}

Player.id = 1;

Player.prototype.SetName = function(name_in){
    this.player_name = name_in;
};
