const verifyToken = (req, res) => {
  return res.json({
    message: "verify token",
  });
};

const receivedMessage = (req, res) => {};

module.exports = {
  verifyToken,
  receivedMessage,
};
