const mongoose = require('mongoose');

const user = new mongoose.Schema({
  userName: '',
  password: '',
  email:''
});

module.exports = mongoose.model('user',user);