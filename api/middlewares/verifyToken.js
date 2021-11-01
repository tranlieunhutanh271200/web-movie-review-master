const jwt = require("jsonwebtoken");

function verifyToken(req, res, next){
    const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, userExists) => {
      if (err) 
        {
          res.status(403).json("Token is not valid!");
        }
      req.userExists = userExists;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}
module.exports = verifyToken;