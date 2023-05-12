const express = require("express");
const WpRouter = require("../routes/index");
const morgan = require("morgan");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 5050;
    this.apiPaths = {
      whatSappApi: "/api/v1/whatsapp",
    };
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("../logs.txt"));
  }

  routes() {
    this.app.use(this.apiPaths.whatSappApi, WpRouter);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log("listening on port " + this.PORT);
    });
  }
}

module.exports = Server;
