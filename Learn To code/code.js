function ani(start, affected, end, direction, amount, endspace) {
  switch (direction) {
    case 'left':
      $(document).ready(function() {
        $(start).click(function() {
          $(affected).animate({
            left: amount.toString()
          });
        });
        $(end).click(function() {
          $(affected).animate({
            left: endspace
          });
        });
      });
      break;
    case 'right':
      $(document).ready(function() {
        $(start).click(function() {
          $(affected).animate({
            left: endspace
          });
        });
        $(end).click(function() {
          $(affected).animate({
            left: amount.toString()
          });
        });
      });
      break;
    case 'up':
      $(document).ready(function() {
        $(start).click(function() {
          $(affected).animate({
            top: amount.toString()
          });
        });
        $(end).click(function() {
          $(affected).animate({
            top: endspace
          });
        });
      });
      break;
    case 'down':
      $(document).ready(function() {
        $(start).click(function() {
          $(affected).animate({
            top: endspace
          });
        });
        $(end).click(function() {
          $(affected).animate({
            top: amount.toString()
          });
        });
      });
      break;
  }
}

function fade(start, affected, end, speed, opacity) {
  $(document).ready(function() {
    $(start).click(function() {
      $(affected).fadeTo(speed, opacity);
    });
    $(end).click(function() {
      $(affected).fadeTo(speed, 1);
    });
  });
}
function dimmain(start, affected, end, input) {
  $(document).ready(function() {
    $(start).click(function() {
      $(affected).style["-webkit-filter"] = "brightness("+input.toString()+"%)";
    });
    $(end).click(function() {
      $(affected).style["-webkit-filter"] = "brightness(100%)";
  });
})
function getcode(from, to) {
  document.getElementById(to).innerHTML = document.getElementById(from).value;
};
