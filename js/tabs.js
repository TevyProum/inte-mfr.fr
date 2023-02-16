// Tabs (page présentation) desktop
$(document).on('click', '.tab-filter', function() {
  $('.tab-filter').removeClass('active');
  $(this).addClass('active');
  
  var tab_id = $(this).attr('data-tab');
  $('.tab-content').removeClass('current');
  $('#'+tab_id).addClass('current');

  var subtitle_id = $(this).attr('data-subtitle');
  $('.subtitle-content').removeClass('current');
  $('#'+subtitle_id).addClass('current');
});

// Tabs (page présentation) mobile
$(document).on('change', '.dropdown.-mobile select', function() {
  var tab_id = this.value;
  $('.tab-content').removeClass('current');
  $('#'+tab_id).addClass('current');
  document.location.href = '#'+tab_id;  
});

// Tabs (page partenaires)
$(document).on('change', '.partner-bloc .dropdown select', function() {
  var tab_id = this.value;
  $('.tab-content').removeClass('current');
  $('#'+tab_id).addClass('current');
});