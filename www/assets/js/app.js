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
    var callback = function(data) {
        $(this).remove();
        
        $(this).text('Thank you!');
    };
    
    // Process the form
    $.ajax({
        type: 'POST',
        url: action,
        data: data,
        sucess: callback
    });
});
