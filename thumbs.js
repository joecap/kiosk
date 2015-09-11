// http://www.sitepoint.com/display-youtube-thumbnails-easy-jquery/

// Copyright 2015 Azurele Inc

// // Returns big screenshot by video id
// $.jYoutube('rSUfWXcNAOw');

// // Returns small thumbnail by YouTube video URL
// $.jYoutube('http://www.youtube.com/watch?v=rSUfWXcNAOw', 'small');

480×360
http://img.youtube.com/vi/dXo0LextZTU/0.jpg

128×96
http://img.youtube.com/vi/dXo0LextZTU/1.jpg

128×96
http://img.youtube.com/vi/dXo0LextZTU/2.jpg

$.extend({
  jYoutube: function( url, size ){
    if(url === null){ return ""; }

    size = (size === null) ? "big" : size;
    var vid;
    var results;

    results = url.match("[\?&]v=([^&#]*)");

    vid = ( results === null ) ? url : results[1];

    if(size == "small"){
      return "http://img.youtube.com/vi/"+vid+"/2.jpg";
    }else {
      return "http://img.youtube.com/vi/"+vid+"/0.jpg";
    }
  }
});

$(document).ready(function(){
    // Get youtube video thumbnail on user click
    var url = '';
    $('#submit').click(function(){
        // Check for empty input field
        if($('#url').val() != ''){
            // Get youtube video's thumbnail url
            // using jYoutube jQuery plugin
            url = $.jYoutube($('#url').val());
            
            // Now append this image to <div id="thumbs">
            $('#thumbs').append($('<img src="'+url+'" />'));
        }
    });
});
