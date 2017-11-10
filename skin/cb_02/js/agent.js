function getElementsByClassName(className) {
if (document.getElementsByClassName) { 
  return document.getElementsByClassName(className); }
else { return document.querySelectorAll('.' + className); } 
 }
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

  $(document).on('click',function(){
	   $('.collapse').collapse('hide');
  });
  $(document).on('click', '.close', function(event){
  //$(".close").on("click", function() {
    
   var deckdata = getElementsByClassName("modal-backdrop") ;
    for(var ij=0; ij<deckdata.length; ij++) { 
       deckdata[ij].remove();
    } 
     
  });

	$(".fa-heart-o").on("click", function() {
      
      $(this).addClass("active");
	  alert("Saved to Favorites!");
  });

});