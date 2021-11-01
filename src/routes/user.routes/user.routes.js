const express = require('express');

const router  = express.Router();
const users = require('../../models/UserModels/user.model');

/// User management related HTTP methods

router.get('/', async (req, res) => {
   await users.find().then( data => res.send(data));
});

router.post('/',  async (req, res) => {
    const { userName, password, email} = req.body;
    newUser = new users({userName, password, email});
    await newUser.save().then( () => {
        console.log(newUser);
        res.send({ status: "Nuevo usuario registrado."}); 

    }).catch( err => console.log(err));
})


module.exports = router;