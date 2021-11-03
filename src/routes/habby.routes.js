const express = require('express');

const routes  = express();

///MAIN SERVER ROUTES MANAGER 

    ///users/
routes.use('/user', require('./user.routes/user.routes'));

    //posts/
routes.use('/post', require('./post.routes/post.routes'));

routes.use('/', (req,res) => res.send("The working methods are /user."));


module.exports = routes;