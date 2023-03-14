const jwt = require("jsonwebtoken");

function authenticationMiddleWareToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const tokent = authHeader && authHeader.split(" ")[0];

  if (tokent == null) return res.sendStatus(401);

  jwt.verify(tokent, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

module.exports = { middleWare: authenticationMiddleWareToken };
