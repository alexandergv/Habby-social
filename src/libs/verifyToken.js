const jwt = require("jsonwebtoken");
const config = require("../config");


async function verifyToken(req, res, next) {
  console.log('c');

  // Get the token from the headers
  const token = req.cookies.token;
  // if a token does not exists
  if (!token) {
    return res
      .send({ auth: false, message: "No Token aws Provided" });
  }

  // decode the token
  const decoded = await jwt.verify(token, config.secret);


  // save the token on request object to use on routes
  req.userId = decoded.id;

  
  // continue with the next function
  next();
}

module.exports = verifyToken;