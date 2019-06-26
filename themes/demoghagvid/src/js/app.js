
$('.modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('body').toggleClass('overflow-hidden');
  $('.modal').toggleClass('is-visible');
});
