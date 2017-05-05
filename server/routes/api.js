var express = require('express'),
    router = express.Router();

//routes for user api
router.use("/user", require("../controllers/user.api"));

//route for prescription api
router.use("/prescription", require("../controllers/prescription.api"));

module.exports = router;