const Server = require("./models/server");

const server = new Server();

server.app.use("/logs", (req, res) => {
  res.sendFile(__dirname + "/logs.txt");
});

server.listen();
