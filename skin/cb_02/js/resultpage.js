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
  
  
  $("#fileToUpload").on("click",function(){ 
         $(".imagupload").append('<div class="col-sm-3 form-group"><select class="form-control" id="sel1" name="locationid[]"><option>Unite..</option><option>Unite..</option><option>Unite..</option><option>Unite..</option></select><i class="fa fa-chevron-down" aria-hidden="true"></i> </div><div class="col-sm-8 form-group"><input type="text" name="location_input[]" id="location_input" class="sliderValue" placeholder="Enter location" required style="padding: 0;"></div>');
  });
  
})
$(document).on('click',function(){
  $('.collapse').collapse('hide');
})


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

      var selectort = 'span.listmainbath';

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



    $("#container-fluid-listing").addClass('checkloading');

    $("#container-fluid-listing").css("text-align", "");
    $("#container-fluid-listing").css("min-height", "300px");

    //$("#container-fluid-listing").html('<img src="skin/cb_02/images/no-results-found.gif" />');
    //return false;

    var generalSearch = $("#Keyword").val();
    var minPrice = $("#MinPrice").val();
    var maxPrice = $("#Maxprice").val();
    var startfrom = $("#startfrom").val();
    var limitrecord = $("#limitrecord").val();
    var propertyCity = $("#property_province").val();

    $("#propertyCategory_txt").val($( "#propertyCategory option:selected" ).text());
    $("#province_txt").val($( "#property_province option:selected" ).text());
    $("#property_type_txt").val($( "#property_type option:selected" ).text());

    var addParams = '';
    //var startfrom = 1;
    //var limitrecord = 20;
    //minPrice = minPrice.substr(1);
    //maxPrice = maxPrice.substr(1);

    $("#limit").val(startfrom+','+limitrecord);
    var formParams = $("#searchLiveForm").serialize();
    //alert(formParams);
    if(formParams != undefined){
      addParams = formParams;
    }else{
      addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=';
    }


    if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){
 

      addParams = 'function=website/property/generalSearch&'+addParams;

     //apiCall(params,'searchLive');
       
    } 


   // var urlCall  = 'https://www.coldwellbankercostarica.com/api/';
    //addParams    += '&format=json&token=1';
    //alert(addParams);
    //return false;
    apiCall(addParams,0);
    /*$.ajax({

        type: "POST",
        url: urlCall,
        data: addParams,
        success: function( response ) {

           
          propertyData = response.propertyData;
          var propertyhtml = "";
          
          for(var pp=0;pp<propertyData.length;pp++){

               
          propertyhtml +='<div class="col-sm-2 listingdiv">';

          propertyhtml +='<div class="imgdiv">';
            propertyhtml +='<div id="main-slider" class="carousel slide" data-ride="carousel">';
              propertyhtml +='<div class="carousel-inner">';
               
                  propertyhtml +='<div class="item active"> <img class="img-responsive" src="'+propertyData[pp].propertyUrlSmall+'" alt="https://s3.amazonaws.com/cbcr/image/propertyFile/a0C0V00000u7XvSUAU/small/a0B0V0000224ZykUAE.jpeg"></div>';
                
                
              propertyhtml +='</div>';
              
            propertyhtml +='</div>';
            propertyhtml +='<i class="fa fa-heart" aria-hidden="true"></i>';
            propertyhtml +='<span class="sale">'+propertyData[pp].propertyCategory+'</span>';
          propertyhtml +='</div>';
       
          propertyhtml +='<div class="col-sm-12 blue">';
            propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+propertyData[pp].propertyPrice+'</div>';
            propertyhtml +='<div class="col-sm-6 rightcount">';
              propertyhtml +='<span>'+propertyData[pp].propertyBed+' bed</span>   <span> '+propertyData[pp].propertyBath+' bath</span>';
            propertyhtml +='</div>';
          propertyhtml +='</div>';
         
          propertyhtml +='<div class="col-sm-12 location">';
            propertyhtml +='<span><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp; '+propertyData[pp].propertyCityLabel+'</span>';
            propertyhtml +='<span><i class="fa fa-home" aria-hidden="true"></i>&nbsp;'+propertyData[pp].propertyType+'</span>';
          propertyhtml +='</div>';
          propertyhtml +='<div class="col-sm-12 bottom">';
            propertyhtml +='<div class="col-sm-5">BUILT :<b> '+propertyData[pp].propertyBuilt+'</b></div>';
            propertyhtml +='<div class="col-sm-2"><i class="fa fa-camera" aria-hidden="true"></i><b> '+propertyData[pp].propertyPictureCount+'</b></div>';
            propertyhtml +='<div class="col-sm-5">ID: <b>#'+propertyData[pp].propertyId+'</b></div>';
          propertyhtml +='</div>';
         
         propertyhtml +='</div>';

       }

        $("#container-fluid-listing").removeClass('checkloading');

       
        
        $("#container-fluid-listing-more").show();

        $("#container-fluid-listing").html(propertyhtml); 
          
        }
    });*/
    $(document).on('keyup', '#Keyword', function(event){
 
      event.preventDefault();
      $("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      var generalSearch = $("#Keyword").val();
      var minPrice = $("#MinPrice").val();
      var maxPrice = $("#Maxprice").val();
      var propertyCity = $("#property_province").val();
      var addParams = '';
      var startfrom = 1;
      var limitrecord = 40;

      $("#startfrom").val(startfrom);
      $("#limitrecord").val(limitrecord);

      $("#limit").val(startfrom+','+limitrecord);
      var formParams = $("#searchLiveForm").serialize();
      if(formParams != undefined){
        addParams = formParams;
      }else{
        addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=';
      }


      if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){

        addParams = 'function=website/property/generalSearch&'+addParams;
        addParams    += '&format=json&token=1';
        //apiCall(params,'searchLive');
      } 

      apiCall(addParams,0);

     });


    $(document).on('click', '#updateSearchResult', function(event){
 
      event.preventDefault();
      $("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      var generalSearch = $("#KeywordOpt").val();
      var minPrice = $("#MinPriceOpt").val();
      var maxPrice = $("#MaxpriceOpt").val();
      //var propertyCity = $("#property_province").val();
      var addParams = '';
      var startfrom = 1;
      var limitrecord = 40;

      $("#searchLiveFormOpt > #startfrom").val(startfrom);
      $("#searchLiveFormOpt > #limitrecord").val(limitrecord);
      $("#searchLiveFormOpt > #limit").val(startfrom+','+limitrecord);

      $("#searchLiveForm > #limit").val(startfrom+','+limitrecord);
      $("#searchLiveForm > #startfrom").val(startfrom);
      $("#searchLiveForm > #limitrecord").val(limitrecord);

      var formParams = $("#searchLiveFormOpt").serialize();
      if(formParams != undefined){ 
        addParams = formParams;
      }else{
        addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=';
      }


      if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){

        addParams   = 'function=website/property/generalSearch&'+addParams;
        //addParams  += '&format=json&token=1';
        //alert('test');
      } 

      apiCall(addParams,0);

     });

    
    $(document).on('click', '.minBathOptInput', function(event){
      $("#minBathOpt").val($(this).val());
    });

    $(document).on('click', '.minBedOptInput', function(event){
      $("#minBedOpt").val($(this).val());
    });
    

    $(document).on('click', '#utility_links_close', function(event){
      $("#searchLiveFormOptLi").removeClass('open');
    });

    $(document).on('click', '.el-sp-price', function(event){
 
      event.preventDefault();
      $("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      var generalSearch = $("#Keyword").val();
      var minPrice = $("#MinPrice").val();
      var maxPrice = $("#Maxprice").val();
      var propertyCity = $("#property_province").val();
      var addParams = '';
      var startfrom = 1;
      var limitrecord = 40;

      $("#startfrom").val(startfrom);
      $("#limitrecord").val(limitrecord);

      $("#limit").val(startfrom+','+limitrecord);
      var formParams = $("#searchLiveForm").serialize();
      if(formParams != undefined){
        addParams = formParams;
      }else{
        addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=';
      }


      if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){

        addParams = 'function=website/property/generalSearch&'+addParams;
        addParams    += '&format=json&token=1';
        //apiCall(params,'searchLive');
      } 

      apiCall(addParams,0);

     });


    $(document).on('change', '#property_province,#property_type,#propertyCategory', function(event){
 
      event.preventDefault();
      $("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      var generalSearch = $("#Keyword").val();
      var minPrice = $("#MinPrice").val();
      var maxPrice = $("#Maxprice").val();
      var propertyCity = $("#property_province").val();
      var addParams = '';
      var startfrom = 1;
      var limitrecord = 40;

      $("#startfrom").val(startfrom);
      $("#limitrecord").val(limitrecord);

      $("#limit").val(startfrom+','+limitrecord);
      var formParams = $("#searchLiveForm").serialize();
      if(formParams != undefined){
        addParams = formParams;
      }else{
        addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=';
      }


      if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){

        addParams = 'function=website/property/generalSearch&'+addParams;
        addParams    += '&format=json&token=1';
        //apiCall(params,'searchLive');
      } 

      apiCall(addParams,0);

     });


    jQuery(document).on('click', '.loadmoreprop', function(event){

        $("#container-fluid-listing").addClass('checkloading');
        $("#container-fluid-listing").css("text-align", "center");
        $("#container-fluid-listing-more").hide();
        //$("#container-fluid-listing-more-fetching").show();
         
        var startfrom = parseInt($("#startfrom").val());
        //alert(startfrom);
        startfrom +=parseInt(40);
        //alert(startfrom);
        $("#startfrom").val(startfrom);
        var limitrecord = $("#limitrecord").val();
        $("#limit").val(startfrom+','+limitrecord);

        var generalSearch = $("#Keyword").val();
        var minPrice = $("#MinPrice").val();
        var maxPrice = $("#Maxprice").val();
        var propertyCity = $("#property_province").val();
        var addParams = '';
        
        //minPrice = minPrice.substr(1);
        //maxPrice = maxPrice.substr(1);


        var formParams = $("#searchLiveForm").serialize();
        if(formParams != undefined){
          addParams = formParams;
        }else{
          addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=';
        }


        

        //addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=';
      
        if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){

          /*$(".property").show('fast');
          if( $(window).scrollTop() < 5 ){
            $('html, body').animate({
                  scrollTop: $("#pageTitle1").offset().top
              }, 500);
          }*/
          /*var searchUrl = "/real-estate/search?"+addParams;
          window.history.pushState("", "Search Real Estate Properties in Costa Rica", searchUrl);

          if( $("#quick_search_advanced_link").length == 1 ){
            $("#quick_search_advanced_link").attr("href", searchUrl)
          }*/
        
          addParams = 'function=website/property/generalSearch&'+addParams;
          addParams    += '&format=json&token=1';
          //apiCall(params,'searchLive');
        } 

        
       
        apiCall(addParams,1);


    });

    $("#property_province option").on("click",function(){
        var mystring = $(this).text();
        mystring = mystring.substring(0,10);

       
        $('#province_drop_id').removeClass('open');
        $('#province_txt').html(mystring);

    });

    $("#propertyCategory option").on("click",function(){
        var mystring = $(this).text();
        mystring = mystring.substring(0,10);

       
        $('#propertyCategory_drop_id').removeClass('open');
        $('#propertyCategory_txt').html(mystring);

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
        //$("#MinPrice").val("$"+minPrice);
        //$("#Maxprice").val("$"+maxPrice);

        $('#MinPrice').each(function(){
            $(this).val(minPrice);
        });
        $('#Maxprice').each(function(){
            $(this).val(maxPrice);
        });

        var selPriceHtml=$(this).html();
        $("#currPrice").html(selPriceHtml);
        $('#el-li-price').removeClass('open');

    });

    
    $('.imgdiv').each(function(index){
     $(this).find('#main-slider').attr('id',"main-slider"+index);
     $(this).find('.carousel-control').attr('href',"#main-slider"+index);
    });
});


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

              //alert(propertyData[pp].propertyTitle);
          propertyhtml +='<div class="col-sm-2 listingdiv">';

          propertyhtml +='<div class="imgdiv">';
            propertyhtml +='<div id="main-slider" class="carousel slide" data-ride="carousel">';
              propertyhtml +='<div class="carousel-inner">';
              //var propimage = propertyData[pp].propertyUrlSmall;
              //var propimage = propimage.trim();
              //if(propimage!="null"){
                  propertyhtml +='<div class="item active"> <img class="img-responsive" src="'+propertyData[pp].propertyUrlSmall+'" alt="https://s3.amazonaws.com/cbcr/image/propertyFile/a0C0V00000u7XvSUAU/small/a0B0V0000224ZykUAE.jpeg"></div>';
                 // propertyhtml +='<div class="item"> <img class="img-responsive" src="'+propertyData[pp].propertyUrlSmall+'"></div>';
             // }else{
               //   propertyhtml +='<div class="item"> <img class="img-responsive" src="https://s3.amazonaws.com/cbcr/image/propertyFile/a0C0V00000u7XvSUAU/small/a0B0V0000224ZykUAE.jpeg"></div>';
             // }
                
              propertyhtml +='</div>';
             // propertyhtml +='<a class="left carousel-control" href="#main-slider" data-slide="prev"> <span class="icon-prev"></span> </a>';
             // propertyhtml +='<a class="right carousel-control" href="#main-slider" data-slide="next"> <span class="icon-next"></span> </a>';
               
            propertyhtml +='</div>';
            propertyhtml +='<i class="fa fa-heart" aria-hidden="true"></i>';
            propertyhtml +='<span class="sale">'+propertyData[pp].propertyCategory+'</span>';
          propertyhtml +='</div>';
       
          propertyhtml +='<div class="col-sm-12 blue">';

            if(propertyData[pp].propertyCategory=="Rent"){

              if(propertyData[pp].propertyPriceDay!=null){
                propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+propertyData[pp].propertyPriceDay+'/ Day</div>';
              }else if(propertyData[pp].propertyPriceWeek!=null){
                propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+propertyData[pp].propertyPriceWeek+'/ Week</div>';
              }else if(propertyData[pp].propertyPriceMonth!=null){
                propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+propertyData[pp].propertyPriceMonth+'/ Month</div>';
              }else{
                propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+propertyData[pp].propertyPrice+'</div>';
              }

            }else{
              propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+propertyData[pp].propertyPrice+'</div>';
            }

            propertyhtml +='<div class="col-sm-6 rightcount">';
              propertyhtml +='<span>'+propertyData[pp].propertyBed+' bed</span>   <span> '+propertyData[pp].propertyBath+' bath</span>';
            propertyhtml +='</div>';
          propertyhtml +='</div>';
         
          propertyhtml +='<div class="col-sm-12 location">';
            propertyhtml +='<span><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp; '+propertyData[pp].propertyCityLabel+'</span>';
            propertyhtml +='<span><i class="fa fa-home" aria-hidden="true"></i>&nbsp;'+propertyData[pp].propertyType+'</span>';
          propertyhtml +='</div>';
          propertyhtml +='<div class="col-sm-12 bottom">';
            propertyhtml +='<div class="col-sm-5">BUILT :<b> '+propertyData[pp].propertyBuilt+'</b></div>';
            propertyhtml +='<div class="col-sm-2"><i class="fa fa-camera" aria-hidden="true"></i><b> '+propertyData[pp].propertyPictureCount+'</b></div>';
            propertyhtml +='<div class="col-sm-5">ID: <b>#'+propertyData[pp].propertyId+'</b></div>';
          propertyhtml +='</div>';
         
         propertyhtml +='</div>';

       }

        $("#container-fluid-listing").removeClass('checkloading');

        if(propertyData.length==0){
          $("#container-fluid-listing-more").hide();
          //$("#container-fluid-listing-more-fetching").hide();
        }else{
          $("#container-fluid-listing-more").show();
          //$("#container-fluid-listing-more-fetching").hide();
        }
        if(parseInt(propertyData.length)){
          if(fromwhere==1)
            $("#container-fluid-listing").append(propertyhtml); 
          else
            $("#container-fluid-listing").html(propertyhtml); 
        }else{
          $("#container-fluid-listing").css("text-align", "center");
          $("#container-fluid-listing").html('<img src="skin/cb_02/images/no-results-found.gif" />');
        }
          
        }

      });

  }
