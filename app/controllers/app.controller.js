/**
 * Created by Vimukthi Mudalige on 6/25/2017.
 */
var express = require('express');
var router = express.Router();

// use session authentication to secure angular app files
router.use('/', function (req, res, next) {
    if (req.path !== '/login' && !req.session.token) {
        return res.redirect('/login?returnUrl=' + encodeURIComponent('/app' + req.path));
    }

    next();
});

// make JWT token available to angular
router.get('/token', function (req, res) {
    res.send(req.session.token);
});

// serve angular app files via  '/app' route
router.use('/', express.static('app'));

module.exports = router;