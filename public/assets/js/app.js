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
    var action = $(this).attr('action');
    var data = $(this).serialize();
    var callback = function(data) {
        $(this).parent().append().html('<div class="message success">I will be in touch with you shortly.</div>');
    };
    
    // Process the form
    $.ajax({
        type: 'POST',
        url: action,
        data: data,
        sucess: callback
    });
});
