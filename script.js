$('.submit').on('click', function(event) {
  event.preventDefault();
  var $urlTitle = $('#title').val();
  var $url = $('#url').val();
  var urlCard = new urlCard($urlTitle, $url);
  addCard(urlCard);
});

function urlCard (title, url) {
  this.title = title;
  this.url = url;
  console.log(this);
}


function addCard(urlCard) {
  var websiteTitle = urlCard.title;
  var websiteUrl = urlCard.url
  $('aside').prepend('<div class="linked-card"><h3 class="web-title">${$websiteTitle}</h3><hr><p class="web-url">${$websiteUrl}</p><hr><div class="button-container"><p class="read">Read</p><p class="read">Delete</p></div></div>');
}
