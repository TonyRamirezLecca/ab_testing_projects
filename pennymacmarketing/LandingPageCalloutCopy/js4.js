/*** JS 2 ***/
function whenExists(elements, callback) {
	elements = elements.split(',');
	var interval = setInterval(function () {
		for (var i = 0; i < elements.length; i++) {
			if (document.querySelectorAll(elements[i]).length) {
				elements.splice(i, 1);
				i--;
			}
		}
		if (elements.length === 0) {
			callback();
			clearInterval(interval);
		}
	}, 100);
}


whenExists('#loanpurpose', function () {
	/* JSON OBJECTS */
		var da = {
			v1: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/penny-mac-marketing/landing-page-callout-copy/v1.svg',
			v2refi: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/penny-mac-marketing/landing-page-callout-copy/v2refi.svg',
			v2purchase: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/penny-mac-marketing/landing-page-callout-copy/v2purchase.svg',
			v3: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/penny-mac-marketing/landing-page-callout-copy/v3.svg',
			v4refi: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/penny-mac-marketing/landing-page-callout-copy/v4refi.svg',
			v4purchase: 'https://s3-us-west-1.amazonaws.com/static.disruptive.co/penny-mac-marketing/landing-page-callout-copy/v4purchase.svg',
		}

	document.querySelector('#loanpurpose').addEventListener('change', function() {
		if (document.querySelector('#loanpurpose').value == 'Refinance') {
			console.log('if');
			$('#badge').attr('src', da.v4refi);
		}
		else {
			console.log('else');
			$('#badge').attr('src', da.v4purchase);
		}
	});

});
