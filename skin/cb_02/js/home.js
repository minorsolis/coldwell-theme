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
  
  $(document).on('click', '.maintabs', function(event){

    var maintabId = $(this).attr('id');

    if(maintabId=="Sale" || maintabId=="Rent")
      $('#propertyCategory').val(maintabId);
    else
      $('#propertyCategory').val('');

    //var keyword = $('#Keyword').val();

  });


  $(document).on('click', '.tab_default_Sale,.tab_default_Rent,.tab_default_Province,.tab_default_Office', function(event){

    var maintabIdData = $(this).attr('data-id');
    var keyword = $('#Keyword'+maintabIdData).val();
    var propertyCategory = "";
    if(maintabIdData=="Sale" || maintabId=="Rent")
      propertyCategory = maintabIdData;
    var propertyState = "";
    var minPrice = "";
    var maxPrice = "";
    var propertyAgentOffice = "";
    if(maintabIdData=="Office"){
        propertyAgentOffice = $('#propertyAgentOffice').val();
        myparams = "&generalSearch="+keyword+"&propertyCategory="+propertyCategory+"&propertyAgentOffice="+propertyAgentOffice;
    }else if(maintabIdData=="Rent"){
      minPrice = $('#minPrice'+maintabIdData).val();
      maxPrice = $('#maxPrice'+maintabIdData).val();
      myparams = "&generalSearch="+keyword+"&propertyCategory="+propertyCategory+"&minPrice="+minPrice+"&maxPrice="+maxPrice;
    }else if(maintabIdData=="Province"){
        propertyState = $('#propertyState'+maintabIdData).val();
        myparams = "&generalSearch="+keyword+"&propertyCategory="+propertyCategory+"&propertyState[]="+propertyState;
    }else{
        propertyState = $('#propertyState'+maintabIdData).val();
        minPrice = $('#minPrice'+maintabIdData).val();
        maxPrice = $('#maxPrice'+maintabIdData).val();
        myparams = "&generalSearch="+keyword+"&propertyCategory="+propertyCategory+"&propertyState[]="+propertyState+"&minPrice="+minPrice+"&maxPrice="+maxPrice;
    }
 
    myparams = "function=website/property/generalSearch"+myparams+"&format=json&token=1&searchFrm=1";
    window.location.href=myparams;

  });

  

});
