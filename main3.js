$(document).on('ready', function() {

$('button').css({
		width: 500,
		height: 500,
		fontSize: 40,
		position: 'absolute',
		padding: '25%',
		margin: '5%',
});

$('button').click(function() {
	$('body').append('<div class="popup"><p>This is some HTML content</p><button>Close</button></div>')
	$('.popup').css({
		position: 'fixed',
		width: 200,
		height: 200,
		backgroundColor: 'blue',
		margin: '35%',
	})
	$('.popup button').click(function(){
		$('.popup').hide();
	})

});





	});