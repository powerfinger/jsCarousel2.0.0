
var $log = function () {
    if (typeof console == "object" && "console.log")
        console.log.apply(console, arguments);
}
var imgFlyingColors = imgFlyingColors || {};
imgFlyingColors.Pages = imgFlyingColors.Pages || {};
$log("imgPages1.js");
$log("imgFlyingColors "imgFlyingColors);

// page one monitors the input:radio, if one change, we grab its value and
// use it to update src of all of the squirrel image
imgFlyingColors.Pages.imgpage1 = function () {
	return {
		pageinit: function(){
    },
		pageshow: function () {
      $("input:radio").bind('change', function(event){
          var fileName = this.value;
          $log("inside imgpage1 function");
        // this will update the src on ALL of the images
        $(".squirrel-image").attr("src",fileName);
      });
    },
		pagehide: function () {
      $("input:radio").unbind();
    }
	}
}();

// page two does nothing and doesn't do anything, this function could be deleted
imgFlyingColors.Pages.imgpage2 = function () {
	return {
		pageinit: function(){
    },
		pageshow: function(){
    },
		pagehide: function(){
    }
	}
}();

