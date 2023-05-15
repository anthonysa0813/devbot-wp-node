const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  // console.log("logs.txt");
  // res.send("logs.txt");
  res.sendFile(__dirname + "/../logs.txt");
});

module.exports = router;
