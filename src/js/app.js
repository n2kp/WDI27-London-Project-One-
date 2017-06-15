/* global moment:true google:ignore */

$(() => {

  console.log('Twinkle Twinkle Little Star');

  let map, infoWindow;
  const stars = $('#indexMap').data('stars');
  const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=uAoelvMrH4EMXF47NZDFrM7jEMpOfqkOihpZIKT6';
  const times = ['00:00:00', '21:00:00', '03:00:00'];


  function geoMap() {
    map = new google.maps.Map(document.getElementById('userProfileMap'), {
      center: {lat: 22.314853, lng: 73.176021},
      zoom: 12
    });
    infoWindow = new google.maps.InfoWindow;
    // console.log(infoWindow);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        getWeather(pos);
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
      console.log(lat);
      console.log(lng);
      $('#newLat').val(lat);
      $('#newLng').val(lng);

    });
    function placeMarker(location) {
      const marker = new google.maps.Marker({
        position: location,
        map: map
      });
    }
  }


  function populateIndex() {
    stars.forEach((star) => {
      const latLng = new google.maps.LatLng(star.lat, star.lng);
      const marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
      infoWindowDetails(marker, star);
    });
  }


  function infoWindowDetails(marker, star) {

    const infoContent = `<div id="content">
    <div id="siteNotice">
    </div>
    <h1 id="infoHeading" class="title is-5">${star.name}</h1>
    <div id="infoContent">
    <p class="subtitle is-6"><b>Type: ${star.type}</b></p>
    <p class="subtitle is-6">Created by: ${star.createdBy.username}</p>
    <a href="/stars/${star._id}">More Details</a>
    </div>
    </div>`;

    const infowindow = new google.maps.InfoWindow({
      content: infoContent
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

  function initMap() {
    const $maps = $('.map');
    $maps.each((i, mapDiv) => {

      let latLng = {};
      const lat = $(mapDiv).data('lat');
      const lng = $(mapDiv).data('lng');

      if (!!lat && !!lng) {
        latLng = { lat, lng };
      } else {
        latLng = { lat: 34.517763, lng: 18.234277 };
      }

      map = new google.maps.Map(mapDiv, {
        center: latLng,
        zoom: $(mapDiv).hasClass('small') ? 10 : 2
      });

      if (!!lat && !!lng) {
        new google.maps.Marker({
          map: map,
          position: latLng
        });
      }

      if($(mapDiv).hasClass('geoMap')) geoMap();
      if($(mapDiv).hasClass('indexMap')) populateIndex();
      if($(mapDiv).hasClass('newMap')) newMap(map);

    });
  }


  function getWeather(pos) {
    console.log(pos);

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast',
      data: {
        lat: pos.lat,
        lon: pos.lng,
        APPID: 'cac323ad46f52a4922a362586460218c'
      }
    })
    .done((response) => {
      console.log(response.list);

      const filterTimes = response.list.filter((forecast) => {
        return times.indexOf(forecast.dt_txt.split(' ')[1]) > -1;
      });

      let totalHTML = '';

      for(let i = 0; i < filterTimes.length; i++) {
        const isFirst = (i === 0) || (filterTimes[i].dt_txt.split(' ')[0] !== filterTimes[i-1].dt_txt.split(' ')[0]);

        const isLast = (i === filterTimes.length -1) || (filterTimes[i].dt_txt.split(' ')[0] !== filterTimes[i+1].dt_txt.split(' ')[0]);

        const forecastHTML = `<div class="forecastHour">
          <img src="http://openweathermap.org/img/w/${filterTimes[i].weather[0].icon}.png">
          <p>${filterTimes[i].clouds.all}%</p>
        </div> `;

        const startHTML = isFirst ? `<div class="forecastDay">
        <h3>${moment(filterTimes[i].dt_txt.split(' ')[0]).format('MMM Do YYYY')}</h3>` : '';

        const finishHTML = isLast ? `</div>` : '';
        const individualHTML = startHTML + forecastHTML + finishHTML;
        totalHTML += individualHTML;
      }
      $('#userProfileForecast').append(totalHTML);
    });
  }


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


  const $body = $('.modal-background');
  const $modal = $('#modal');
  const $launchModal = $('.toggle-modal');

  $launchModal.on('click', toggleModal);
  $body.on('click', toggleModal);

  function toggleModal() {
    $modal.toggleClass('is-active');
  }

  initMap();

});
