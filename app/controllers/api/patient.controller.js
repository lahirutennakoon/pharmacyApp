/**
 * Created by Vimukthi Mudalige on 6/25/2017.
 */
var config = require('../../../server/config/db.js');
var express = require('express');
var router = express.Router();
var patientService = require('../../services/patient.service');

// routes

router.post('/add_patient', registerPatient);
router.get('/api/add_patient', getAll);


module.exports = router;


function registerPatient(req, res) {
    patientService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });

}

function getAll(req, res) {
    patientService.getAll(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });

}