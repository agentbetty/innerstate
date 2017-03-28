// $(document).ready(function() {

//   // identity rotate
//   var terms = ["design strategist", "front-end developer", "creative director"];

//   function rotateTerm() {
//     var ct = $(".roles").data("term") || 0;
//     $(".roles").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn(750)
//                 .delay(2500).fadeOut(750, rotateTerm);
//   }
//   $(rotateTerm);

// });

(function() {

    var quotes = $(".roles");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(500)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();
