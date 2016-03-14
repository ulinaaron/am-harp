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
    var action = $(this).attr('action');
    var data = $(this).serialize();
    var name = $(this).find('input[name="name"]');
    var callback = function(data) {
        $(this).parent().find('.group-title').text('Thanks, ' + name + '!');
        $(this).append().html('<div class="message success">I will be in touch with you shortly.</div>');
    };
    
    // Process the form
    $.ajax({
        type: 'POST',
        url: action,
        data: data,
        sucess: callback
    });
});
