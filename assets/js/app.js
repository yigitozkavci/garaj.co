(function() {
  $(".person").hover(function() {
    return $(this).find(".info-overlay").stop().fadeToggle(200, function() {});
  });

  $("#calendar").fullCalendar({
    eventSources: [
      {
        events: [
          {
            title: 'CrowdUp',
            start: '2016-04-16',
            end: '2016-04-20'
          }, {
            title: 'Example Event 1',
            start: '2016-03-16',
            end: '2016-03-17'
          }, {
            title: 'Example Event 2',
            start: '2016-03-21',
            end: '2016-03-23'
          }
        ],
        color: '#f05f40',
        textColor: '#FAEEEB'
      }
    ]
  });

  $(document).scroll(function() {
    var $docWidth, $mainNav;
    $docWidth = $(document).width();
    $mainNav = $("#mainNav");
    if ($mainNav.offset().top >= 100 && $docWidth > 768) {
      return $mainNav.css('padding', '10px');
    } else {
      if ($docWidth > 768) {
        return $mainNav.css('padding', '30px');
      }
    }
  });

}).call(this);
