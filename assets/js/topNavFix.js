// Takes care of the issue where the navigation tool tips don't go away after being clicked.
$(function () {
  $(document).on('click', '.nav-link', function() {
    $(this).blur();
  });
});
