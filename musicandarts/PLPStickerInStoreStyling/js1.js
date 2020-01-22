/*** JS 1 ***/
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
whenExists('.sticker.sticker--listing', function () {

	/* Selects Get Estimate Section */
	var regex = /Best Deal In-Store/i;
	document.querySelectorAll('.sticker.sticker--listing').forEach((el, i, arr) => {
		console.log(arr.length);
		if (regex.test(el.innerHTML)) {
			console.log('match');
			el.classList.add('da_in-store');
		}
	});

});