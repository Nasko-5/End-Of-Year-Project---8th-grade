const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/', require('./routes/index.route'));

app.use('/', require('./routes/radical.route'));

app.use('/', require('./routes/clock.route'));

app.use('/', require('./routes/aboutme.route'));

app.use('/', require('./routes/aroundtheworld.route'));

app.use('/', require('./routes/files.route'));

app.use('/', require('./routes/school.route'));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
