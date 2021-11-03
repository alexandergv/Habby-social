const mongoose = require('mongoose');

const post = new mongoose.Schema(
{
    title : '',
    content : '',
    image :   ''
})

module.exports = mongoose.model('post', post);