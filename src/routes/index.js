const { Router } = require("express");
const {
  verifyToken,
  receivedMessage,
} = require("../controllers/WhatsAppController");

const router = Router();

router.get("/", verifyToken);
router.post("/", receivedMessage);

module.exports = router;
