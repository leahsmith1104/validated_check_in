/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  $( ".delay" ).click(function() {
    setTimeout( function () {
        $( "#check-in_form" ).submit();
    }, 500);
  });
  window.GOVUKFrontend.initAll();
  $('div.fade').fadeIn(500).removeClass('fade');
  $('.fade-slower').delay(500).fadeIn(500);
})
