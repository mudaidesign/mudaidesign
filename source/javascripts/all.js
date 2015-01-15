//= require_tree .

$(function() {
	$('.how').hover(function() {
		$('body').toggleClass('blue');
	});

	$('.join').hover(function() {
		$('body').toggleClass('green');
	});
});