function Cat() {
    this.kittyClicks = 0;
    this._id;
}

Cat.prototype.handleClick = function () {
    this.kittyClicks++;
    $("#kitty" + this._id + "-click-count").text(this.kittyClicks);

}

function CatHerder() {
    this.clowder = new Array();
    this.catCount = 0;
    this.clickHandler = function(e){
        var theId = e.target.id;
        var catId = parseInt(theId.substring(5, theId.length - "-picture".length));
        this.clowder[catId].handleClick();
    };
};

CatHerder.prototype.generate = function () {
    var kitty = new Cat();
    kitty._id = this.catCount;
    this.catCount++;
    this.clowder.push(kitty);
};

CatHerder.prototype.insert = function (id, tagId) {
    var self = this;
    var kitty = this.clowder[id];
    var retVal = '<div class = "click-count" id="kitty' + kitty._id + '-click-count" > ' + kitty.kittyClicks + ' </div>';
    retVal += '<div class = "kitty-picture" >';
    retVal += '<img src = "http://lorempixel.com/100/100/cats/" id = "kitty' + kitty._id + '-picture" / >';
    retVal += '</div>';
    $("#" + tagId).append(retVal);
    
    $('#kitty' + kitty._id + '-picture').click(function(e){
        self.clickHandler.call(self, e);
    });
}

var catHerder = new CatHerder();

for (var i = 0; i < 2; i++) {
    catHerder.generate();
    catHerder.insert(i, "clowder");
}