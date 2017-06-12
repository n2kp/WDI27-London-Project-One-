const User = require('../models/user');

function authentication(req, res, next) {
  if(!req.session.isLoggedIn) return next();

  User
    .findById(req.session.userId)
    .then((user) => {
      if(!user) return req.session.regenerate(() => res.unauthorized());

      req.session.userId = user.id;

      req.user = user;

      res.locals.currentUser = user;
      res.locals.isLoggedIn = true;

      next();
    })
    .catch(next);
}

module.exports = authentication;
