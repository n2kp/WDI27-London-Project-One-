const mongoose = require('mongoose');
const s3 = require('../lib/s3');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  createdAt: {type: Date, default: Date.now}
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentbelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const starSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
});

starSchema.pre('remove', function removeImage(next) {
  s3.deleteObject({ Key: this.image }, next);
});

starSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
  });

starSchema.methods.belongsTo = function hotelBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('Star', starSchema);
