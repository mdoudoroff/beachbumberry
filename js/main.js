
var mobileNavShown = false;

jQuery(document).ready(function() {

	$('#mobilemenubutton').click(function() {

		if (mobileNavShown) {
			$('#mobilenavitems').hide();
			mobileNavShown = false;	
		} else {
			$('#mobilenavitems').show();	
			mobileNavShown = true;
		}
		

		return false;
	});

});
