const { Schema,model} = require('mongoose');
const bcrypt = require("bcryptjs");

const user = new Schema({
  userName: '',
  password: '',
  email:''
});


user.methods.encryptPassword = async (password) => {
       const salt = await bcrypt.genSalt(10);
       return bcrypt.hash(password, salt);
};

user.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password)
};

module.exports = model('user',user);