/**
 * @fileoverview This demo is used for MarkerClusterer. It will show 100 markers
 * using MarkerClusterer and count the time to show the difference between using
 * MarkerClusterer and without MarkerClusterer.
 * @author Luke Mahe (v2 author: Xiaoxi Wu)
 */

function $(element) {
  return document.getElementById(element);
}







/*jQuery(document).ready(function () {
							
	var $heading_disp_trips_info = jQuery('.innerMainDv');				
	 					 
	jQuery( "#googlemapcluster" ).find( ".innerMainDv" ).on('click', '.innerMainDv', function(event){
		alert("test");
		jQuery( ".innerMainDv" ).each(function( index ) {
			if( jQuery( this ).hasClass( "active" ))
				jQuery( this ).removeClass( "active" );
		});
														  
		jQuery( this ).addClass( "active" );											  
									  
	});

});*/

var imageUrl = liveUrl+'images/markerOrange.png';
var imageUrlHover = liveUrl+'images/markerBlack.png';

var speedTest = {};

speedTest.pics = null;
speedTest.map = null;
speedTest.markerClusterer = null;
speedTest.markers = [];
speedTest.infoWindow = null;
speedTest.infoWindow2 = null;

speedTest.init = function() {
	
	
	var styledMapType = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            {name: 'Styled Map'});
	
	
  var latlng = new google.maps.LatLng(38.9567339, 1.34059829);
  var options = {
    'zoom': 12,
    'center': latlng,
    'mapTypeId': google.maps.MapTypeId.ROADMAP,
	'maxZoom':16,
	'styles': [
    {
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    }
  ],
   mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }

  };

  



  speedTest.map = new google.maps.Map($('map'), options);

  /*speedTest.map.poi = function(state){

    var styles = [
      {
        "featureType": "poi",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ];

    this.set("styles", (state)? {} : styles );

  }*/
  
  /* var opt = { minZoom: 6, maxZoom: 9 };
 	map.setOptions(opt);*/
  
  speedTest.pics = data.properties;
  
  //var useGmm = document.getElementById('usegmm');
  //google.maps.event.addDomListener(useGmm, 'click', speedTest.change);
  
  //var numMarkers = document.getElementById('nummarkers');
  //google.maps.event.addDomListener(numMarkers, 'change', speedTest.change);

  speedTest.infoWindow = new google.maps.InfoWindow();
  speedTest.infoWindow2 = new google.maps.InfoWindow();
 // speedTest.map.mapTypes.set('styled_map', styledMapType);
//  speedTest.map.setMapTypeId('styled_map');
  
   var styles = {
        default: null,
        silver: [
          {
            elementType: 'geometry',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{color: '#f5f5f5'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#bdbdbd'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#ffffff'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{color: '#757575'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#dadada'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#616161'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#e5e5e5'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#eeeeee'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#c9c9c9'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9e9e9e'}]
          }
        ],

        night: [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ],

        retro: [
          {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{color: '#c9b2a6'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{color: '#dcd2be'}]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{color: '#ae9e90'}]
          },
          {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#93817c'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{color: '#a5b076'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#447530'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#f5f1e6'}]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{color: '#fdfcf8'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#f8c967'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#e9bc62'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{color: '#e98d58'}]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{color: '#db8555'}]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{color: '#806b63'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8f7d77'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#ebe3cd'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#dfd2ae'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{color: '#b9d3c2'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#92998d'}]
          }
        ],

        hiding: [
          {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          }
        ]
      };
  
   // Add a style-selector control to the map.
	var styleControl = document.getElementById('style-selector-control');
	speedTest.map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);
 
	// Set the map's style to the initial value of the selector.
	var styleSelector = document.getElementById('style-selector');
	speedTest.map.setOptions({styles: styles[styleSelector.value]});

	// Apply new JSON when the user selects a different style.
	styleSelector.addEventListener('change', function() {
	  speedTest.map.setOptions({styles: styles[styleSelector.value]});
	});

  
  
  
 

  
  
  
  
  speedTest.showMarkers();
};

