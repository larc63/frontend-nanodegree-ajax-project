var CAT_NAMES = ["XS", "Lafeyette", "Mollye", "Tofu", "Ashes Too Ashes", "Tessa", "Asphalt", "Waffle", "Inkster", "Sydney", "Beez Louise",
                 "Gucci", "Chipmunk", "Dozie Darlin", "Barrin", "Senna", "Sorcerer", "Sorceress", "Netscape", "Nickedemus", "Michael Jordan",
                 "Bobbers", "Cinderblock", "Mollie", "Meowwow", "Heavengaze", "Karin", "Gypsyrose", "Miss Priss", "Maliboo", "Kitty Baby",
                 "William The Conqueror", "Winklynymph", "MacGregor", "Matador", "Bernie", "Bill The Hell Cat", "Gassy Boy", "Tinka Tinka",
                 "Sparkplug", "Bungle", "MacGyver", "Unit", "Ferreo", "Mlle Butterfly", "William T", "OrangEndymion", "Randall Flagg",
                 "Starr-O-The-West", "Cheryl"];

function Cat() {
    this.name;
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

    this.listClickHandler = function (e) {
        var theId = e.target.id;
        var catId = parseInt(theId.substring(5, theId.length));
        console.log("selected cat " + catId + " " + this.clowder[catId].name);
        this.populateCatFrame(catId, "cat-frame");
    };

    this.clickHandler = function (e) {
        var theId = e.target.id;
        var catId = parseInt(theId.substring(5, theId.length - "-picture".length));
        this.clowder[catId].handleClick();
    };
};
CatHerder.prototype.getCatName = function () {
    var i = Math.floor(Math.random() * CAT_NAMES.length);
    return CAT_NAMES[i];
}

CatHerder.prototype.generate = function () {
    var kitty = new Cat();
    kitty._id = this.catCount;
    kitty.name = this.getCatName();
    this.catCount++;
    this.clowder.push(kitty);
};


CatHerder.prototype.populateCatFrame = function (id, tagId) {
    var self = this;
    var kitty = this.clowder[id];
    var retVal = '<p>' + kitty.name + '</p>';
        retVal += '<div class = "click-count" id="kitty' + kitty._id + '-click-count" > ' + kitty.kittyClicks + ' clicks</div>';
        retVal += '<div class = "kitty-picture" >';
        retVal += '<img src = "http://lorempixel.com/300/300/cats/" id = "kitty' + kitty._id + '-picture" / >';
        retVal += '</div>';
    $("#" + tagId).empty().append(retVal);

    $('#kitty' + kitty._id + '-picture').click(function (e) {
        self.clickHandler.call(self, e);
    });
};

CatHerder.prototype.insertList = function (id, tagId) {
    var self = this;
    var kitty = this.clowder[id];
    var retVal = '<p id="kitty' + kitty._id + '">' + kitty.name + '</p>';
    $("#" + tagId).append(retVal);

    $('#kitty' + kitty._id).click(function (e) {
        self.listClickHandler.call(self, e);
    });
};

var catHerder = new CatHerder();

for (var i = 0; i < 10; i++) {
    catHerder.generate();
    catHerder.insertList(i, "clowder");
}