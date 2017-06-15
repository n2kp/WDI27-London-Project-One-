const router = require('express').Router();
const registrations = require('../controllers/registrations');
const users = require('../controllers/users');
const stars = require('../controllers/stars');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');
const upload = require('../lib/upload');
const oauth = require('../controllers/oauth');


router.get('/', (req, res) =>
res.render('statics/index'));

router.route('/oauth/instagram')
  .get(oauth.instagram);

router.route('/map')
  .get(secureRoute, stars.map)

router.route('/stars')
  .get(secureRoute, stars.index)
  .post(secureRoute, upload.single('image'), stars.create);

router.route('/stars/new')
  .get(secureRoute, stars.new);

router.route('/stars/:id')
  .get(stars.show)
  .post(secureRoute, upload.single('image'), stars.update)
  .delete(secureRoute, stars.delete);

router.route('/stars/:id/edit')
  .get(secureRoute, stars.edit);

router.route('/users/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/edit')
  .get(secureRoute, users.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/stars/:id/comments')
  .post(secureRoute, stars.createComment);

router.route('/stars/:id/comments/:commentId')
  .delete(secureRoute, stars.deleteComment);

router.all('*', (req, res) => res.notFound());

module.exports = router;
