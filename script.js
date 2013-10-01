$(document).ready(function() {
  $('button').click(function() {
    var num1 = parseInt($('#number-1').val());
    var num2 = parseInt($('#number-2').val());

    if(isNaN(num1) || isNaN(num2)) {
      $('button').after('<p>you must enter a number</p>')
    } else {
      $('#result').val(num1 + num2);
    };
  });
});
