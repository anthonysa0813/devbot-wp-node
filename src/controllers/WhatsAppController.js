const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./src/logs.txt"));

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

const receivedMessage = (req, res) => {
  try {
    let entry = req.body["entry"][0];
    let changes = entry["changes"][0];
    let value = changes["value"];
    let messageObject = value["messages"];
    console.log("entre");
    myConsole.log(messageObject);
    console.log("entre");

    return res.send("EVENT_RECEIVED");
  } catch (error) {
    // myConsole.log(error);
    console.log(error);
    return res.send("EVENT_RECEIVED");
  }
};

module.exports = {
  verifyToken,
  receivedMessage,
};
