$(() => {

  console.log('Twinkle Twinkle Little Star');

  /* global google:ignore*/

  let map, infoWindow;

  function geoMap() {
    map = new google.maps.Map(document.getElementById('userProfileMap'), {
      center: {lat: 22.314853, lng: 73.176021},
      zoom: 12
    });
    infoWindow = new google.maps.InfoWindow;
    console.log(infoWindow);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Current Location');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  function newMap(map) {
    google.maps.event.addListener(map, 'click', (event) => {
      placeMarker(event.latLng);
      const myLatLng = event.latLng;
      const lat = myLatLng.lat();
      const lng = myLatLng.lng();
      console.log('lat', lat);
      console.log('lng', lng);
    });
    function placeMarker(location) {
      const marker = new google.maps.Marker({
        position: location,
        map: map
      });
    }
  }



  const stars = $('#indexMap').data('stars');

  function populateIndex() {
    // const latLng = new google.maps.LatLng()
    stars.forEach((star) => {
      console.log(star);
      const latLng = new google.maps.LatLng(star.lat, star.lng);
      console.log(latLng, map);
      const marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    });
  }



  function initMap() {
    const $maps = $('.map');
    $maps.each((i, mapDiv) => {
      // const hasData = !$.isEmptyObject($(mapDiv).data());
      // const data = hasData ? $(mapDiv).data() : { lat: 34.517763, lng: 18.234277 };

      let latLng = {};
      const lat = $(mapDiv).data('lat');
      const lng = $(mapDiv).data('lng');
      console.log(lat, lng);

      if (lat !== undefined && lng !== undefined) {
        latLng = { lat, lng };
      } else {
        latLng = { lat: 34.517763, lng: 18.234277 };
      }

      map = new google.maps.Map(mapDiv, {
        center: latLng,
        zoom: $(mapDiv).hasClass('small') ? 10 : 2
      });

      if(latLng) {
        console.log('adding marker');
        new google.maps.Marker({
          map: map,
          position: latLng
        });
      }

      if($(mapDiv).hasClass('geoMap')) geoMap();
      if($(mapDiv).hasClass('indexMap')) populateIndex();
      if($(mapDiv).hasClass('newMap')) newMap(map);
      // if($(mapDiv).hasClass('newMap')) placeMarker();

    });
  }

  initMap();




  const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=uAoelvMrH4EMXF47NZDFrM7jEMpOfqkOihpZIKT6';

  $.ajax({
    url: nasaUrl,
    success: function(result){
      if('copyright' in result) {
        $('#copyright').text('Image Credits: ' + result.copyright);
      } else {
        $('#copyright').text('Image Credits: ' + 'Public Domain');
      }

      if(result.media_type === 'video') {
        $('#apod_img_id').css('display', 'none');
        $('#apod_vid_id').attr('src', result.url);
      } else {
        $('#apod_vid_id').css('display', 'none');
        $('#apod_img_id').attr('src', result.url);
      }
      $('#apod_explaination').text(result.explanation);
      $('#apod_title').text(result.title);
    }
  });


  // const weatherUrl =
  //
  // $.ajax({
  //   url:
  // })




});
