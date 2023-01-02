const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Auhtorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    //  verify() returns the payload
    const { _id } = jwt.verify(token, process.env.SECRET);

    // attach user property to the req object so that other middleware (mainly controllers) can use it
    // select() method prevents from saving hashed password & other unnecessary props inside user
    req.user = await User.findOne({ _id }).select("id");
    next();
  } catch (error) {
    // if there is something wrong with the token (maybe modified?):
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
