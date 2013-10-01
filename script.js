function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isOperator(s) {
  operators = [ '+', '-', '/', '*' ];
  return (operators.indexOf(s) >= 0);
}

function calculate(num1, num2, op) {
  if (op === '+') { return (num1 + num2); }
  else if (op === '-') { return (num1 - num2); }
  else if (op === '/') { return (num1 / num2); }
  else if (op === '*') { return (num1 * num2); }
}

$(document).ready(function() {
  var register = 0;
  var operator = '';

  $('table.calculator button').click(function(e) {
    var buttonPressed = $(e.currentTarget).html();
    var $display = $('input#display');

    if (isNumeric(buttonPressed)) {
      $display.val($display.val() + buttonPressed);

    } else if (isOperator(buttonPressed)) {
      register = parseFloat($display.val());
      operator = buttonPressed;
      $display.val('');

    } else if (buttonPressed === '=') {
      answer = calculate(parseFloat(register), parseFloat($display.val()), operator);
      $display.val(answer);

      if (answer == $('input#guess').val()) {
        $('div.response').html('Great Job!');
      } else {
        $('div.response').html('Sorry, your guess was incorrect.');
      }

    } else if (buttonPressed === 'C') {
      register = 0;
      operator = '';
      $display.val('');
    }

  });
});
