$(document).ready(function() {
  // summary.html view
  $('input[name=date]').datepicker();
  
  if ($('td.date').text().search('/^Sun/') !== -1) {
    $('td.date').siblings().addClass('sunday');
  }
});