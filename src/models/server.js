const express = require("express");
const WpRouter = require("../routes/index");
const staticLogRouter = require("../routes/static");
const morgan = require("morgan");
const cors = require("cors");
const connectDatabase = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 5050;
    this.apiPaths = {
      whatSappApi: "/api/v1/whatsapp",
      static: "/api/v1/logs",
    };
    this.middlewares();
    this.routes();
    this.connectDB();
  }

  async connectDB() {
    await connectDatabase();
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(__dirname + "../logs.txt"));
  }

  routes() {
    this.app.use(this.apiPaths.whatSappApi, WpRouter);
    this.app.use(this.apiPaths.static, staticLogRouter);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log("listening on port " + this.PORT);
    });
  }
}

module.exports = Server;
