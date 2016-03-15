/**
 * Assemble the libraries!
 */

// Add matchHeight to classes
$(document).ready( function () {
  $('.group, .set-item .inner, .header-group').matchHeight();
});

// Start SlickNav
$('#navigation').slicknav({
  label: '';
});

