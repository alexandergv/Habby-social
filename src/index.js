const express = require('express');
const mongoose = require('./database');
const morgan = require('morgan');
const path = require('path');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes

app.use('/api/habby', require('./routes/habby.routes'));

//staticfiles
app.use('/',express.static(path.join(__dirname,'public')))

//start server

app.listen(app.get('port'), () =>
{
    console.log("Server running on Port: " + app.get('port'));
});
