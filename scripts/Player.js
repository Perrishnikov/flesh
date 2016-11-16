//Card Constructor
function Player (id){
    this.player_id = Player.sequentialID();
    this.player_name;
    this.player_hand;
}

Player.prototype.SetName = function(name_in){
    this.player_name = name_in;
};

Player.sequentialID = (function(){
    let count = 10;
    return function () {
        return count++;
    };
}());