speedTest.showMarkers = function() {
  speedTest.markers = [];

  var type = 0;
  /*if ($('usegmm').checked) {
    type = 0;
  }*/

  if (speedTest.markerClusterer) {
    speedTest.markerClusterer.clearMarkers();
  }

  var panel = $('markerlist');
  panel.innerHTML = '';
  var numMarkers = $('nummarkers').value;

  for (var i = 0; i < numMarkers; i++) {
	if (typeof speedTest.pics[i] === 'undefined') {
		break;
	}
    var titleText = speedTest.pics[i].acco_name;
    if (titleText === '') {
      titleText = 'No title';
    }

    var item = document.createElement('DIV');
	item.id=speedTest.pics[i].accmo_id;
	item.className="innerMainDv";
	 
	var infoHtmlSideBar = '<div onclick="return makeactive('+speedTest.pics[i].accmo_id+')" style="float:left;" ><div class="imageBox" onmouseover="speedTest.markers['+i+'].setIcon(imageUrlHover)"; onmouseout="speedTest.markers['+i+'].setIcon(imageUrl)"><img src="'+speedTest.pics[i].photo_file_url+'" class="info-img"/></div><div class="information"><h3><label>REF </label>'+speedTest.pics[i].referencecode+' <label></h3><div class="priceDv">'+speedTest.pics[i].symbol+' '+speedTest.pics[i].minprice+' TO '+speedTest.pics[i].symbol+' '+speedTest.pics[i].maxprice+'</div><div class="refBed"><label>REF </label>'+speedTest.pics[i].referencecode+', <label>SLEEPS </label>'+speedTest.pics[i].total_people+'</div><div class="sortDesc">'+speedTest.pics[i].short_desc+'</div></div></div>';
	
	/*var infoHtmlSideBar = '<div class="imageBox" onmouseover="speedTest.markers['+i+'].setIcon(imageUrlHover)"; onmouseout="speedTest.markers['+i+'].setIcon(imageUrl)"><img src="'+speedTest.pics[i].photo_file_url+'" class="info-img"/></div><div class="information"><h3>'+ titleText +'</h3><div class="priceDv">'+speedTest.pics[i].symbol+' '+speedTest.pics[i].minprice+' TO '+speedTest.pics[i].symbol+' '+speedTest.pics[i].maxprice+'</div><div class="refBed"><label>REF </label>'+speedTest.pics[i].referencecode+', <label>SLEEPS </label>'+speedTest.pics[i].total_people+'</div><div class="sortDesc">'+speedTest.pics[i].short_desc+'</div></div>';*/
	

   // item.appendChild(title);
    panel.appendChild(item);
	$(speedTest.pics[i].accmo_id).innerHTML = infoHtmlSideBar;
	
    var latLng = new google.maps.LatLng(speedTest.pics[i].latitude,
        speedTest.pics[i].longitude);

   // var imageUrl = 'http://chart.apis.google.com/chart?cht=mm&chs=24x32&chco=' +'FFFFFF,008CFF,000000&ext=.png';
	var imageUrl = liveUrl+'images/markerOrange.png';
	var imageUrlHover = liveUrl+'images/markerBlack.png';
    var markerImage = new google.maps.MarkerImage(imageUrl,new google.maps.Size(24, 32));
	var sort_des_b_s = speedTest.pics[i].short_desc;
    var marker = new google.maps.Marker({
      'position': latLng,
      'icon': markerImage,
	  'acco' : speedTest.pics[i].accmo_id,
	  'img_src' : speedTest.pics[i].photo_file_url,
	  'labelContentName': speedTest.pics[i].acco_name,
      'link': decodeURIComponent(speedTest.pics[i].owner_url),
	  'acco_min_price': speedTest.pics[i].minprice,
	  'acco_max_price': speedTest.pics[i].maxprice,
	  'symbol': speedTest.pics[i].symbol,
	  'referencecode': speedTest.pics[i].referencecode,
	  'total_people': speedTest.pics[i].total_people,
	  'short_desc': sort_des_b_s.replace(/'/g, "\\'")
    });
		
		
    var fn = speedTest.markerClickFunction(speedTest.pics[i], latLng, speedTest.pics[i].accmo_id);
    google.maps.event.addListener(marker, 'click', fn);
    google.maps.event.addDomListener(item, 'click', fn);
	
	google.maps.event.addListener(speedTest.infoWindow,'domready',function(){ 
	  jQuery('.info-popup')//the root of the content
	   .closest('.gm-style-iw')
		.parent().addClass('custom-iw');
	});
    speedTest.markers.push(marker);
	
	 google.maps.event.addListener(marker, "mouseover", function() {
           this.setIcon(imageUrlHover);
		   
		    var divs = getElementsByClassName("innerMainDv") ;
			for(var ic=0; ic<divs.length; ic++) { 
				
				 divs[ic].className='innerMainDv';
			}	
			
			var divs3 = getElementsByClassName("innerMainDv") ;
			for(var ij=0; ij<divs3.length; ij++) { 
				if( divs[ij].id==this.acco)
				 divs3[ij].className='innerMainDv active';
			}
      });
      google.maps.event.addListener(marker, "mouseout", function() {
           //you have to retreive the original icon cause with the mouse hover you change the marker icon attribute
           this.setIcon(imageUrl);
		   var divs = getElementsByClassName("innerMainDv") ;
			for(var ik=0; ik<divs.length; ik++) { 
				
				 divs[ik].className='innerMainDv';
			}	
      });
	
	
	
	
	
  }
  window.setTimeout(speedTest.time, 0);
  //return false;
 			var clusterOptions = { zoomOnClick: false }
            var markerCluster = new MarkerClusterer(speedTest.map, speedTest.markers , clusterOptions);
           
            google.maps.event.addListener(markerCluster, 'clusterclick', function (cluster) {
																				   
                 //Get markers
                 var markers = cluster.getMarkers();
                 if (markers.length < 10) {
                     var content = '';
                     // Convert lat/long from cluster object to a usable MVCObject
                     var info = new google.maps.MVCObject;
                     info.set('position', cluster.center_);
						
                     //----
                     var titles = '<div id="infowindowsdiv1" class="infowindowsdiv1"><div class="infowindowsdivtitle">Holiday accommodations:</div><div class="infowindowsdivul"><ul>';
                     //Get all the titles
                     for (var i = 0; i < markers.length; i++) {   
					 //alert(markers[i].acco_max_price);                     
                         titles += '<li><a class="infowindowsmaplink" href="' + markers[i].link + '" onmouseover="javascript:ShowMiniDetail(' + cluster.center_ + ', &#39;' + markers[i].labelContentName.replace("'", "&apostrofe;") + '&#39; , ' + markers[i].acco + ', &#39;' + markers[i].img_src + '&#39; , &#39;' + markers[i].referencecode + '&#39; , &#39;' + markers[i].acco_min_price + '&#39;, &#39;' + markers[i].acco_max_price + '&#39; , &#39;' + markers[i].link.replace("'", "&apostrofe;") + '&#39; , &#39;' + markers[i].symbol + '&#39;, &#39;' + markers[i].total_people + '&#39;, &#39;' + markers[i].short_desc + '&#39;, 1);">' + markers[i].referencecode + '</a></li>';
                     }
                     titles += '</ul></div></div>';
                     //----
                     speedTest.infoWindow.close();
                     speedTest.infoWindow2.close();
                     speedTest.infoWindow.setContent(titles); //set infowindow content to titles
                     speedTest.infoWindow.open(speedTest.map, info);
                     /*google.maps.event.addListener(speedTest.infoWindow, 'domready', function () {
                         setInfoWindowStyle();
                     }); */                    
                 }
                 else {
                     speedTest.map.setZoom(speedTest.map.getZoom() + 3);
                     speedTest.map.setCenter(cluster.center_);
                 }
                 
             });    
	
  
};

function ShowMiniDetail(Argcoord,ArgName, ArgId, ArgImageSrc, ArgAccoType, ArgMinPrice,ArgMaxPrice, ArgLink,symbol,total_people,short_desc, ArgIsCluster) {                          
             var info2 = new google.maps.MVCObject;
             speedTest.infoWindow2.close();
             if (ArgIsCluster == 0) {
                 speedTest.infoWindow.close();                 
                 info2.set('position', Argcoord);
                 info2.set('margin-left', '30px');
             }
             else {
                 var zoomAdjust = 0.0004;
                 for (var i = 20; i > 0; i--) {
                     
                     if (speedTest.map.zoom == i) {
                         
                         
                         info2.set('position', new google.maps.LatLng(speedTest.infoWindow.getPosition().lat(), speedTest.infoWindow.getPosition().lng() + zoomAdjust));
                     }
                     zoomAdjust = 2 * zoomAdjust;
                 }                 
                 info2.set('margin-left', '30px');
             }  
			 
            /* var titles = "<div id='infowindowsdiv2' class='infowindowsdiv'><a href='" + ArgLink.replace("&apostrofe;","&#39;") + "'><img class='infowindow_detail_img' src='" + ArgImageSrc + "'/></a>";
             titles += "<div class='infowindow_detail_name'>" + ArgAccoType + " " + ArgName.replace("&apostrofe;", "&#39;") + "</div>";
             titles += "<div class='infowindow_detail_price'>"+symbol+" "+ArgMinPrice+" TO "+symbol+" "+ArgMaxPrice+"</div>";
             titles += "<div class='infowindow_detail_button_container'>";
             titles += "<div class='button_autosize_container'>";
             titles += "<div class='button_autosize'>";
             titles += "<a href='" + ArgLink.replace("&apostrofe;","&#39;") + "'>Details</a></div>";
             titles += "</div>";
             titles += "</div>";
             titles += "</div>";*/
			 
			 
			 var infoHtml = '<div class="info-popup" id="'+ArgId+'_popup"><h3><label>REF </label>'+ArgAccoType+' <label></h3>'+
	  '<div class="info-body-popup"><a href="'+ArgLink+'" target="_blank"><img src="'+ArgImageSrc+'" class="info-img"/></a></div><div class="priceDv">'+symbol+' '+ArgMinPrice+' TO '+symbol+' '+ArgMaxPrice+'</div><div class="refBedLabel"><label>REF </label>'+ArgAccoType+', <label>SLEEPS </label>'+total_people+'</div><div class="sortDesc">'+short_desc+'</div><span><a href="'+ArgLink+'" target="_blank">More<strong>+</strong></a></span></div>';
			 
             speedTest.infoWindow2.setContent(infoHtml); //set infowindow content to titles
			 
             speedTest.infoWindow2.open(speedTest.map, info2);
			 jQuery('.info-popup')//the root of the content
	   .closest('.gm-style-iw')
		.parent().addClass('custom-iw');
		jQuery('html,body').animate({
        scrollTop: jQuery("#"+ArgId+'_popup').offset().top-50});
             //setInfoWindowStyle();
         }
function setInfoWindowStyle() {
	
	
             if (document.getElementById('infowindowsdiv2')) {
                 var infowindowcontainer = document.getElementById('infowindowsdiv2').parentNode.parentNode.parentNode.parentNode;
                 infowindowcontainer.firstChild.setAttribute('id', 'closeInfoWindow2');
                 var nodes = document.getElementById('closeInfoWindow2').childNodes;
                 for (var i = 0; i < nodes.length; i++) {
                     if (nodes[i].nodeName.toLowerCase() == 'div' && i == 2) {
                         nodes[i].style.display = "none";
                     }
                     if (nodes[i].nodeName.toLowerCase() == 'div' && i == 3) {
                         nodes[i].setAttribute('class', 'info_window_container');
                     }
                 }                 
             }
			 alert("in");
             if (document.getElementById('infowindowsdiv1')) {                 
                 var infowindowcontainer = document.getElementById('infowindowsdiv1').parentNode.parentNode.parentNode.parentNode;
                 infowindowcontainer.firstChild.setAttribute('id', 'closeInfoWindow1');
                 var nodes = document.getElementById('closeInfoWindow1').childNodes;
                 for (var i = 0; i < nodes.length; i++) {                     
                     if (nodes[i].nodeName.toLowerCase() == 'div' && i == 3) {
                         nodes[i].setAttribute('class', 'info_window_container');
                     }
                 }
             }
			 alert("end");
         }

speedTest.markerClickFunction = function(pic, latlng, clickedId) {
 
  return function(e) {
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }
	speedTest.infoWindow2.close();
	var divs = getElementsByClassName("innerMainDv") ;
	for(var i=0; i<divs.length; i++) { 
		
		 divs[i].className='innerMainDv';
	}	
	
	var divs3 = getElementsByClassName("innerMainDv") ;
	for(var i=0; i<divs3.length; i++) { 
		if( divs[i].id==clickedId)
		 divs3[i].className='innerMainDv active';
	}
	
	
    var title = pic.acco_name;
   // var url = pic.photo_url;
    var url = pic.owner_url
    var fileurl = pic.photo_file_url;
	var ownerurl = pic.owner_url;
	var ownername = pic.acco_name;

    var infoHtml = '<div class="info-popup" id="'+clickedId+'_popup"><h3><label>REF </label>'+pic.referencecode+' <label></h3>'+
	  '<div class="info-body-popup"><a href="'+url+'" target="_blank"><img src="'+fileurl+'" class="info-img"/></a></div><div class="priceDv">'+pic.symbol+' '+pic.minprice+' TO '+pic.symbol+' '+pic.maxprice+'</div><div class="refBedLabel"><label>REF </label>'+pic.referencecode+', <label>SLEEPS </label>'+pic.total_people+'</div><div class="sortDesc">'+pic.short_desc+'</div><span><a href="'+url+'" target="_blank">More<strong>+</strong></a></span></div>';
	 
    speedTest.infoWindow.setContent(infoHtml);
    speedTest.infoWindow.setPosition(latlng);
    speedTest.infoWindow.open(speedTest.map);
	
	google.maps.event.addListener(speedTest.infoWindow,'closeclick',function(){
	    	var divsClose = getElementsByClassName("innerMainDv") ;
			for(var ic=0; ic<divsClose.length; ic++) { 
				
				 divsClose[ic].className='innerMainDv';
			}	
	});
	
	 
	
	jQuery('html,body').animate({
        scrollTop: jQuery("#"+clickedId+'_popup').offset().top-50});
	
  };
};

