/*Function for adding card*/
$('.submit').on('click', function(event) {
  event.preventDefault();
  var $urlTitle = $('#title').val();
  var $url = $('#url').val();
  readyToEnter();
  counter();
});

function UrlCard (title, url) {
  this.title = title;
  this.url = url;
  console.log(this);
}

function addCard(card) {
  var websiteTitle = card.title;
  var websiteUrl = card.url;
  $('aside').prepend(`<div class="linked-card"><div><h3 class="web-title">${websiteTitle}</h3><hr><a href="${websiteUrl}" class="web-url" target="blank_">${websiteUrl}</a><hr></div><p class="action unread">Read</p><p class="action delete">Delete</p></div>`);
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
    $('.user-feedback').text('Please fill out both inputs!')
  } else {
      toggleDisabled(false);
      addCard(card);
      $('#title').val('');
      $('#url').val('');
      $('.user-feedback').text('Add a bookmark!');
  }
}

$('input').focus(function () {
  toggleDisabled(false);
})

/* Function for Counter */
function counter() {
  var numCards = $('.linked-card').length;
  var numRead = $('.read').length;
  $('.num-links span').text(numCards);
  $('.num-read span').text( numRead);
}

/*Select or deselect read*/
$('.linked-list').on('click', ".unread", function() {
  $(this).parent().toggleClass('read-background');
  $(this).toggleClass('read');
  $(this).parent().find('.web-url, .delete').toggleClass('url-line');
  counter();
})

/*Delete*/
$('.linked-list').on('click', '.delete', function () {
  $(this).parent().remove();
  counter();
})

$('.clear-read').on('click', function(e) {
  e.preventDefault();
  $('.read').parent().remove();
  counter();
})

/* Change www to https://wwww. */

$('#url').on('input', function() {
	var input=$(this);
	if (input.val().substring(0,4)=='www.'){input.val('http://www.'+input.val().substring(4));}
	var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;
	var is_url=re.test(input.val());
	if(is_url){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
