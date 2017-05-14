$('.submit').on('click', function(event) {
  event.preventDefault();
  var websiteTitle = $('#title').val();
  var websiteUrl = $('#url').val();
  $('.web-title').text(websiteTitle);
  $('.web-url').text(websiteUrl);
});
