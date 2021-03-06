/*
 * helper functions
 */
var throttle = function(func, interval) {
  var lastCall = 0;
  return function() {
      var now = Date.now();
      if (lastCall + interval < now) {
          lastCall = now;
          return func.apply(this, arguments);
      }
  };
}

/*
 * globals
 */
var allSections = $('main > section');


var removeHash = function() { 
  history.pushState({}, document.title, window.location.pathname + window.location.search);
}

/*
 * handle next and previous page
 */
var prevPage = function() {
  console.log("prev");
  var prevSection = $('main > section.active').prev();
  if(prevSection.size()) {
    window.location.hash = "#" + prevSection.attr("data-category") + "-" + prevSection.attr("data-category-page");
  }
}
var nextPage = function() {
  console.log("next");
  var prevSection = $('main > section.active').next();
  if(prevSection.size()) {
    window.location.hash = "#" + prevSection.attr("data-category") + "-" + prevSection.attr("data-category-page");
  }
}
$('nav .pagination .next').on('click', nextPage);
$('nav .pagination .prev').on('click', prevPage);
$('main').on("swipeleft", nextPage).on("swiperight", prevPage);

/*
 * article and Page jumper
 */
var evaluateHash = function(source) {
  var currentTarget = window.location.hash.substr(1);
  if(!currentTarget) {
    return;
  }
  
  allSections.removeClass('focus');

  var sectionTarget = null;
  if(currentTarget.startsWith("article-")) {
    // get section for article
    var articleElement = document.getElementById(currentTarget);
    if(articleElement) {
      sectionTarget = $(articleElement.parentElement);
      sectionTarget.addClass('focus');
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
// register handler for hash change
$(window).on('hashchange', evaluateHash);
// trigger current hash evaluation
evaluateHash();


/*
 * add handler for header click
 */
$('article')
  .on("tap",throttle(function() {
    var article = $(this);
    var section = article.parent();
    if( section.hasClass("active") ) {
      var anchor = article.is(':target')
        ? section.attr("data-category") + "-" + section.attr("data-category-page")
        : article.find('header > a.anchor').attr("href");
      if( anchor ) {
        window.location.hash = anchor;
      }
    }
  }, 500));
