
var removeHash = function() { 
  history.pushState({}, document.title, window.location.pathname + window.location.search);
}

var prevPage = function() {
  var prevSection = $('main > section.active').prev();
  if(prevSection.size()) {
    window.location.hash = "#" + prevSection.attr("data-category") + "-" + prevSection.attr("data-category-page");
  }
}

var nextPage = function() {
  var prevSection = $('main > section.active').next();
  if(prevSection.size()) {
    window.location.hash = "#" + prevSection.attr("data-category") + "-" + prevSection.attr("data-category-page");
  }
}


$('body')
  .on('click', '#next', nextPage)
  .on('click', '#prev', prevPage);

$('main').on("swipeleft", nextPage);
$('main').on("swiperight", prevPage);


var evaluateHash = function(source) {
  var currentTarget = window.location.hash.substr(1);
  if(!currentTarget) {
    return;
  }
  var sectionTarget = null;
  if(currentTarget.startsWith("article-")) {
    // get section for article
    var articleElement = document.getElementById(currentTarget);
    if(articleElement) {
      sectionTarget = $(articleElement.parentElement);
    }
  }
  else {
    // go to section
    var parts = currentTarget.split("-");
    sectionTarget = $('main > section[data-category="' + parts[0] + '"][data-category-page="'+parts[1]+'"]').first();
  }

  if(sectionTarget) {
    sectionTarget.prevAll().addClass('flipped').removeClass('active');
    sectionTarget.addClass('active').removeClass('flipped');
    sectionTarget.nextAll().removeClass('flipped active');
  }
  window.scrollTo(0, 0);
  return false;
}
$(window).on('hashchange', evaluateHash);

// evaluate current hash
evaluateHash();