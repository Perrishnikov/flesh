//Card Constructor
function Card (id){
    this.card_id = Card.sequentialID();
    this.random_num = Card.RandomNum();
}

Card.RandomNum = function(){
    const min = Math.ceil(1);
    const max = Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Card.sequentialID = (function(){
    let count = 1;
    return function () {
        return count++;
    };
}());
