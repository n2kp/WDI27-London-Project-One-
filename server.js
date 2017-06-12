const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const session = require('express-session');
const flash = require('express-flash');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const { port, env, dbURI, secret } = require('./config/environment');
const errorHandler = require('./lib/errorHandler');
const routes = require('./config/routes');
const customResponses = require('./lib/customResponses');
const authentication = require('./lib/authentication');

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);

mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/public`));

if('test' !== env) app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;

    return method;
  }
}));

app.use(session({
  secret,
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(customResponses);
app.use(authentication);
app.use(routes);
app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
