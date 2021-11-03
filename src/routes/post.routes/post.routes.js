const express = require('express');
const router = express.Router();
const post = require('../../models/PostModels/post.model');

router.get('/', async (req,res) =>
{

    await post.find()
    .then(data => {
        console.log(data);
        res.send(data);
    });

});

router.post('/',  async (req,res) => {
 const {title,content,image} = req.body;
   newPost = new post({title,content,image});
   await newPost.save()
   .then(x => {
    res.send("Post Creado");
    console.log(x);
   });
   
});

module.exports = router;