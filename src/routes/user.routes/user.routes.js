const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const users = require('../../models/UserModels/user.model');
const config = require("../../config");
const verifyToken = require('../../libs/verifyToken');
/// User management related HTTP methods

router.get('/', async (req, res) => {
    await users.find().then(data => res.send(data));
});

router.post('/signup', async (req, res) => {
    const { userName, password, email } = req.body;
    newUser = new users({ userName, password, email });
    newUser.password = await newUser.encryptPassword(newUser.password);
    await newUser.save().then(() => {
        console.log(newUser);
        const token = jwt.sign({ id: newUser._id }, config.secret, {
            expiresIn: 60 * 60 * 24
        });
        res.send({ status: "Nuevo usuario registrado.", auth: true, token });

    }).catch(err => {
        console.log(err);
        res.send(console.log(err)
        )
    });
})

router.post('/login', async (req, res) => {

    //  console.log(token);
    const { email, password } = req.body;
    const user = await users.findOne({ email: email });
    if (!user) {
        return res.status(404).send("the email doesn exist.");
    }
    const passwordIsValid = await user.validatePassword(password);

    if (!passwordIsValid) {
        return res.status(401).json({ auth: false, token: null });
    }
    const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24
    });
    res.cookie('token', token, { httpOnly: true });
    res.json({ auth: true, token });
})

    router.get('/getUser', verifyToken, async (req,res)=> 
    {   
  console.log('x')

        await users.findById(req.userId).then(data => 
            {
                data.password = 0;
                data.auth = true;
                console.log(data);
                res.send(data);
            });
    });

    router.get('/logout', verifyToken, async (req,res)=> 
    {
      res.clearCookie('token');
      res.json({auth: false});
    });



module.exports = router;