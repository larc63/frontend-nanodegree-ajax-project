
var NYT_KEY = "1b5ac26e8f1655981150f5e4d70bab71:9:70863163";	
var NYT_BASE_URL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);

// loadData();

$.getJSON( NYT_BASE_URL + "obama&api-key=" + NYT_KEY, function( data ) {
  var items = [];
  var articles = data.response.docs;
  
  $.each( articles, function( key, val ) {
    items.push( "<li id='" + articles[key]._id + "' class='article'><a href='" + articles[key].web_url+ "'>" + articles[key].headline.main + "</a><p>" + articles[key].snippet+ "</p></li>" );
  });
 
  $( "<ul/>", {
    html: items.join( "" )
  }).appendTo( "#nytimes-articles" );
}).error(function() {
    $( "<p>NYT Articles Could not be loaded</p>" ).appendTo( "#nytimes-articles" );
  });


(function() {
  var $wikiElem = $('#wikipedia-links');
  var wikiRequestTimeout = setTimeout(function(){
    $wikiElem.text("failed to get ikipedia resources");
  }, 8000);
  var flickerAPI = "http://en.wikipeffasdfdia.org/w/api.php?format=json&action=opensearch&search=Obama";
  $.ajax( {
    url: flickerAPI,
    dataType:'jsonp',
    type:'POST',
    success: function(data){
      var articleList = data[1];
      for(var i = 0; i< articleList.length; i++){
	var url = 'http://en.wikipedia.org/wiki/' + articleList[1];
	$wikiElem.append('<li><a href="' + url + '">' + articleList[1] + '</a></li>');
      }
      clearTimeout(wikiRequestTimeout);
    },
    headers: { 'Api-User-Agent-Udacity': 'Example/1.0' }
});
})();
// (function() {
//   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//   $.getJSON( flickerAPI, {
//     tags: "mount rainier",
//     tagmode: "any",
//     format: "json"
//   })
//     .done(function( data ) {
//       $.each( data.items, function( i, item ) {
//         $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//         if ( i === 3 ) {
//           return false;
//         }
//       });
//     });
// })();
