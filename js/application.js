$(document).ready(function() {

  // identity rotate
  var terms = ["design strategist", "front-end developer", "creative director"];

  function rotateTerm() {
    var ct = $(".roles").data("term") || 0;
    $(".roles").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
                .delay(2500).fadeOut(750, rotateTerm);
  }
  $(rotateTerm);

});
