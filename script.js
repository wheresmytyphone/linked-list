$('.submit').on('click', function(event) {
  event.preventDefault();
  var $urlTitle = $('#title').val();
  var $url = $('#url').val();
  var card = new urlCard($urlTitle, $url);
  addCard(card);
});

function urlCard (title, url) {
  this.title = title;
  this.url = url;
  console.log(this);
}


function addCard(card) {
  var websiteTitle = card.title;
  var websiteUrl = card.url;
  $('aside').prepend('<div class="linked-card"><h3 class="web-title">${$websiteTitle}</h3><hr><p class="web-url">${$websiteUrl}</p><hr><div class="button-container"><p class="read">Read</p><p class="read">Delete</p></div></div>');
}
