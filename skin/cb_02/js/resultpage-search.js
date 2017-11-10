 
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
       
    } 

    
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
      $("#container-fluid-listing").addClass('checkloading');
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
    
    $(document).on('click', '#resetResults,#resetResultsOpt', function(event){

 
      event.preventDefault();
      $("#container-fluid-listing").addClass('checkloading');
      $("#container-fluid-listing").css("text-align", "center");
      $("#container-fluid-listing-more").hide();
      //$("#container-fluid-listing-more-fetching").show();

      $("#Keyword").val('');
      $("#KeywordOpt").val('');
      $("#MinPrice").val(1);
      $("#Maxprice").val(7000000);
      
      
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
      var limitrecord = 40;

      $("#startfrom").val(startfrom);
      $("#limitrecord").val(limitrecord);

      $("#limit").val(startfrom+','+limitrecord);
      
      addParams = 'generalSearch=&minPrice=&maxPrice=&propertyCategory=&minBed=1&minBath=1&limit='+startfrom+','+limitrecord+'&propertyAgentOffice=';
      addParams = 'function=website/property/generalSearch&'+addParams;
      addParams += '&format=json&token=1';
      
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
      var maxPrice = $("#MaxPriceOpt").val();
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

      var formParams = $("#searchLiveForm").serialize();
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