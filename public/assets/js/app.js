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

$('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    // Process the form
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: $(this).serialize()
    }).done( function() {
        $(this).parent().append('<div class="message success">Thank you for your message! I will be in touch with you shortly.</div>');
        $(this).remove();
    });
});
