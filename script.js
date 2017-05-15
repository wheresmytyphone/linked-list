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

$('.linked-list').on('click', '.delete', function (e) {
  $(this).parent().remove();
})

function addCard(card) {
  var websiteTitle = card.title;
  var websiteUrl = card.url;
  $('aside').prepend('<div class="linked-card"><div><h3 class="web-title">' + websiteTitle +'</h3><hr><p class="web-url">' + websiteUrl + '</p><hr></div><p class="read">Read</p><p class="read delete">Delete</p></div>');
}
