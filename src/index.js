const express = require('express');
const mongoose = require('./database');
const morgan = require('morgan');
const path = require('path');

const app = express();

//staticfiles
app.use(express.static(path.join(__dirname,'public')));
//settings
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes

app.use('/api/habby', require('./routes/habby.routes'));


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'public/index.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })




//start server

app.listen(app.get('port'), () =>
{
    console.log("Server running on Port: " + app.get('port'));
});

