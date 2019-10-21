const jwt = require('jsonwebtoken');
const { SECRET } = require('./constants');

// We don't need async here if we're not using await
exports.issueToken = async userData => {
  const { _id: id } = userData;

  const payload = {
    user: {
      id,
    },
  };
  return jwt.sign(payload, SECRET);
};

exports.verifyToken = async token => {
  return jwt.verify(token, SECRET);
};
