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
    email: 'nimesh@ga',
    username: 'Nimesh',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'mick@ga',
    username: 'Mick',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'clark@ga',
    username: 'Clark',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'harsha@ga',
    username: 'Harsha',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'trevor@ga',
    username: 'Trevor',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'mark@ga',
    username: 'Mark',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'steve@ga',
    username: 'Steve',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'heena@ga',
    username: 'Heena',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'bruce@ga',
    username: 'Bruce',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'sara@ga',
    username: 'Sara',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'athena@ga',
    username: 'Athena',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'nick@ga',
    username: 'Nick',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'alex@ga',
    username: 'Alex',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'ritesh@ga',
    username: 'Ritesh',
    password: 'password',
    passwordConfirmation: 'password'
  },{
    email: 'emily@ga',
    username: 'Emily',
    password: 'password',
    passwordConfirmation: 'password'
  }])

  .then((users) => {
    console.log(`${users.length} users created`);

    return Star
      .create([{
        name: 'Milky Way Arch',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+PinnaclesGalaxy_Goh_2400.jpg',
        type: 'Night Sky',
        date: '2016-08-01',
        description: 'Desert shot of the Milky Way arch across the horizon',
        lat: '51.476874',
        lng: '0.000000',
        createdBy: users[0]
      },{
        name: 'The Helix Nubula',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/N+helixnebula.jpg',
        type: 'Nebula',
        date: '2015-11-11',
        description: 'Lord of the Rings fan might see something else, but the Helix Nebula has been around longer than the dark lord',
        lat: '51.695804',
        lng: '0.913680',
        createdBy: users[12]
      },{
        name: 'Mighty Jupiter',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/P+15667734041_fd3be21f57_z-400x400.jpg',
        type: 'Planet',
        date: '2016-09-29',
        description: 'Black and white xray image of jupiter and its giant red spot',
        lat: '-38.629505',
        lng: '143.574347',
        createdBy: users[7]
      },{
        name: 'Sirius A',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/S+72f90382038e7ed7c1f887f628480026.jpg',
        type: 'Star',
        date: '2016-05-19',
        description: 'Blindingly bright light from the star we most rely on for navigation in the centuries gone',
        lat: '6.876608',
        lng: '-5.239447',
        createdBy: users[14]
      },{
        name: 'Heavenly Lights',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/A+Aurora_-400x400.jpg',
        type: 'Aurora',
        date: '2016-04-19',
        description: 'Sky full of stars with the glow of the auroras in the distance',
        lat: '66.252159',
        lng: '-15.260989',
        createdBy: users[13]
      },{
        name: 'Andromeda',
        image: 'https://www2.le.ac.uk/departments/physics/research/xroa/images/ngc4565.gif/image_preview',
        type: 'Galaxy',
        date: '2017-01-04',
        description: 'Xray image of Andromeda cross section with super massive black hole at the centre',
        lat: '43.291529',
        lng: '145.543061',
        createdBy: users[2]
      },{
        name: 'Comet LoveJoy',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/CA+lovejoy.jpg',
        type: 'Comet/Astroid',
        date: '2013-09-04',
        description: 'Close up of the elusive Comet LoveJoy with its green/blue tail',
        lat: '27.165102',
        lng: '2.481534',
        createdBy: users[4]
      },{
        name: 'Pillars of Creation',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/N+pillars+of+creations.jpg',
        type: 'Nebula',
        date: '2016-11-30',
        description: 'Stunning towers of dust creating birthplaces for new stars',
        lat: '-15.918962',
        lng: '-5.713741',
        createdBy: users[3]
      },{
        name: 'Making a Wish',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+astronomy-photographer-year-competition.jpg',
        type: 'Night Sky',
        date: '2016-11-17',
        description: 'Sitting by a camp fire under the stars and fortunate to get a glimpse of the this beauty trailing through the sky',
        lat: '36.900460',
        lng: '-110.104304',
        createdBy: users[12]
      },{
        name: 'Half Moon',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/P+moon.jpg',
        type: 'Planet',
        date: '2013-12-01',
        description: 'Amazing detail of the surface of the moon, thus far our only achievement in space as a race.',
        lat: '6.848961',
        lng: '80.834725',
        createdBy: users[4]
      },{
        name: 'M72 Aquariaus',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/S+M72-aquariaus.jpg',
        type: 'Star',
        date: '2017-03-25',
        description: 'When you look up to Aquariaus in the sky, you just never know the amount of stars and that tiny patch of syk',
        lat: '57.365136',
        lng: '23.121305',
        createdBy: users[8]
      },{
        name: 'Colours Through Trees',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/A+961181_0_experience-the-aurora_400.jpg',
        type: 'Aurora',
        date: '2014-03-14',
        description: 'Rainbow of colours flowing down from the sky through the trees',
        lat: '69.634136',
        lng: '19.039609',
        createdBy: users[3]
      },{
        name: 'Flaming Star Nebula',
        image: 'http://www.seasky.org/constellations/assets/images/flaming-star-nebula-sk31.jpg',
        type: 'Nebula',
        date: '2017-02-03',
        description: 'False colour image of flaming star nebula showing star nursery',
        lat: '-51.838116',
        lng: '-68.814918',
        createdBy: users[7]
      },{
        name: 'Impact in 3, 2, 1 !',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/CA+e5bf68da8d0162bc53b892b85f8058dc.jpg',
        type: 'Comet/Astroid',
        date: '2015-08-23',
        description: 'Crashing down to earth, a rouge astroid burns up moments before impacting the ground',
        lat: '42.836878',
        lng: '-106.326439',
        createdBy: users[10]
      },{
        name: 'A Billion Star',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/G+andromeda.jpg',
        type: 'Galaxy',
        date: '2016-11-29',
        description: 'Billions of stars shining brightly. Taken over a 3 night period with long exposure',
        lat: '24.848436',
        lng: '-77914400',
        createdBy: users[13]
      },{
        name: 'Star Behind Orion',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/N+orion+nebula.jpg',
        type: 'Nebula',
        date: '2014-05-31',
        description: 'Star burning brightly behind the mist of the Orion Nebula',
        lat: '62.564326',
        lng: '-114.354789',
        createdBy: users[2]
      },{
        name: 'Horse Head Nebula',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/N+horsehead+nebula.jpg',
        type: 'Nebula',
        date: '2016-02-16',
        description: 'Quite simply one of the most iconic images in astronomy, the horse head nebula is beautiful and mysterious',
        lat: '24.299546',
        lng: '55.495246',
        createdBy: users[13]
      },{
        name: 'Nothing But Stars',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+amXrJTQ.jpg',
        type: 'Night Sky',
        date: '2015-10-13',
        description: 'Its hard to even begin to fathom how many stars there are in the sky in this picture, but its tens of thousends',
        lat: '52.172141',
        lng: '-117.063580',
        createdBy: users[11]
      },{
        name: 'Moon Rise',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+PS15274_Man_on_the_Moon.jpg',
        type: 'Night Sky',
        date: '2015-04-24',
        description: 'Super moon rising from behind the mountain while another astrophotographer stands looking through his telescope',
        lat: '38.548008',
        lng: '42.015861',
        createdBy: users[14]
      },{
        name: 'The Pleiades',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/S+The+Pleiades+-+Messier+45.jpg',
        type: 'Star',
        date: '2017-05-12',
        description: 'Sometimes know as the Seven Sisters, this grouping actually has many, many more stars then we can ever see witht he naked eye.',
        lat: '5.545578',
        lng: '73.465799',
        createdBy: users[12]
      },{
        name: 'Like a Rainbow of Stars',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+milky-way-galaxy-astronomy-photography-dave-lane-fb.jpg',
        type: 'Night Sky',
        date: '2013-06-23',
        description: 'Its almost like theres a rainbow of stars arching arcoss the distance with shades of colour splashed in',
        lat: '-14.844270',
        lng: '-64.962287',
        createdBy: users[8]
      },{
        name: 'Desert Galaxy View',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+1ddc7f5e1cc30fd627a2102aa0b7333b.jpg',
        type: 'Night Sky',
        date: '2016-01-29',
        description: 'View into the center of the galaxy and the blackhole in the middle',
        lat: '40.282092',
        lng: '-1.636853',
        createdBy: users[9]
      },{
        name: 'The Butterfly Nebula',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/N+article-1211764-0651646E000005DC-221_964x959.jpg',
        type: 'Nebula',
        date: '2014-06-25',
        description: 'Aptly named, the butterfly nebula was born from the remanants of a supernova millions of years ago',
        lat: '5.989775',
        lng: '116.575139',
        createdBy: users[14]
      },{
        name: 'Comet/Star Proximity',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/CA+C2013_X1_PanSTARRS_Brian_Ottum.jpg',
        type: 'Comet/Astroid',
        date: '2017-04-01',
        description: 'Comet passing a star, which in turn is shining brightly',
        lat: '-1.214544',
        lng: '36.543623',
        createdBy: users[8]
      },{
        name: 'A Hut with a Hue',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/A+chan-ec-cbt-2598-11d-new-zealand-scenic-drive-with-so-p1.jpg',
        type: 'Aurora',
        date: '2013-10-23',
        description: 'Lake side hut with possibly the best view of the Southern lights glowing over the lake',
        lat: '-45.566763',
        lng: '167.605293',
        createdBy: users[0]
      },{
        name: 'Comet Catalina',
        image: 'http://freestarcharts.com/images/Articles/Month/Jan2016/Comet_Catalina/C2013_US10_Catalina_Sharp_Siding_Spring_Australia.jpg',
        type: 'Comet/Astroid',
        date: '2015-08-10',
        description: 'Catalina in front of a star filled sky',
        lat: '31.109509',
        lng: '77.176743',
        createdBy: users[12]
      },{
        name: 'Eagle Nebula',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/N+eagle%2Bnebula_db9225_5421798.jpg',
        type: 'Nebula',
        date: '2016-03-22',
        description: 'One of the most famous astrological structures, the eagle nebula is as stunning as recognisable',
        lat: '58.250030',
        lng: '-6.184880',
        createdBy: users[5]
      },{
        name: 'Milky Way Mountains',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+milky-way.jpg',
        type: 'Night Sky',
        date: '2016-08-16',
        description: 'Cross section of our brilliant Milky way, showing the plane on which the earth tilts in comparison to the galaxy',
        lat: '46.280617',
        lng: '7.846346',
        createdBy: users[4]
      },{
        name: 'Ring Ring!',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/P+saturn12.jpg',
        type: 'Planet',
        date: '2015-09-05',
        description: 'The most beautiful sight in our solar system, Saturns unmistakable rings are made up of billions of little grains of dust and ice',
        lat: '-26.133811',
        lng: '126.567078',
        createdBy: users[13]
      },{
        name: 'Ancient Wonders',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+p01pky0g.jpg',
        type: 'Night Sky',
        date: '2017-05-01',
        description: 'Capturing a star trail in front of a monument designed to interact with the heavens',
        lat: '51.178795',
        lng: '-1.826462',
        createdBy: users[8]
      },{
        name: 'Star Trail',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+p013l7d3.jpg',
        type: 'Night Sky',
        date: '2017-01-03',
        description: 'Gorgeous star trail behind a monument creating circles in the sky',
        lat: '-2.585504',
        lng: '140.691973',
        createdBy: users[13]
      },{
        name: 'Galactic Collision',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/G+M51+The+Whirlpool+Galaxy+by+Martin+Pugh_2012_Deep+Space_Winner_+Overall+Winner_tile.jpg',
        type: 'Galaxy',
        date: '2015-06-21',
        description: 'Millions of years in the making, two galaxies getting closer and closer',
        lat: '-33.689947',
        lng: '25.268223',
        createdBy: users[1]
      },{
        name: 'Shooting Star',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/CA+Eta-Aquarid-Meteor-Shower-over-Mount-Bromo-c-Justin-Ng-Singapore.jpg',
        type: 'Comet/Astroid',
        date: '2014-05-26',
        description: 'Blazing light trail from a astriod entering the atmosphere',
        lat: '1.312753',
        lng: '103.722430',
        createdBy: users[11]
      },{
        name: 'Sky Ribbon',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/A+97B0931-400x400.jpg',
        type: 'Aurora',
        date: '2017-02-16',
        description: 'Northern Lights during winter in Greenland, creating a long ribbon in the sky',
        lat: '70.487689',
        lng: '-21.976874',
        createdBy: users[9]
      },{
        name: 'Sun Rise on the Stars',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+4c0ed7c77ebcaf4e47879e31a3a3e512.jpg',
        type: 'Night Sky',
        date: '2017-05-29',
        description: 'Curtain of stars slowly disappearing as the light from the sun streams into the sky',
        lat: '34.113003',
        lng: '-116.287855',
        createdBy: users[7]
      },{
        name: 'Cold Solar Eclipse',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/NS+APY+2015_Overall+and+Skyscapes+winner_Eclipse+Totality+over+Sassendalen+by+Luc+Jamet_France_tile_0.jpg',
        type: 'Night Sky',
        date: '2016-02-01',
        description: 'Watching a solar eclispe is special at the best of times, but to see it in the extreme wilderness of the high arctic is unreal',
        lat: '69.407778',
        lng: '76.187222',
        createdBy: users[3]
      },{
        name: 'Jellyfish Nebula',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/N+Jellyfish-Nebula.jpg',
        type: 'Nebula',
        date: '2017-06-15',
        description: 'Could have been the brain nebula, but this great shot of the jelly fish nebula shows a stunning stellar nursary',
        lat: '-51.649960',
        lng: '-57.915691',
        createdBy: users[8]
      },{
        name: 'Nigth Beach',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/A+green-light-collection-northern-lights-over-the-waves-breakiing-on-the-beach-in-seltjarnarnes-reykjavik-iceland.jpg',
        type: 'Aurora',
        date: '2016-12-31',
        description: 'Bright green patterns in the sky to bring in the new year',
        lat: '62.041387',
        lng: '-6.955347',
        createdBy: users[5]
      },{
        name: 'Our Neighbour',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/P+mars.jpg',
        type: 'Planet',
        date: '2015-07-31',
        description: 'Low resolution surface scan of Mars showing deserts, mountains and poles',
        lat: '-33.689947',
        lng: '25.268223',
        createdBy: users[10]
      },{
        name: 'Lagoon Nebula',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/N+Herschel36theHeartofthe-LagooncopyrightLa%CC%81szlo%CC%81-Francsics.jpg',
        type: 'Nebula',
        date: '2015-07-12',
        description: 'Stunning shot of the heart of the Lagoon Nebula which is in the constellation Herschel 36',
        lat: '-4.773238',
        lng: '-79.144024',
        createdBy: users[7]
      },{
        name: 'The Veil Nebula',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/N+veil+nebula.jpg',
        type: 'Nebula',
        date: '2012-06-04',
        description: 'Sometimes call the spider nebula, this enormous structure is believed to have created 10 stars since the age of the dinosaurs',
        lat: '54.417547',
        lng: '-2.9404435',
        createdBy: users[6]
      },{
        name: 'Orion Constellation',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/S+61c3e1e445a8f4520f2a0602a80961fe.jpg',
        type: 'Star',
        date: '2105-07-12',
        description: 'One of the easiest constellations to recognise, Orion the warrior is standing with his famour three starred belt',
        lat: '43.291529',
        lng: '145.543061',
        createdBy: users[11]
      },{
        name: 'Lord of the Oceans',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/P+neptune.jpg',
        type: 'Planet',
        date: '2016-10-09',
        description: 'Named after the god of the ocean becasue of is blue colour, it is now the furthest most planet in our solar system',
        lat: '-21.225873',
        lng: '14.876700',
        createdBy: users[1]
      },{
        name: 'Orions Belt',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/S+Messier-103_2.jpg',
        type: 'Star',
        date: '2013-02-19',
        description: '',
        lat: '-18.946139',
        lng: '47.545114',
        createdBy: users[5]
      },{
        name: 'Mercury',
        image: 'http://www.theplanetstoday.com/images/mercury.jpg',
        type: 'Planet',
        date: '2016-12-12',
        description: 'Close up of surface of Mercury with setting sun on the western face',
        lat: '28.756955',
        lng: '-17.885043',
        createdBy: users[6]
      },{
        name: 'Til Death do us Part',
        image: 'https://s3-eu-west-1.amazonaws.com/london-wdi27/S+epsilon_lyr.jpg',
        type: 'Star',
        date: '2017-04-12',
        description: 'Two extremely close stars shining very brightly, until one day in the future the destroy one another',
        lat: '18.623385',
        lng: '102.320316',
        createdBy: users[4]
      }]);
  })
  .then((stars) => console.log(`${stars.length} stars created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
