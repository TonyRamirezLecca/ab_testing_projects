/*** JS 5 ***/

function defer(callback) {
	if (window.jQuery) {
		callback();
	} else {
		setTimeout(function () { defer(callback); }, 50);
	}
}
defer(function () {
	jQuery(function () {        
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

		whenExists('.article-pick.flex', function () {
			jQuery('.article-pick.flex').addClass('da_free-pick');
			jQuery('.article-pick.flex > a').addClass('da_maroon-text');

			var paragraphElement = jQuery('.da_free-pick').next();

			jQuery('.article-end-cta').addClass('da_premium-btn').insertBefore(paragraphElement);
			jQuery('.da_free-pick').insertAfter(paragraphElement);

		});

	});
});

