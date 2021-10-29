const express = require('express');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
//middlewares


//routes

app.use('/', require('./routes/habby.routes'));

//staticfiles

//start server

app.listen(app.get('port'), () =>
{
    console.log("Server running on Port: " + app.get('port'));
});
