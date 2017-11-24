 
$(document).ready(function() {

    // $("#container-fluid-listing").addClass('checkloading');

    $("#container-fluid-listing").css("text-align", "");
    $("#container-fluid-listing").css("min-height", "300px");

    //$("#container-fluid-listing").html('<img src="skin/cb_02/images/no-results-found.gif" />');
    //return false;
    //alert(window.location);
    var fromwheree = getQueryStringValue("searchFrm");

    if(fromwheree==1){
        $("#Keyword").val(getQueryStringValue("generalSearch"));
        $("#MinPrice").val(getQueryStringValue("minPrice"));
        $("#Maxprice").val(getQueryStringValue("maxPrice"));
      
        if(getQueryStringValue("propertyState[]")!=null)
        {
           $("#property_province").val(getQueryStringValue("propertyState[]"));
           $("#province_txt").html(getQueryStringValue("propertyState[]"));
        }
        
       // alert($("#province_txt").html(getQueryStringValue("propertyState[]")));

        $("#propertyCategory").val(getQueryStringValue("propertyCategory"));
        $("#propertyCategory_txt").html(getQueryStringValue("propertyCategory"));
        
        if(getQueryStringValue("propertyType[]")!=null)
        {
          $("#property_type").val(getQueryStringValue("propertyType[]"));
          $("#property_type_txt").html(getQueryStringValue("propertyType[]"));
        }
        //$('.selDiv option[value="SEL1"]')
    }

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

    $("#startfrom").prop("disabled", 'disabled');
    $("#limitrecord").prop("disabled", 'disabled');
    $('#MinPriceOpt').prop("disabled", 'disabled');
    $('#MaxPriceOpt').prop("disabled", 'disabled');
    $('#KeywordOpt').prop("disabled", 'disabled');

    $('#SquareMeters').prop("disabled", 'disabled');
    $('#Acres').prop("disabled", 'disabled');
    $('#location_input').prop("disabled", 'disabled');
    $('#locationid').prop("disabled", 'disabled');
    $('#SquareMetersOpt').prop("disabled", 'disabled');
    $('#AcresOpt').prop("disabled", 'disabled');
    $('#LivingPrice').prop("disabled", 'disabled');

    

    $("#limit").val(startfrom+','+limitrecord);

    //var formParams = $("#searchLiveForm").serialize();
    //alert(formParams);
    if(window.location.href.indexOf('?') + 1){
      var formParams = window.location.href.slice(window.location.href.indexOf('?') + 1);
  
      }else{
      var formParams = "";
    }
    //alert(formParams);
    if(formParams != ""){
      addParams = formParams;
    }else{
      addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=&format=json&token=1';
    }

    if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){
      addParams = 'function=website/property/generalSearch&'+addParams;
    } 
 
    //alert(addParams);
 
    apiCall(addParams,0);


     $(document).on('keyup', '#KeywordOpt', function(event){
 
      event.preventDefault();
      //$("#container-fluid-listing").addClass('checkloading');
      //$("#container-fluid-listing").css("text-align", "center");
      //$("#container-fluid-listing-more").hide();

      var generalSearch = $("#KeywordOpt").val();
      $("#Keyword").val(generalSearch);
      

     });
    
    $(document).on('keyup', '#Keyword', function(event){
 
      event.preventDefault();
      //$("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      var generalSearch = $("#Keyword").val();
      $("#KeywordOpt").val(generalSearch);
      //$("#KeywordOpt").val(generalSearch);

      var minPrice = $("#MinPrice").val();
      var maxPrice = $("#Maxprice").val();
      var propertyCity = $("#property_province").val();
      var addParams = '';
      var startfrom = 1;
      var limitrecord = 80;

      $("#startfrom").val(startfrom);
      $("#limitrecord").val(limitrecord);

      $("#startfrom").prop("disabled", 'disabled');
      $("#limitrecord").prop("disabled", 'disabled');
      $('#MinPriceOpt').prop("disabled", 'disabled');
      $('#MaxPriceOpt').prop("disabled", 'disabled');
      $('#KeywordOpt').prop("disabled", 'disabled');

      $('#SquareMeters').prop("disabled", 'disabled');
      $('#Acres').prop("disabled", 'disabled');
      $('#location_input').prop("disabled", 'disabled');
      $('#locationid').prop("disabled", 'disabled');
      $('#SquareMetersOpt').prop("disabled", 'disabled');
      $('#AcresOpt').prop("disabled", 'disabled');
      $('#LivingPrice').prop("disabled", 'disabled');

      $("#limit").val(startfrom+','+limitrecord);
      var formParams = $("#searchLiveForm").serialize();
      if(formParams != undefined){
        addParams = formParams;
      }else{
        addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=&format=json&token=1';
      }


      if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){

        addParams = 'function=website/property/generalSearch&'+addParams;
        //addParams    += '&format=json&token=1';
        //apiCall(params,'searchLive');
      } 
      var searchUrl = addParams;
      window.history.pushState("", "Search Real Estate Properties in Costa Rica", searchUrl);
      apiCall(addParams,0);

     });

       $(document).on('change','#order1', function(event){
            var my1= $("#order1").val();
            $("#orderBy").val(my1);
            $('#updateSearchResult').click();
       });    


    
    $(document).on('click', '#resetResults,#resetResultsOpt', function(event){

 
      event.preventDefault();
      //$("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      $("#Keyword").val('');
      $("#KeywordOpt").val('');
      $("#MinPrice").val(1);
      $("#Maxprice").val(7000000);

      $("#minPropertyFloor").val(200+'+');
      $("#maxPropertyFloor").val(0);
      $("#minPropertyLand").val(200+'+');
      $("#SquareMeters98").val(809200+'+');
      
      $( "#slider-range98" ).slider({
      range: "max",
      min: 0,
      max: 5000000,
      value: 809200,
      slide: function( event, ui ) {
        $( "#SquareMeters98" ).val(ui.value+'+');
      }
    });

      $( "#slider-range2" ).slider({

      range: "max",
      min: 0,
      max: 500,
      value: 200,
      slide: function( event, ui ) {
        $( "#minPropertyFloor" ).val(ui.value+'+');
      }
    });

       $( "#slider-range99" ).slider({
      range: "max",
      min: 0,
      max: 500,
      value: 200,
      slide: function( event, ui ) {
        var my = (ui.value)*4046;
        $( "#minPropertyLand" ).val(ui.value+'+');
            
      }
    });
      
      $("#MinPriceOpt").val(1);
      $("#MaxPriceOpt").val(7000000);

      $("#property_province").val('');
      $("#minBathOpt").val('');
      $("#minBedOpt").val('');

      $('#province_txt').html('All Provinces');
      $('#propertyCategory_txt').html('Category');
      $('#property_type_txt').html('Property Type');
      $("#currPrice").html('Price');

      $( ".listmain" ).each(function( index ) {
        $(this).removeClass('active');
      });

      
      
      
      $('#property_typeOptCondo').prop( "checked", false );
      $('#property_typeOptHome').prop( "checked", false );
      $('#property_typeOptLand').prop( "checked", false );

      $( ".listmainbath" ).each(function( index ) {
        $(this).removeClass('active');
      });

      $( "#propertyCategory option" ).each(function( index ) {
        $(this).prop("selected", false)
        $(this).removeAttr("selected");
      });

      $( "#property_province option" ).each(function( index ) {
        $(this).prop("selected", false)
        $(this).removeAttr("selected");
      });

      $( "#property_type option" ).each(function( index ) {
        $(this).prop("selected", false)
        $(this).removeAttr("selected");
      });

      var addParams = '';
      var startfrom = 1;
      var limitrecord = 80;

      $("#startfrom").val(startfrom);
      $("#limitrecord").val(limitrecord);

      $("#limit").val(startfrom+','+limitrecord);

      $("#startfrom").prop("disabled", 'disabled');
      $("#limitrecord").prop("disabled", 'disabled');
      $('#MinPriceOpt').prop("disabled", 'disabled');
      $('#MaxPriceOpt').prop("disabled", 'disabled');
      $('#KeywordOpt').prop("disabled", 'disabled');

      $('#SquareMeters').prop("disabled", 'disabled');
      $('#Acres').prop("disabled", 'disabled');
      $('#location_input').prop("disabled", 'disabled');
      $('#locationid').prop("disabled", 'disabled');
      $('#SquareMetersOpt').prop("disabled", 'disabled');
      $('#AcresOpt').prop("disabled", 'disabled');
      $('#LivingPrice').prop("disabled", 'disabled');
      
      addParams = 'generalSearch=&minPrice=&maxPrice=&propertyCategory=&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=';
      addParamsUrl = addParams;
      addParams = 'function=website/property/generalSearch&'+addParams;
      addParams += '&format=json&token=1';
      var searchUrl = addParamsUrl;
      window.history.pushState("", "Search Real Estate Properties in Costa Rica", searchUrl);
      apiCall(addParams,0);

     
    });

    $(document).on('click', '#updateSearchResult', function(event){
     
      event.preventDefault();
      //$("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      var generalSearch = $("#KeywordOpt").val();
      var minPrice = $("#MinPriceOpt").val();
      var maxPrice = $("#MaxPriceOpt").val();
      var minPropertyFloor = $("#minPropertyFloor").val();
      var maxPropertyFloor = $("#maxPropertyFloor").val();
      var propertyLand = $("#minPropertyLand").val();
     
      var avoid = "+"
      var minPropertyFloor=minPropertyFloor.replace(avoid,'');
      var maxPropertyFloor=maxPropertyFloor.replace(avoid,'');
      var propertyLand=propertyLand.replace(avoid,'');
    
      $( "#minPropertyFloor" ).val(minPropertyFloor);
      $( "#maxPropertyFloor" ).val(maxPropertyFloor);
      $( "#minPropertyLand" ).val(propertyLand);
      

       //var propertyCity = $("#property_province").val();
      var addParams = '';
      var startfrom = 1;
      var limitrecord = 80;

      //$("#searchLiveFormOpt > #startfrom").val(startfrom);
      //$("#searchLiveFormOpt > #limitrecord").val(limitrecord);
     //$("#searchLiveFormOpt > #limit").val(startfrom+','+limitrecord);

      $("#searchLiveForm > #limit").val(startfrom+','+limitrecord);
      $("#searchLiveForm > #startfrom").val(startfrom);
      $("#searchLiveForm > #limitrecord").val(limitrecord);

      $("#startfrom").prop("disabled", 'disabled');
      $("#limitrecord").prop("disabled", 'disabled');
      $('#MinPriceOpt').prop("disabled", 'disabled');
      $('#MaxPriceOpt').prop("disabled", 'disabled');
      $('#KeywordOpt').prop("disabled", 'disabled');

      $('#SquareMeters').prop("disabled", 'disabled');
      $('#Acres').prop("disabled", 'disabled');
      $('#location_input').prop("disabled", 'disabled');
      $('#locationid').prop("disabled", 'disabled');
      $('#SquareMetersOpt').prop("disabled", 'disabled');
      $('#AcresOpt').prop("disabled", 'disabled');
      $('#LivingPrice').prop("disabled", 'disabled');

      var formParams = $("#searchLiveForm").serialize();
      if(formParams != undefined){ 
        addParams = formParams;
      }else{
        addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=&format=json&token=1';
      }


      if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){
        addParamsUrl = addParams;
        addParams   = 'function=website/property/generalSearch&'+addParams;
        //addParams  += '&format=json&token=1';
        //alert('test');
      } 
      var searchUrl = addParamsUrl;
          window.history.pushState("", "Search Real Estate Properties in Costa Rica", searchUrl);
      apiCall(addParams,0);
      
       var minPropertyFloor = $("#minPropertyFloor").val();
          var maxPropertyFloor = $("#maxPropertyFloor").val();
          var propertyLand = $("#minPropertyLand").val();
          $( "#minPropertyFloor" ).val(minPropertyFloor+'+');
          $( "#maxPropertyFloor" ).val(maxPropertyFloor+'+');
          $( "#minPropertyLand" ).val(propertyLand+'+');
          $("#searchLiveFormOptLi").removeClass('open');
         

     });

    
    $(document).on('click', '.minBathOptInput', function(event){
        
      $("#minBathOpt").val($(this).val());
      var current =  $(this).attr('id');

      //var current = $(this);

      $( this ).parent().addClass( "active" );

        $( ".listmainbath" ).each(function( index ) {
         
          var dynamicClass = $(this).attr('class');
          
           if(dynamicClass.indexOf(current) !== -1){

           }else{

            $(this).removeClass('active');

           }
           
        });
         

      });

    $(document).on('click', '.minBedOptInput', function(event){

      $("#minBedOpt").val($(this).val());
      var current =  $(this).attr('id');
      $( this ).parent().addClass( "active" );

      $( ".listmain" ).each(function( index ) {
        var dynamicClass = $(this).attr('class');
          
         if(dynamicClass.indexOf(current) !== -1){

         }else{

          $(this).removeClass('active');

         }
      });

     // $( this ).parent().addClass( "active" );

    });
    

    $(document).on('click', '#utility_links_close', function(event){
      $("#searchLiveFormOptLi").removeClass('open');
    });

    $(document).on('click', '.el-sp-price', function(event){
 
      event.preventDefault();
     // $("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      var generalSearch = $("#Keyword").val();
      var minPrice = $("#MinPrice").val();
      var maxPrice = $("#Maxprice").val();
      var propertyCity = $("#property_province").val();
      var addParams = '';
      var startfrom = 1;
      var limitrecord = 80;

      $("#startfrom").val(startfrom);
      $("#limitrecord").val(limitrecord);

      $("#startfrom").prop("disabled", 'disabled');
      $("#limitrecord").prop("disabled", 'disabled');
      $('#MinPriceOpt').prop("disabled", 'disabled');
      $('#MaxPriceOpt').prop("disabled", 'disabled');
      $('#KeywordOpt').prop("disabled", 'disabled');

      $('#SquareMeters').prop("disabled", 'disabled');
      $('#Acres').prop("disabled", 'disabled');
      $('#location_input').prop("disabled", 'disabled');
      $('#locationid').prop("disabled", 'disabled');
      $('#SquareMetersOpt').prop("disabled", 'disabled');
      $('#AcresOpt').prop("disabled", 'disabled');
      $('#LivingPrice').prop("disabled", 'disabled');

      $("#limit").val(startfrom+','+limitrecord);
      var formParams = $("#searchLiveForm").serialize();
      if(formParams != undefined){
        addParams = formParams;
      }else{
        addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=&format=json&token=1';
      }


      if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){
        addParamsUrl = addParams;
        addParams = 'function=website/property/generalSearch&'+addParams;
        //addParams    += '&format=json&token=1';
        //apiCall(params,'searchLive');
      } 
      var searchUrl = addParamsUrl;
      window.history.pushState("", "Search Real Estate Properties in Costa Rica", searchUrl);
      apiCall(addParams,0);

     });


    $(document).on('change', '#property_province,#property_type,#propertyCategory', function(event){
 
      event.preventDefault();
     // $("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      var generalSearch = $("#Keyword").val();
      var minPrice = $("#MinPrice").val();
      var maxPrice = $("#Maxprice").val();
      var propertyCity = $("#property_province").val();
      var addParams = '';
      var startfrom = 1;
      var limitrecord = 80;

      $("#startfrom").val(startfrom);
      $("#limitrecord").val(limitrecord);

      $("#startfrom").prop("disabled", 'disabled');
      $("#limitrecord").prop("disabled", 'disabled');
      $('#MinPriceOpt').prop("disabled", 'disabled');
      $('#MaxPriceOpt').prop("disabled", 'disabled');
      $('#KeywordOpt').prop("disabled", 'disabled');

      $('#SquareMeters').prop("disabled", 'disabled');
      $('#Acres').prop("disabled", 'disabled');
      $('#location_input').prop("disabled", 'disabled');
      $('#locationid').prop("disabled", 'disabled');
      $('#SquareMetersOpt').prop("disabled", 'disabled');
      $('#AcresOpt').prop("disabled", 'disabled');
      $('#LivingPrice').prop("disabled", 'disabled');

      $("#limit").val(startfrom+','+limitrecord);
      var formParams = $("#searchLiveForm").serialize();
      if(formParams != undefined){
        addParams = formParams;
      }else{
        addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=&format=json&token=1';
      }


      if( (addParams != '') || (minPrice != '') || (maxPrice != '') ){

        addParams = 'function=website/property/generalSearch&'+addParams;
        //addParams    += '&format=json&token=1';


        //apiCall(params,'searchLive');
      } 

      var searchUrl = addParams;
          window.history.pushState("", "Search Real Estate Properties in Costa Rica", searchUrl);

      apiCall(addParams,0);

     });


    jQuery(document).on('click', '.loadmoreprop', function(event){

        //$("#container-fluid-listing").addClass('checkloading');
        $("#container-fluid-listing").css("text-align", "center");
        $("#container-fluid-listing-more").hide();
        //$("#container-fluid-listing-more-fetching").show();
         
        var startfrom = parseInt($("#startfrom").val());
        //alert(startfrom);
        startfrom +=parseInt(80);
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
        $("#startfrom").prop("disabled", 'disabled');
        $("#limitrecord").prop("disabled", 'disabled');
        $('#MinPriceOpt').prop("disabled", 'disabled');
        $('#MaxPriceOpt').prop("disabled", 'disabled');
        $('#KeywordOpt').prop("disabled", 'disabled');

        $('#SquareMeters').prop("disabled", 'disabled');
        $('#Acres').prop("disabled", 'disabled');
        $('#location_input').prop("disabled", 'disabled');
        $('#locationid').prop("disabled", 'disabled');
        $('#SquareMetersOpt').prop("disabled", 'disabled');
        $('#AcresOpt').prop("disabled", 'disabled');
        $('#LivingPrice').prop("disabled", 'disabled');


        var formParams = $("#searchLiveForm").serialize();
        if(formParams != undefined){
          addParams = formParams;
        }else{
          addParams = 'generalSearch='+generalSearch+'&minPrice='+minPrice+'&maxPrice='+maxPrice+'&propertyCategory=Sale&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=&format=json&token=1';
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
           addParamsUrl = addParams;
          addParams = 'function=website/property/generalSearch&'+addParams;

          //addParams    += '&format=json&token=1';

          
          //apiCall(params,'searchLive');
        } 
        var searchUrl = addParamsUrl;
        window.history.pushState("", "Search Real Estate Properties in Costa Rica", searchUrl);
        apiCall(addParams,1);

    });

    
});

  function getQueryStringValue (key) {  
      //return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  

    var values = [];
    var target = location.href;
    //alert(target);
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");

    var pattern = key + '=([^&#]+)';
    var o_reg = new RegExp(pattern,'ig');
    while (true){
        var matches = o_reg.exec(target);
        if (matches && matches[1]){
            values.push(matches[1]);
        } else {
            break;
        }
    }

    if (!values.length){
        return null;   
    } else {
        return values.length == 1 ? values[0] : values;
    }

  } 
  function apiCall(addParams,fromwhere){



      var urlCall  = 'https://www.coldwellbankercostarica.com/api/';
        $.ajax({

        type: "POST",
        url: urlCall,
        data: addParams,

        success: function( response ) {

          //return false;
         
          $("#startfrom").prop("disabled", false);
          $("#limitrecord").prop("disabled", false);
          $('#MinPriceOpt').prop("disabled", false);
          $('#MaxPriceOpt').prop("disabled", false);
          $('#KeywordOpt').prop("disabled", false);
          $('#SquareMeters').prop("disabled", false);
          $('#Acres').prop("disabled", false);
          $('#location_input').prop("disabled", false);
          $('#locationid').prop("disabled", false);
          $('#SquareMetersOpt').prop("disabled", false);
          $('#AcresOpt').prop("disabled", false);
          $('#LivingPrice').prop("disabled", false);
   
          propertyData = response.propertyData;
          var propertyhtml = "";
          
          for(var pp=0;pp<propertyData.length;pp++){

              //alert(propertyData[pp].propertyTitle);
          propertyhtml +='<div class="col-sm-2 listingdiv">';

          propertyhtml +='<div class="imgdiv">';
            propertyhtml +='<div id="main-slider" class="carousel slide" data-ride="carousel">';
              propertyhtml +='<div class="carousel-inner">';
              var propimage = propertyData[pp].propertyUrlSmall;
              
              if(propimage!=null){

                  propertyhtml +='<div class="item active"> <a href="details_page.html?propertyId='+propertyData[pp].propertyId+'"> <img class="img-responsive" src="'+propertyData[pp].propertyUrlSmall+'" alt="https://s3.amazonaws.com/cbcr/image/propertyFile/a0C0V00000u7XvSUAU/small/a0B0V0000224ZykUAE.jpeg"></a></div>';
                  //propertyhtml +='<div class="item"> <img class="img-responsive" src="'+propertyData[pp].propertyUrlSmall+'"></div>';
              }else{
                  propertyhtml +='<div class="item active"> <a href="details_page.html?propertyId='+propertyData[pp].propertyId+'"> <img class="img-responsive" src="https://www.coldwellbankercostarica.com/skin/cb_02/img/property/no-picture.jpg"> </a></div>';
              }
                
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
                
                propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+parseInt(propertyData[pp].propertyPriceDay)+'/ Day</div>';
              }else if(propertyData[pp].propertyPriceWeek!=null){
               
                propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+parseInt(propertyData[pp].propertyPriceWeek)+'/ Week</div>';
              }else if(propertyData[pp].propertyPriceMonth!=null){
                propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+parseInt(propertyData[pp].propertyPriceMonth)+'/ Month</div>';
              }else{
                propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+parseInt(propertyData[pp].propertyPrice)+'</div>';
              }

            }else{
              propertyhtml +='<div class="col-sm-6 price"> <sup>$</sup>&nbsp;'+parseInt(propertyData[pp].propertyPrice)+'</div>';
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

        //$("#container-fluid-listing").removeClass('checkloading');

        if(propertyData.length==0){
          $("#container-fluid-listing-more").hide();
          //$("#container-fluid-listing-more-fetching").hide();
        }else if(propertyData.length<80){
          $("#container-fluid-listing-more").hide();
        }else{
          $("#container-fluid-listing-more").show();
          //$("#container-fluid-listing-more-fetching").hide();
        }
        if(parseInt(propertyData.length)){
          if(fromwhere==1)
            //$("#container-fluid-listing").append(propertyhtml); 
              $("#container-fluid-listing").html(propertyhtml); 
          else
            $("#container-fluid-listing").html(propertyhtml); 
        }else{
          $("#container-fluid-listing").css("text-align", "center");
          $("#container-fluid-listing").html('<img src="skin/cb_02/images/no-results-found.gif" />');
        }
          
        }

      });

      addParams = addParams.replace('limit=', 'limitnew=');
      
      $.ajax({
        type: "POST",
        url: urlCall,
        data: addParams,

        success: function( response ) {

          propertyData = response.propertyData;
          var propertyhtml = "";
          
          $("#totalResultsFound").text(propertyData.length+' Results');
          $("#cbCountOpt").text(propertyData.length);
  
          
        }

      });

  }
