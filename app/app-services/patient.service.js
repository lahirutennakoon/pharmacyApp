/**
 * Created by Vimukthi Mudalige on 6/25/2017.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .factory('PatientService', Service);

    function Service($http, $q) {
        var service = {};


        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Create = Create;

        return service;


        function GetAll() {
            return $http.get('/api/add_patient').then(handleSuccess, handleError);
        }

        function GetById(_id) {
            return $http.get('/api/add_patient/' + _id).then(handleSuccess, handleError);
        }


        function Create(user) {
            return $http.post('/api/add_patient', user).then(handleSuccess, handleError);
        }



        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();