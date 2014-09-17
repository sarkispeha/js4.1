$(document).on('ready', function() {

	$('p').hover(
		function(){
			$(this).css({
				color:'pink'
				})});


	$('h1').append('!');

	$('a').click(function(e) {
		var conf = confirm("want to leave?");
		
		if (conf === false) {
			e.preventDefault();
			$(this).hide();
		}
	});




	});