/**
 * Assemble the libraries!
 */

// Add matchHeight to classes
$('.group, .set-item .inner, .header-group').matchHeight();

// Start SlickNav
$('#navigation').slicknav({
  label: ''
});

// Contact Form AJAX and Success Message

var $contactForm = $('#contact-form');

$contactForm.submit(function(e) {
  e.preventDefault();

  // Process the form
  $.ajax({
    type: 'POST',
    url: $contactForm.attr('action'),
    accept: {
    javascript: 'application/javascript'
  },
    data: $contactForm.serialize()
  }).done(function(data) {
    $contactForm.parent().find('.group-title').text('Thank You!').fadeIn('slow');
    $contactForm.parent().append('<div class="message success">I will be in touch with you shortly.</div>').fadeIn('slow');
    $contactForm.remove();
  });
});
