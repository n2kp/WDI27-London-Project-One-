const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Star = require('../models/star');
const User = require('../models/user');

Star.collection.drop();
User.collection.drop();

User
  .create([{
    email: 'nimesh@email.com',
    username: 'nimesh',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'batman@email.com',
    username: 'wayne',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'superman@email.com',
    username: 'clark',
    password: 'password',
    passwordConfirmation: 'password'
  }])

  .then((users) => {
    console.log(`${users.length} users created`);

    return Star
      .create([{
        name: 'Messier M73',
        image: 'http://freestarcharts.com/images/Articles/Messier/M73_NOAO_AURA_NSF.jpg',
        type: 'Star',
        date: '2016-08-01',
        description: 'Grouping of M73 and local stars taken over a 10 minute exposure',
        lat: '51.476874',
        lng: '0.000000',
        createdBy: users[1]
      },{
        name: 'Flaming Star Nebule',
        image: 'http://www.seasky.org/constellations/assets/images/flaming-star-nebula-sk31.jpg',
        type: 'Nebula',
        date: '2017-02-03',
        description: 'False colour image of flaming star nebula showing star nursery',
        lat: '-51.838116',
        lng: '-68.814918',
        createdBy: users[0]
      },{
        name: 'Mercury',
        image: 'http://www.theplanetstoday.com/images/mercury.jpg',
        type: 'Planet',
        date: '2016-12-12',
        description: 'Close up of surface of Mercury with setting sun on the western face',
        lat: '28.756955',
        lng: '-17.885043',
        createdBy: users[2]
      },{
        name: 'Andromeda',
        image: 'https://www2.le.ac.uk/departments/physics/research/xroa/images/ngc4565.gif/image_preview',
        type: 'Galaxy',
        date: '2017-01-04',
        description: 'Xray image of Andromeda cross section with super massive black hole at the centre',
        lat: '43.291529',
        lng: '145.543061',
        createdBy: users[0]
      },{
        name: 'Comet Catalina',
        image: 'http://freestarcharts.com/images/Articles/Month/Jan2016/Comet_Catalina/C2013_US10_Catalina_Sharp_Siding_Spring_Australia.jpg',
        type: 'Comet/Astroid',
        date: '2015-08-10',
        description: 'Catalina in front of a star filled sky',
        lat: '31.109509',
        lng: '77.176743',
        createdBy: users[1]
      }]);
  })
  .then((stars) => console.log(`${stars.length} stars created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
