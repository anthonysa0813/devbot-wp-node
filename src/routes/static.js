const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  // res.sendFile(__dirname + "../../logs.txt");
  res.send(__dirname + "../../logs.txt");
});

module.exports = router;
