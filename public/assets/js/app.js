/**
 * Assemble the libraries!
 */

// Add matchHeight to classes
$('.group, .set-item .inner, .header-group').matchHeight();

// Start SlickNav
$('#navigation').slicknav({
    label: ""
});

// Contact Form AJAX and Success Message

var $contactForm = $('#contact-form');

$contactForm.submit( function(e) {
    e.preventDefault();
    
    // Process the form
    $.ajax({
        type: 'POST',
        url: $contactForm.attr('action'),
        data: $contactForm.serialize()
    }).done( function() {
        $contactForm.parent().append('<div class="message success">Thank you for your message! I will be in touch with you shortly.</div>');
        $contactForm.remove();
    });
});
