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

$('.linked-list').on('click', '.delete', function () {
  $(this).parent().remove();
})

function addCard(card) {
  var websiteTitle = card.title;
  var websiteUrl = card.url;
  $('aside').prepend('<div class="linked-card"><div><h3 class="web-title">' + websiteTitle +'</h3><hr><p class="web-url">' + websiteUrl + '</p><hr></div><p class="action unread">Read</p><p class="action delete">Delete</p></div>');
}

$('.linked-list').on('click', ".unread", function() {
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read');
  $('.web-url').toggleClass('read');
})
