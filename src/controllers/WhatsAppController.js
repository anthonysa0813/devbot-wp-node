const verifyToken = (req, res) => {
  try {
    let accessToken = "TADG8A5TDRF2426YDAYDAD";
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && token == accessToken) {
      res.send(challenge);
    }
  } catch (error) {
    res.status(400).send();
  }
};

const receivedMessage = (req, res) => {};

module.exports = {
  verifyToken,
  receivedMessage,
};
