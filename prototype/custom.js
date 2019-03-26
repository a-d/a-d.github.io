var currentPage = 0;

$('body')
  .on('click', '#next', nextPage)
  .on('click', '#prev', prevPage);

$('.book').on("swipeleft", nextPage);
$('.book').on("swiperight", prevPage);
  
function prevPage() {
  $('.flipped')
    .last()
    .toggleClass('flipped active')
    .siblings('.page')
    .removeClass('active');
}

function nextPage() {
  $('.active')
    .toggleClass('active flipped')
    .next('.page')
    .addClass('active');
}