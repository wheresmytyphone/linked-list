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
  var card = new UrlCard($urlTitle, $url);
  readyToEnter();
  addCard(card);
  $('#title').val('');
  $('#url').val('');
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
  if ($urlTitle === "" || $url === "") {
    toggleDisabled(true);
    console.log("Hello");
  }  else {
    toggleDisabled(false);
    console.log('Goodbye');
  }
}

$('input').focus(function () {
  toggleDisabled(false);
})

/*Select or deselect read*/
$('.linked-list').on('click', ".unread", function() {
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read');
  $(this).parent().find('.web-url').toggleClass('url-line');
  $(this).parent().find('.delete').toggleClass('url-line');
})

/*Delete*/
$('.linked-list').on('click', '.delete', function () {
  $(this).parent().remove();
})
