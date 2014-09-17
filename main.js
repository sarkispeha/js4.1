$(document).on('ready', function() {

	$('.button1').click(function() {
		$('body').append('You clicked a button');
	});

	$('.button2').click(function() {
		$('body').append('<h1>You clicked a button</h1>');
	});

	$('.button3').click(function() {
		$('body').append('<ul><li>item1</li><li>item2</li><li>item3</li></ul>');
	});

});


