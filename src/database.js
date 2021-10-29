const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/habby-socialDB'

mongoose.connect(URI).then( con => console.log( "connected to database. ")).catch(err => console.log(err));



module.exports =  mongoose;