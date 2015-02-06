//$(function () {
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
//
//    function Cat() {
//        this.name = getCatName();
//        this.kittyClicks = 0;
//        this._id = undefined;
//        this.handleClick = function () {
//            this.kittyClicks++;
//        }
//    };
//
//    var catModel = {
//        clowder: new Array(),
//        catCount: 0,
//        isAdmin: true,
//        add: function (kitty) {
//            this.catCount++;
//            this.clowder.push(kitty);
//        },
//        getCount: function () {
//            return this.catCount;
//        },
//        getCats: function () {
//            return this.clowder;
//        }
//    };
//
//    var catHerder = {
//        init: function () {
//            for (var i = 0; i < 10; i++) {
//                this.generate();
//            }
//            this.currentCat = this.getCats()[0];
//        },
//        clickHandler: function (e) {
//            var theId = e.target.id;
//            var catId = parseInt(theId.substring(5, theId.length - "-picture".length));
//            this.currentCat.handleClick();
//            catFrame.render(catId);
//        },
//        listClickHandler: function (e) {
//            var theId = e.target.id;
//            var catId = parseInt(theId.substring(5, theId.length));
//            this.currentCat = this.getCats()[catId];
//            catFrame.render(catId);
//            adminView.populateWithCurrentCat();
//            adminView.render();
//        },
//        generate: function () {
//            var kitty = new Cat();
//            kitty._id = catModel.getCount();
//            catModel.add(kitty);
//        },
//        getCats: function () {
//            return catModel.getCats();
//        },
//        isAdmin: function () {
//            return catModel.isAdmin === true;
//        },
//        toggleIsAdmin: function () {
//            if (catModel.isAdmin === true) {
//                catModel.isAdmin = false;
//            } else {
//                catModel.isAdmin = true;
//            }
//        }
//    };
//
//    var catList = {
//        render: function () {
//            var cats = catHerder.getCats();
//            for (var i = 0; i < cats.length; i++) {
//                var kitty = cats[i];
//                $("#clowder").append('<p id="kitty' + kitty._id + '">' + kitty.name + '</p>');
//                $('#kitty' + kitty._id).click(function (e) {
//                    catHerder.listClickHandler(e);
//                });
//            }
//        }
//    };
//
//    var catFrame = {
//        render: function (id) {
//            var self = this;
//            var kitty = catHerder.getCats()[id];
//            var retVal = '<p>' + kitty.name + '</p>';
//            retVal += '<div class = "click-count" id="kitty' + kitty._id + '-click-count" > ' + kitty.kittyClicks + ' clicks</div>';
//            retVal += '<div class = "kitty-picture" >';
//            retVal += '<img src = "http://lorempixel.com/300/300/cats/" id = "kitty' + kitty._id + '-picture" / >';
//            retVal += '</div>';
//            $("#cat-frame").empty().append(retVal);
//
//            $('#kitty' + kitty._id + '-picture').click(function (e) {
//                catHerder.clickHandler(e);
//            });
//        }
//    };
//
//    var adminView = {
//        init: function () {
//            var self = this;
//            $("#cancel-btn").click(function (e) {
//                console.log("clicked cancel");
//                $("#name").val(catHerder.currentCat.name);
//                $("#url").val(catHerder.currentCat.url);
//                $("#clicks").val(catHerder.currentCat.kittyClicks);
//            });
//            $("#submit-btn").click(function (e) {
//                console.log("clicked submit");
//                catHerder.currentCat.name = $("#name").val();
//                catHerder.currentCat.url = $("#url").val();
//                catHerder.currentCat.kittyClicks = $("#clicks").val();
//            });
//            $("#admin-button").click(function () {
//                catHerder.toggleIsAdmin();
//                self.render();
//            });
//        },
//        populateWithCurrentCat: function () {
//            this.render();
//            $("#name").val(catHerder.currentCat.name);
//            $("#url").val(catHerder.currentCat.url);
//            $("#clicks").val(catHerder.currentCat.kittyClicks);
//        },
//        render: function () {
//            if (catHerder.isAdmin()) {
//                $("#form-container").show();
//            } else {
//                $("#form-container").hide();
//            }
//        }
//    }
//
//    catHerder.init();
//    catList.render();
//    catFrame.render(0);
//    adminView.init();
//});


// Here's my data model
var ViewModel = function (first, last) {
    this.name = ko.observable(getCatName());
    this.clickCount = ko.observable(0);
    this.imgSrc = ko.observable("http://lorempixel.com/300/300/cats/");
    //        this._id = undefined;
    
    this.incrementCounter = function(){
        this.clickCount(this.clickCount()+1);
    }
    
    this.catLevel = ko.computed(function () {
        if (this.clickCount() < 10) {
            return "kitten";
        } else {
            return "cat";
        }
    }, this);

    //            this.firstName = ko.observable(first); this.lastName = ko.observable(last);
    //
    //            this.fullName = ko.computed(function () {
    //                // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
    //                return this.firstName() + " " + this.lastName();
    //            }, this);
};

ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work