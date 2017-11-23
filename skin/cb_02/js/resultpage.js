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
        else if(selPrice=60000)
        {
          minPrice=selPrice-5000;
          maxPrice=selPrice+5000;
         
        }else{
          minPrice=selPrice-5000;
          maxPrice=selPrice;
        }
        
          minPriceLast=minPrice*1000;
          maxPriceLast=maxPrice*1000;
          
        //$("#MinPrice").val("$"+minPrice);
        //$("#Maxprice").val("$"+maxPrice);

        $('#MinPrice').each(function(){
            $(this).val(minPriceLast);
        });
        $('#Maxprice').each(function(){
            $(this).val(maxPriceLast);
        });
        $('#MinPriceOpt').val("$"+minPriceLast);
        $('#MaxPriceOpt').val("$"+maxPriceLast);

        $( "#slider-range" ).slider({
            range: true,
            min: 1,
            max: 70000000,
            values: [ minPriceLast, maxPriceLast ],
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
          values: [ minPriceLast, maxPriceLast],
          slide: function( event, ui ) {
            //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val('$'+ui.values[i]);
            }
          }
        });

        var selPriceHtml=$(this).html();

        if(minPrice==0)
          $("#currPrice").html(minPrice+'-'+maxPrice+'k');
        else
        $("#currPrice").html(minPrice+'k-'+maxPrice+'k');
        $('#el-li-price').removeClass('open');

    });

    
    $('.imgdiv').each(function(index){
     $(this).find('#main-slider').attr('id',"main-slider"+index);
     $(this).find('.carousel-control').attr('href',"#main-slider"+index);
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
      min: 1,
      max: 70000000,
      values: [ 1000, 70000000 ],
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
        $( "#minPropertyFloor" ).val(ui.value+'+');
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
        var my = (ui.value)*4046;
        $( "#minPropertyLand" ).val(ui.value+'+');
        $( "#SquareMeters98" ).val(my+'+');

         $( "#slider-range98" ).slider({
      range: "max",
      min: 0,
      max: 5000000,
      value: my,
      slide: function( event, ui ) {
        $( "#SquareMeters98" ).val(ui.value+'+');
      }
    });

        
      }
    });

      $( "#slider-range98" ).slider({
      range: "max",
      min: 0,
      max: 5000000,
      value: 809200,
      slide: function( event, ui ) {
        $( "#SquareMeters98" ).val(ui.value+'+');
      }
    });
  
  




      /*var selectort = 'span.listmain';

      $(selectort).on('click', function(){
          $(selectort).removeClass('active');
          $(this).addClass('active');
      });

      var selectortb = 'span.listmainbath';

      $(selectortb).on('click', function(){
          $(selectortb).removeClass('active');
          $(this).addClass('active');
      });*/

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
  
 
