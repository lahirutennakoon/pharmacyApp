/**
 * Created by Vimukthi Mudalige on 6/25/2017.
 */
//var config = require('../../server/config/db.js');
var config = require('../../config.json');

var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var O = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('patients');

var service = {};


service.getById = getById;
service.getAll = getAll;
service.create = create;

module.exports = service;


function getById(_id) {
    var deferred = O.defer();

    db.patients.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getAll() {
    var deferred = O.defer();

    db.patients.find(function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (users) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = O.defer();

    createUser();


    function createUser() {

        var user = _.omit(userParam, '');


        db.patients.insert(
            user,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

