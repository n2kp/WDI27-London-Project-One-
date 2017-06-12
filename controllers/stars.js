const Star = require('../models/star');

function indexStar(req, res, next) {
  Star
   .find()
   .populate('createdBy')
   .exec()
   .then((stars)  => res.render('stars/index', { stars }))
   .catch(next);
}

function newStar(req, res) {
  return res.render('stars/new');
}

function createStar(req, res, next) {

  req.body.createdBy = req.user;
  if(req.file) req.body.image = req.file.key;

  Star
    .create(req.body)
    .then(() => res.redirect('/stars'))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/stars/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function showStar(req, res, next) {
  Star
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((star) => {
      if(!star) return res.notFound();
      return res.render('stars/show', { star });
    })
    .catch(next);
}

function editStar(req, res, next) {
  Star
    .findById(req.params.id)
    .exec()
    .then((star) => {
      if(!star) return res.redirect();
      if(!star.belongsTo(req.user)) return res.unauthorized(`/stars/${star.id}`, 'You do not have permission to edit stars resource');
      return res.render('stars/edit', { star });
    })
    .catch(next);
}

function updateStar(req, res, next) {
  Star
    .findById(req.params.id)
    .exec()
    .then((star) => {
      if(!star) return res.notFound();
      if(!star.belongsTo(req.user)) return res.unauthorized(`/stars/${star.id}`, 'You do not have permission to edit that resource');
      for(const field in req.body) {
        star[field] = req.body[field];
      }
      return star.save();
    })
    .then(() => res.redirect(`/stars/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/stars/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deleteStar(req, res, next) {
  Star
    .findById(req.params.id)
    .exec()
    .then((star) => {
      if(!star) return res.notFound();
      if(!star.belongsTo(req.user)) return res.unauthorized(`/stars/${star.id}`, 'You do not have permission to edit that resource');
      return star.remove();
    })
    .then(() => res.redirect('/stars'))
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Star
    .findById(req.params.id)
    .exec()
    .then((star) => {
      if(!star) return res.notFound();

      star.comments.push(req.body);
      return star.save();
    })
    .then((star) => res.redirect(`/stars/${star.id}`))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Star
    .findById(req.params.id)
    .exec()
    .then((star) => {
      if(!star) return res.notFound();
      // get the embedded record by it's id
      const comment = star.comments.id(req.params.commentId);
      comment.remove();

      return star.save();
    })
    .then((star) => res.redirect(`/stars/${star.id}`))
    .catch(next);
}


module.exports = {
  index: indexStar,
  new: newStar,
  create: createStar,
  show: showStar,
  edit: editStar,
  update: updateStar,
  delete: deleteStar,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
