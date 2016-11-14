//Card Constructor
function Player (id){
    this.player_id = Player.sequentialID();
    this.player_name = 'Bill';
}

Player.sequentialID = (function(){
    let count = 10;
    return function () {
        return count++;
    };
}());
