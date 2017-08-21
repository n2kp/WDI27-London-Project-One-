const rp = require('request-promise');

function weatherProxy(req, res) {
  rp({
    url: `http://api.openweathermap.org/data/2.5/forecast`,
    method: 'GET',
    qs: {
      lat: req.query.lat,
      lon: req.query.lng,
      APPID: 'cac323ad46f52a4922a362586460218c'
    },
    json: true
  })
  .then((weather) => {
    res.json(weather);
  });
}

module.exports = {
  proxy: weatherProxy
};
