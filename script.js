
/*Function for adding card*/
function UrlCard (title, url) {
  this.title = title;
  this.url = url;
  console.log(this);
}

$('.submit').on('click', function(event) {
  event.preventDefault();
  var $urlTitle = $('#title').val();
  var $url = $('#url').val();
  var numCards = $('.linked-card').length + 1;
  console.log(numCards)
  readyToEnter();
});

function addCard(card) {
  var websiteTitle = card.title;
  var websiteUrl = card.url;
  $('aside').prepend(`<div class="linked-card"><div><h3 class="web-title">${websiteTitle}</h3><hr><p class="web-url">${websiteUrl}</p><hr></div><p class="action unread">Read</p><p class="action delete">Delete</p></div>`);
}

/*Function for Enter button being disabled*/
function toggleDisabled (value) {
  $('.submit').attr("disabled", value)
}

function readyToEnter () {
  var $urlTitle = $('#title').val();
  var $url = $('#url').val();
  var card = new UrlCard($urlTitle, $url);
  if ($urlTitle === "" || $url === "") {
    toggleDisabled(true);
    $('.user-feedback').text('Please fill out both inputs')
  } else {
      toggleDisabled(false);
      addCard(card);
      $('#title').val('');
      $('#url').val('');
      $('.user-feedback').text('')
  }
}

$('input').focus(function () {
  toggleDisabled(false);
})

/*Select or deselect read*/
$('.linked-list').on('click', ".unread", function() {
  $(this).parent().toggleClass('read-background');
  $(this).toggleClass('read');
  var numRead = $('.read').length;
  console.log(numRead)
  $(this).parent().find('.web-url, .delete').toggleClass('url-line');
})

/*Delete*/
$('.linked-list').on('click', '.delete', function () {
  $(this).parent().remove();
})
