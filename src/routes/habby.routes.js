const express = require('express');

const routes  = express();

///MAIN SERVER ROUTES MANAGER 

routes.use('/user', require('./user.routes/user.routes'));

routes.use('/', (req,res) => res.send("The working methods are /user."));


module.exports = routes;