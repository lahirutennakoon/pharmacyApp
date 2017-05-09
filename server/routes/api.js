var express = require('express'),
    router = express.Router();

//routes for user api
router.use("/user", require("../controllers/user.api"));

//route for prescription api
router.use("/prescription", require("../controllers/prescription.api"));

//routes for drugAS api
router.use("/drugAS", require("../controllers/drug.apiAS.js"));

//route for drugs
router.use("/drug",require("../controllers/drug.api"));

module.exports = router;