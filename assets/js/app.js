(function() {
  var $docWidth;

  $(".person").hover(function() {
    return $(this).find(".info-overlay").stop().fadeToggle(200, function() {});
  });

  $docWidth = $(document).width();

  $(document).scroll(function() {
    var $mainNav;
    $mainNav = $("#mainNav");
    if ($mainNav.offset().top >= 100) {
      $mainNav.find('a.navbar-brand').css('display', 'block');
      $mainNav.css('border-bottom', '3px solid black');
      if ($docWidth > 768) {
        return $mainNav.css('padding', '10px');
      }
    } else {
      $mainNav.find('a.navbar-brand').css('display', 'none');
      $mainNav.css('border-bottom', 'none');
      if ($docWidth > 768) {
        return $mainNav.css('padding', '30px');
      }
    }
  });

  $(function() {
    return $('[data-toggle="tooltip"]').tooltip();
  });

}).call(this);
