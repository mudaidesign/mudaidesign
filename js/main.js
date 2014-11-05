// Gumby is ready to go
Gumby.ready(function() {
	Gumby.log('Gumby is ready to go...', Gumby.dump());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}

	// skip link and toggle on one element
	// when the skip link completes, trigger the switch
	$('#skip-switch').on('gumby.onComplete', function() {
		$(this).trigger('gumby.trigger');
	});

// Oldie document loaded
}).oldie(function() {
	Gumby.warn("This is an oldie browser...");

// Touch devices loaded
}).touch(function() {
	Gumby.log("This is a touch enabled device...");
});

// $(document).ready(function() {





// 	// $window = $(window);
// 	// $panel = $("#panelOne");
// 	// $workPanel = $("#work");

// 	$(window).resize(function() {
// 		$(".shaped").each(function() {
// 			var element_width = Math.round($(this).outerWidth());
// 			var element_height = Math.round($(this).outerHeight());
// 			var Voffset = Math.round(0.1 * element_width);
// 			var bottom_right = '' + Math.round(element_height + Voffset);
// // alert (Voffset);

// var borderName = Voffset + 'px solid transparent';
// console.log (borderName);

// $(this).css('height', Voffset + 'px');

// $(this).css('border-top', Voffset + 'px solid transparent');
// $(this).css('border-right', '' + $(window).width() + 'px solid red');
// // $(this).css('border-bottom', Voffset + 'px solid transparent');
// $(this).css('background-color', 'transparent');



//                              // console.log ('polygon(0 0, ' + element_width + 'px -' + Voffset + 'px, ' + element_width + 'px ' + bottom_right + 'px, 0 ' + element_height + 'px)' );
// 			// $(this).css({ webkitClipPath: 'polygon(0 0, ' + element_width + 'px -' + Voffset + 'px, ' + element_width + 'px ' + bottom_right + 'px, 0 ' + element_height + 'px)' });
// 		});
// 		// var panelHeight =  (($window.width() / 5 ) - 110); 
// 		// $panel.css({ paddingBottom: panelHeight });
// 		// $panel.css({ paddingTop: panelHeight + 'px' });
//   // // -webkit-clip-path: ;
// 		// // $panel.css({ clipPath: "polygon(0px 0px, 100% 0px, 100% 10px, 0px 10px") });

// 		// $workPanel.css({ webkitClipPath: 'polygon(0% 91%,100% 100%,100% ' + 10-(window.width/300) + '%,0% 10%)' });

// 	});
// });