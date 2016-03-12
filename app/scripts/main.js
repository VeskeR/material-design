$(document).ready(function() {
  $('.buttons > button').on('click', function (e) {
    $(this).addClass('clicked');
    setTimeout(function() {
      $(e.target).removeClass('clicked');
    }, 300);
  });
});
