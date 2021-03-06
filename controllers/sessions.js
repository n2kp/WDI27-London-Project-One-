const User = require('../models/user');
const oauth = require('../config/oauth');


function sessionsNew(req, res) {
  res.render('sessions/new', { oauth });
}

function sessionsCreate(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Login credential unknown');
        return res.redirect('/login');
      }

      req.session.userId = user.id;
      req.session.isLoggedIn = true;

      req.user = user;

      req.flash('success', `Welcome back, ${user.username}!`);
      res.redirect('/');
    })
    .catch(next);
}

function sessionsDelete(req, res) {
  req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
