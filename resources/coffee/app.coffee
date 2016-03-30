# Person fade effect.
$(".person").hover () ->
		$(@).find(".info-overlay").stop().fadeToggle 200, ->

# Navbar animation.
$docWidth = $(document).width()
$(document).scroll ->
	$mainNav = $("#mainNav");
	if $mainNav.offset().top >= 100
		$mainNav.find('a.navbar-brand').css 'display', 'block';
		$mainNav.css('border-bottom', '3px solid black');
		if $docWidth > 768
			$mainNav.css 'padding', '10px'
	else
		$mainNav.find('a.navbar-brand').css 'display', 'none';
		$mainNav.css('border-bottom', 'none');
		if $docWidth > 768
			$mainNav.css 'padding', '30px'
$ ->
	$('[data-toggle="tooltip"]').tooltip()
