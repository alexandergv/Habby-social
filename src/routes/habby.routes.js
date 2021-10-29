const express = require('express');

const routes  = express();

routes.use('/user', require('./user.routes/user.routes'));

routes.use('/', (req,res) => res.send("The working methods are /user."));
// const router  = express.Router();

// // router.get('/user', async (req, res) =>
// // {
// //    await users.find().then(data => {console.log(data);
// //   res.send(data); 
// // })
// // })

// router.get('/user', async (req, res) =>
// {
//    await users.find().then(data => {console.log(data);
//   res.send(data); 
// })
// })


module.exports = routes;