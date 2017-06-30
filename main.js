var form = $("#form");
var sendBtn = $("#send-btn");

form.submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: "http://fvi-grad.com:4004/email",
    method: "POST",
    data: form.serialize()
  })
  .done(function() {
    sendBtn.val("Message Sent!");
  })
  .fail(function() {
    sendBtn.val("Message Failed to Send!");
  });
});


$('#Transmute').click(function(){
    $('#transmute-button-container').toggleClass('gif-background');
});

var $overlay = $('#overlay');

$('.lightbox').click(function() {
    $overlay.fadeToggle();
    $(this).toggleClass('enlarge');
    //$('#overlay').html('<img class="lightbox" src="images1/rosie.jpg" alt="rosie">');
});

$overlay.click(function() {
    $('.lightbox').removeClass('enlarge');
    $overlay.fadeOut();
});
