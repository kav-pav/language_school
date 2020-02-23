const { Router } = require("express");
const sendMail = require("./sendmail");
const facebook = require("./facebook");

const router = new Router();

router.use("/sendmail", sendMail);
router.use("/facebook", facebook);
module.exports = router;
