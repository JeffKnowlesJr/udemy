const jwt = require('jsonwebtoken');

// Middleware is just a function which gets executed on the incoming requests
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY); //SECRET PASSWORD
    req.userData = {email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    res.status(401).json({message: 'You are not authenticated.'});
  }
}
