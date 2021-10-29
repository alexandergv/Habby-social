const express = require('express');
const users = require('../models/UserModels/user.model')

const router  = express.Router();

router.get('/', async (req, res) =>
{
   await users.find().then(data => {console.log(data);
  res.send(data); 
})
})


module.exports = router;