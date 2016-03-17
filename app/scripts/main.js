$(document).ready(function() {
  $('.buttons > button').on('click', function (e) {
    $(this).addClass('clicked');
    setTimeout(function() {
      $(e.target).removeClass('clicked');
    }, 300);
  });

  $('button.material-ripple').on('mousedown', function (e) {
    var rippleScaleDuration = 500;
    var rippleFadeOutDuration = 500;
    var ripple = $('<div class="ripple--active"></div>');
    $(this).append(ripple);
    var x = (e.pageX - $(this).offset().left);
    var y = (e.pageY - $(this).offset().top);
    ripple.css('top', y).css('left', x);
    var thisWidth = parseInt($(this).css('width'));
    var thisHeight = parseInt($(this).css('height'));
    var scale = Math.max(calcDistTo(0, 0), calcDistTo(0, thisHeight), calcDistTo(thisWidth, 0), calcDistTo(thisWidth, thisHeight));
    function calcDistTo(x1, y1) {
      return calcDist(x, y, x1, y1);
    }
    function calcDist (x0, y0, x1, y1) {
      return Math.sqrt((x0 - x1)*(x0 - x1) + (y0 - y1)*(y0 - y1));
    }
    // Add 5% to ensure ripple covers all space
    scale *= 1.05;
    $(ripple).animate({ textIndent: scale }, {
        step: function (now) {
          $(this).css('-webkit-transform','scale(' + now + ')');
        },
        duration: rippleScaleDuration
    });
    $(ripple).add(window).on('mouseout mouseup', function (e) {
      // ripple.addClass('ripple--fade-out');
      $(ripple).animate({ opacity: 0 }, {
          queue: false,
          duration: rippleFadeOutDuration / 2,
          easing: 'linear'
      });
      setTimeout(function() {
        ripple.remove();
      }, 5000);
    });
  });
});
