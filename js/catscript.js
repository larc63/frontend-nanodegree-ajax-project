var kittyClicks = 0;
var incrementClickCount = function (theId) {
    var catId = theId.substring(0,theId.length - "-picture".length);
    console.log("clicked: " + theId + " for " + catId);
    console.log("modifying " + "#"+ catId +"-click-count");
    kittyClicks++;
    $("#"+catId+"-click-count").text(kittyClicks.toString());
    
}

$('#kitty0-picture').click(function (e) {
    //the element has been clicked... do stuff here
    incrementClickCount(e.target.id);
});