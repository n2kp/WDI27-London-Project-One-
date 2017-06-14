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
  console.log(stars);

  function populateIndex() {
    // const latLng = new google.maps.LatLng()
    stars.forEach((star) => {
      const latLng = new google.maps.LatLng(star.lat, star.lng);
      marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    });
  }

  function initMap() {
    const $maps = $('.map');
    $maps.each((i, mapDiv) => {
      const hasData = !$.isEmptyObject($(mapDiv).data());
      const data = hasData ? $(mapDiv).data() : { lat: 34.517763, lng: 18.234277 };

      const map = new google.maps.Map(mapDiv, {
        center: data,
        zoom: $(mapDiv).hasClass('small') ? 10 : 2
      });

      if(hasData) {
        new google.maps.Marker({
          map: map,
          position: $(mapDiv).data()
        });
      }

      if($(mapDiv).hasClass('geoMap')) geoMap();
      if($(mapDiv).hasClass('geoMap')) handleLocationError();
      if($(mapDiv).hasClass('indexMap')) populateIndex();
      if($(mapDiv).hasClass('newMap')) newMap(map);
      // if($(mapDiv).hasClass('newMap')) placeMarker();

    });
  }

  initMap();


});
