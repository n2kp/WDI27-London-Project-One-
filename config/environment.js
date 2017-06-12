const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/astronomy';
const secret = process.env.SESSION_SECRET || 'I Plead the Fifth';
const env = process.env.NODE_ENV || 'development';

module.exports = { port, dbURI, secret, env };