speedTest.clear = function() {
 // $('timetaken').innerHTML = 'cleaning...';
  for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
    marker.setMap(null);
  }
};

speedTest.change = function() {
  speedTest.clear();
  speedTest.showMarkers();
};

speedTest.time = function() {
  //$('timetaken').innerHTML = 'timing...';
  var start = new Date();
  //if ($('usegmm').checked) {
    speedTest.markerClusterer = new MarkerClusterer(speedTest.map, speedTest.markers, {imagePath: '../images/m'});
  /*} else {
    for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
      marker.setMap(speedTest.map);
    }
  }*/

  var end = new Date();
  //$('timetaken').innerHTML = end - start;
};
function getElementsByClassName(className) {
if (document.getElementsByClassName) { 
  return document.getElementsByClassName(className); }
else { return document.querySelectorAll('.' + className); } 
 }
function makeactive(clickedId){
	 
	var divs = getElementsByClassName("innerMainDv") ;
	for(var i=0; i<divs.length; i++) { 
		
		 divs[i].className='innerMainDv';
	}
	
	
	var divs3 = getElementsByClassName("innerMainDv") ;
	for(var i=0; i<divs3.length; i++) { 
		if( divs[i].id==clickedId)
		 divs3[i].className='innerMainDv active';
	}	 
}	
