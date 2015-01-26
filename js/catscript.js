$(function () {
    var CAT_NAMES = ["XS", "Lafeyette", "Mollye", "Tofu", "Ashes Too Ashes", "Tessa", "Asphalt", "Waffle", "Inkster", "Sydney", "Beez Louise",
                 "Gucci", "Chipmunk", "Dozie Darlin", "Barrin", "Senna", "Sorcerer", "Sorceress", "Netscape", "Nickedemus", "Michael Jordan",
                 "Bobbers", "Cinderblock", "Mollie", "Meowwow", "Heavengaze", "Karin", "Gypsyrose", "Miss Priss", "Maliboo", "Kitty Baby",
                 "William The Conqueror", "Winklynymph", "MacGregor", "Matador", "Bernie", "Bill The Hell Cat", "Gassy Boy", "Tinka Tinka",
                 "Sparkplug", "Bungle", "MacGyver", "Unit", "Ferreo", "Mlle Butterfly", "William T", "OrangEndymion", "Randall Flagg",
                 "Starr-O-The-West", "Cheryl"];


    var getCatName = function () {
        var i = Math.floor(Math.random() * CAT_NAMES.length);
        return CAT_NAMES[i];
    };

    function Cat() {
        this.name = getCatName();
        this.kittyClicks = 0;
        this._id = undefined;
        this.handleClick = function () {
            this.kittyClicks++;
        }
    };

    var catModel = {
        clowder: new Array(),
        catCount: 0,
        add: function (kitty) {
            this.catCount++;
            this.clowder.push(kitty);
        },
        getCount: function () {
            return this.catCount;
        },
        getCats: function () {
            return this.clowder;
        }
    };

    var catHerder = {
        clickHandler: function (e) {
            var theId = e.target.id;
            var catId = parseInt(theId.substring(5, theId.length - "-picture".length));
            this.getCats()[catId].handleClick();
            catFrame.render(catId);
        },
        listClickHandler: function (e) {
            var theId = e.target.id;
            var catId = parseInt(theId.substring(5, theId.length));
            catFrame.init(catId);
            catFrame.render(catId);
        },
        generate: function () {
            var kitty = new Cat();
            kitty._id = catModel.getCount();
            catModel.add(kitty);
        },
        getCats: function () {
            return catModel.getCats();
        }
    };

    var catList = {
        render: function () {
            var cats = catHerder.getCats();
            for (var i = 0; i < cats.length; i++) {
                var kitty = cats[i];
                $("#clowder").append('<p id="kitty' + kitty._id + '">' + kitty.name + '</p>');
                $('#kitty' + kitty._id).click(function (e) {
                    catHerder.listClickHandler(e);
                });
            }
        }
    };

    var catFrame = {
        init: function (id) {
            var kitty = catHerder.getCats()[id];
            $('#kitty' + kitty._id + '-picture').click(function (e) {
                catHerder.clickHandler(e);
            });
        },
        render: function (id) {
            var self = this;
            var kitty = catHerder.getCats()[id];
            var retVal = '<p>' + kitty.name + '</p>';
            retVal += '<div class = "click-count" id="kitty' + kitty._id + '-click-count" > ' + kitty.kittyClicks + ' clicks</div>';
            retVal += '<div class = "kitty-picture" >';
            retVal += '<img src = "http://lorempixel.com/300/300/cats/" id = "kitty' + kitty._id + '-picture" / >';
            retVal += '</div>';
            $("#cat-frame").empty().append(retVal);
        }
    }

    for (var i = 0; i < 10; i++) {
        catHerder.generate();
    }
    catList.render();
    catFrame.init(0);
    catFrame.render(0);
});