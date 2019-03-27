var currentPage = 0;

$('body')
  .on('click', '#next', nextPage)
  .on('click', '#prev', prevPage);

$('main').on("swipeleft", nextPage);
$('main').on("swiperight", prevPage);
  
function prevPage() {
  $('.flipped')
    .last()
    .toggleClass('flipped active')
    .siblings('section')
    .removeClass('active');
}

function nextPage() {
  $('section.active')
    .toggleClass('active flipped')
    .next('section')
    .addClass('active');
}