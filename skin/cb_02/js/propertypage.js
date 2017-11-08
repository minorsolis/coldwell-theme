function getElementsByClassName(className) {
if (document.getElementsByClassName) { 
  return document.getElementsByClassName(className); }
else { return document.querySelectorAll('.' + className); } 
 }
jQuery(document).ready(function($){
  $(".fa-heart-o").on("click", function() {
      
      $(this).addClass("active");
    alert("Saved to Favorites!");
    });


 $(document).on('click', '.close', function(event){
  //$(".close").on("click", function() {
    
   var deckdata = getElementsByClassName("modal-backdrop") ;
    for(var ij=0; ij<deckdata.length; ij++) { 
       deckdata[ij].remove();
    } 
     
  });

        $('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });

        $("#fileToUpload").on("click",function(){ 
         $(".imagupload").append('<div class="col-sm-3 form-group"><select class="form-control" id="sel1" name="locationid[]"><option>Unite..</option><option>Unite..</option><option>Unite..</option><option>Unite..</option></select><i class="fa fa-chevron-down" aria-hidden="true"></i> </div><div class="col-sm-8 form-group"><input type="text" name="location_input[]" id="location_input" class="sliderValue" placeholder="Enter location" required style="padding: 0;"></div>');
  });
});
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

 
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val('$'+ui.values[i]);
            }
      }
    });
  
  
  
  
  $( "#slider-range-inner" ).slider({
      range: true,
      min: 0,
      max: 70000000,
      values: [ 0, 70000000],
      slide: function( event, ui ) {
        //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        for (var i = 0; i < ui.values.length; ++i) {
            $("input.sliderValue[data-index=" + i + "]").val('$'+ui.values[i]);
        }
      }
    });
  
  
  
    /*$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );*/


      $( "#slider-range2" ).slider({
      range: "max",
      min: 0,
      max: 500,
      value: 200,
      slide: function( event, ui ) {
        $( "#LivingPrice" ).val(ui.value+'+');
      }
    });

      $( "#slider-range3" ).slider({
      range: "max",
      min: 0,
      max: 500,
      value: 200,
      slide: function( event, ui ) {
        $( "#Acres" ).val(ui.value+'+');
      }
    });

      $( "#slider-range4" ).slider({
      range: "max",
      min: 0,
      max: 500,
      value: 200,
      slide: function( event, ui ) {
        $( "#SquareMeters" ).val(ui.value+'+');
      }
    });
  
 $( "#slider-range99" ).slider({
      range: "max",
      min: 0,
      max: 500,
      value: 200,
      slide: function( event, ui ) {
        $( "#Acres99" ).val(ui.value+'+');
      }
    });

      $( "#slider-range98" ).slider({
      range: "max",
      min: 0,
      max: 500,
      value: 200,
      slide: function( event, ui ) {
        $( "#SquareMeters98" ).val(ui.value+'+');
      }
    });
  
  




      var selectort = 'span.listmain';

      $(selectort).on('click', function(){
          $(selectort).removeClass('active');
          $(this).addClass('active');
      });

    var selectorss = 'span.adv_beds';

      $(selectorss).on('click', function(){  
          $(selectorss).removeClass('active');
          $(this).addClass('active');
      });
    
    
    var selectorn = 'span.adv_bath';

      $(selectorn).on('click', function(){  
          $(selectorn).removeClass('active');
          $(this).addClass('active');
      });
    
    
  } );
  
 
 
  
  $(document).ready(function() {
    var reqPropertyId = getUrlParameter('propertyId');
    
    var addParams = 'function=website/property/generalSearch&token=1&format=json&propertyId='+reqPropertyId;
 
    apiCall(addParams,0);


    $("#property_province option").on("click",function(){
        var mystring = $(this).text();
        mystring = mystring.substring(0,10);

       
        $('#province_drop_id').removeClass('open');
        $('#province_txt').html(mystring);

    });

    $("#property_type option").on("click",function(){

      var mystringtype = $(this).text();
      mystringtype = mystringtype.substring(0,10);
      $('#property_type_drop_id').removeClass('open');
      $('#property_type_txt').html(mystringtype);
     
    });

    
    $(".sliderValue").keydown(function (e) {
  
    if(this.id=="MinPrice" || this.id=="Maxprice"){
      var inputval = $(this).val();
      if (inputval.indexOf('$') > -1)
      {
       
      }else{
        $(this).val("$"+$(this).val());
      }
    }
  
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


    $(".el-advancesearch").on("click",function(){
        $('.toppart').toggle(1000);
        $('.advancedpart').toggle(1000);
        $(this).toggle();
        $(".el-back").toggle()
    });
    $(".el-back").on("click",function(){
        $('.toppart').toggle(1000);
        $('.advancedpart').toggle(1000);
        $(this).toggle();
        $(".el-advancesearch").toggle()
    });

    var activePrice="100";
    $(".el-sp-price").on("click",function(){
        $(".el-sp-price").removeClass('is-active');
        $(this).addClass('is-active');
        var selPrice=$(this).attr('data');
        activePrice=selPrice;
        selPrice=parseInt(selPrice);
        
        var minPrice=0;
        var maxPrice=150;
        if(selPrice==100)
        {
          minPrice=0;
          maxPrice=150;
        }
        else if(selPrice>100 && selPrice<1000)
        {
          minPrice=selPrice-50;
          maxPrice=selPrice+50;
        }
        else if(selPrice==1000)
        {
          minPrice=selPrice-50;
          maxPrice=selPrice+250;
        }
        else if(selPrice>1000 && selPrice<2000)
        {
          minPrice=selPrice-250;
          maxPrice=selPrice+250;
        }
        else if(selPrice==2000)
        {
          minPrice=selPrice-250;
          maxPrice=selPrice+500;
        }
        else if(selPrice>2000 && selPrice<=5000)
        {
          minPrice=selPrice-500;
          maxPrice=selPrice+500;
        }
        else if(selPrice>5000 && selPrice<50000)
        {
          minPrice=selPrice-2500;
          maxPrice=selPrice+2500;
        }
        else if(selPrice==50000)
        {
          minPrice=selPrice-2500;
          maxPrice=selPrice+5000;
        }
        else if(selPrice>50000)
        {
          minPrice=selPrice-5000;
          maxPrice=selPrice;
         
        }
        if(minPrice!=0)
        {
          minPrice=minPrice*1000;
          maxPrice=maxPrice*1000;
        }
        $("#MinPrice").val("$"+minPrice);
        $("#Maxprice").val("$"+maxPrice);
        var selPriceHtml=$(this).html();
        $("#currPrice").html(selPriceHtml);
        $('#el-li-price').removeClass('open');

    });

    
    $('.imgdiv').each(function(index){
     $(this).find('#main-slider').attr('id',"main-slider"+index);
     $(this).find('.carousel-control').attr('href',"#main-slider"+index);
    });
});
function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function apiCall(addParams,fromwhere){


      var urlCall  = 'https://www.coldwellbankercostarica.com/api/';

      $.ajax({

        type: "POST",
        url: urlCall,
        data: addParams,

        success: function( response ) {

          propertyData = response.propertyData;
          var propertyhtml = "";
          
          for(var pp=0;pp<propertyData.length;pp++){
              
              $("#cbPropertyTitle").html(propertyData[pp].propertyTitle);
              $("#cbPropertyCategory").text(propertyData[pp].propertyCategory);
              $("#cbPropertyCategoryTop").html('For '+propertyData[pp].propertyCategory+'&gt;');
              $("#cbPropertyAreaBy").html('By Area: '+propertyData[pp].propertyCityLabel);
              

              $("#cbPropertyPrice").html(propertyData[pp].propertyPriceCurrency+' '+propertyData[pp].propertyPriceMonth);
              $("#cbPropertyLocation").html('<i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;'+propertyData[pp].propertyCityLabel+', '+propertyData[pp].propertyState+', '+propertyData[pp].propertyCountry);
              $("#cbPropertyMapLocation").html('<i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;'+propertyData[pp].propertyCityLabel+', '+propertyData[pp].propertyState+', '+propertyData[pp].propertyCountry);

              $("#cbPropertyType").html('<i class="fa fa-home" aria-hidden="true"></i>&nbsp;'+propertyData[pp].propertyType);

              $("#cbPropertyBeds").text(propertyData[pp].propertyBed+' bed');
              $("#cbPropertyBaths").text(propertyData[pp].propertyBath+' bath');
              $("#cbPropertySqft").text(propertyData[pp].propertyFloor+' sqft');
              $("#cbPropertyBuilt").text('Built: '+propertyData[pp].propertyBuilt);
              $("#cbPropertyStatus").text(propertyData[pp].propertyStatus);
              $("#cbPropertyId").text(propertyData[pp].propertyId);

              var propertyDescription = nl2br(propertyData[pp].propertyDescription);
              propertyDescription = propertyDescription.replace(/\n/g, "<br />");
              $("#cbPropertyDescription").html(propertyDescription);

              $("#cbPropertyLand").html(propertyData[pp].propertyFloor);
              $("#cbPropertyLandAcr").html(propertyData[pp].propertyLand);

              

              var propertyFeatures = propertyData[pp].propertyFeature;
              var propertyFeatureAry = new Array();

              propertyFeatureAry = propertyFeatures.split(";");
              var propfeahtml = '';

              for(var pf=0;pf<propertyFeatureAry.length;pf++){
                propfeahtml +='<li><i class="fa fa-check" aria-hidden="true"></i>&nbsp; '+propertyFeatureAry[pf]+'</li>';
              }

              $("#cbPropertyFeatures").html(propfeahtml);
              $("#cbPropertyAgentName").html(propertyData[pp].propertyAgentFirstName+' '+propertyData[pp].propertyAgentLastName);
              $("#cbPropertyAgentOffice").html(propertyData[pp].propertyAgentCompany);
              
              if(propertyData[pp].propertyAgentMobile!=null){
                $("#cbPropertyAgentTellHr").prop('href','tel://'+propertyData[pp].propertyAgentMobile);
                $("#cbPropertyAgentTell").html(propertyData[pp].propertyAgentMobile);
              }else{
                $("#cbPropertyAgentTellHr").prop('href','tel://'+propertyData[pp].propertyAgentPhone);
                $("#cbPropertyAgentTell").html(propertyData[pp].propertyAgentPhone);
              }
              $("#cbPropertyAgentEmailHr").prop('href',' mailto:'+propertyData[pp].propertyAgentEmail);
              $("#cbPropertyAgentEmail").html(propertyData[pp].propertyAgentEmail);

              if(propertyData[pp].propertyAgentPicture!=null){
                $("#cbPropertyAgentImg").prop('src',propertyData[pp].propertyAgentPicture);
              }

              if(propertyData[pp].propertyVideoCount!=null){
                if(propertyData[pp].propertyVideoCount==0){
                  $("#cbPropertyVideoMain").remove();
                }
              }
              

              

              if(propertyData[pp].propertyLatitude!=null && propertyData[pp].propertyLongitude!=null){
                $("#cbPropertyEmbedMap").attr('src','https://maps.google.com/maps?q='+propertyData[pp].propertyLatitude+','+propertyData[pp].propertyLongitude+'&hl=es;z=14&output=embed');
              }else{
                $("#cbPropertyEmbedMap").attr('src','https://maps.google.com/maps?q=9.934739,-84.087502&hl=es;z=14&output=embed');
                
              }
              
          }

          $("#container-fluid-listing").removeClass('checkloading');

        }

      });

  }