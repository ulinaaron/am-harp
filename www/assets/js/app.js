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

var formData = $('#contact-form input[name=name]').val();

$('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    // Process the form
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: $(this).serialize(),
        success: function(data) {
            $('#contact-form').parent().append().html('<div class="message success">I will be in touch with you shortly.</div>');
        }
    });
});
