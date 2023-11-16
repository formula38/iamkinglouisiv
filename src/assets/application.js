$(document).on('submit', '.js-contact-form', function(e){
    e.preventDefault();
  
    $('input[type=submit]', '.js-contact-submit')
      .val("Sending...")
      .prop('disabled', true);
  
    $.ajax({
      type: 'POST', url: '/contact', data: $(this).serialize(),
  
      success: function(data) {
        $('.js-contact-form')[0].reset();
        $('.js-contact-submit').html("<div class='box_alert_positive'>Message sent. Thanks!</div>");
      },
  
      error: function(xhr, type) {
        alert('Error submitting form. Please make sure all fields are filled out, email address is valid, and the message field has four or more words.');
        $('input[type=submit]', '.js-contact-submit')
          .prop('disabled', false)
          .val("Send Message");
      }
    });
  });
  
  $(document).on('ready', function() {
    if( $('.js-contact-form-placeholder').length > 0 ) {
      $('.js-contact-form-placeholder').replaceWith($('.js-contact-form').show())
    }
  });