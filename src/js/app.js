$(() => {

  console.log('Twinkle Twinkle Little Star');
  /* global google:ignore*/

  let map, infoWindow;

  function geoMap() {
    map = new google.maps.Map(document.getElementById('userProfileMap'), {
      center: {lat: 47.778842, lng: 8.886226},
      zoom: 5
    });
    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location Found');
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




  function indexMap() {
    let map = new google.maps.Map(document.getElementById('indexMap'), {
      center: {lat: 0.0, lng: 0.0},
      zoom: 1
    });

    <% stars.forEach((star) => { %>
      let uluru = {lat: <%= star.lat %>, lng: <%= star.lng %>};
      let marker = new google.maps.Marker({
      map: map
      position: uluru,
    });
  }



  geoMap();

});
