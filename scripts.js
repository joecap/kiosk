// http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// Copyright 2015 Azurele Inc

var videoFunctionsModule = (function ($) {
	var my = {};
	var privateVariable;
	function privateMethod() {
		// ...
	};

	my.moduleProperty = 1;
	my.selectVideo = function ( videoPlayer,youtubehash ) {
    		console.log("HI THERE");
            videoPlayer.src("http://www.youtube.com/watch?v="
                + youtubehash
                );

	};

	return my;
}(jQuery));
