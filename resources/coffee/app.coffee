# Person fade effect.
$(".person").hover () ->
		$(@).find(".info-overlay").stop().fadeToggle 200, ->

# Calendar implementation
$("#calendar").fullCalendar({
	eventSources: [
		{
			events: [
				{
					title: 'CrowdUp',
					start: '2016-04-16',
					end: '2016-04-20'
				},
				{
					title: 'Example Event 1',
					start: '2016-03-16',
					end: '2016-03-17'
				},
				{
					title: 'Example Event 2',
					start: '2016-03-21',
					end: '2016-03-23'
				},
			],
			color: '#f05f40',
			textColor: '#FAEEEB'
		}
	]
});

# Navbar animation.
$(document).scroll ->
	$docWidth = $(document).width()
	$mainNav = $("#mainNav");
	if $mainNav.offset().top >= 100
		$mainNav.css('border-bottom', '3px solid black');
		if $docWidth > 768
			$mainNav.css 'padding', '10px'
	else
		$mainNav.css('border-bottom', 'none');
		if $docWidth > 768
			$mainNav.css 'padding', '30px'
