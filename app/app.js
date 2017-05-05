(function() {
    'use strict';

    angular.module('app', [
        "ui.router"
    ])
        .config(function($stateProvider, $urlRouterProvider)
        {
            $urlRouterProvider.otherwise("/");

            $stateProvider.state("users", {
                url: "/",
                templateUrl: "/views/user/index.html",
                controller: "userController"
            }).state("create", {
                url: "/create",
                templateUrl: "/views/user/create.html",
                controller: "userController"
            }).state("edit", {
                url: "/edit/:id",
                templateUrl: "/views/user/create.html",
                controller: "userController"
            }).state("details", {
                url: "/details/:id",
                templateUrl: "/views/user/details.html",
                controller: "userController"
            }).state("prescriptions", {
                url: "/prescription",
                templateUrl: "/views/prescription/index.html",
                controller: "prescriptionController"
            }).state("createPrescription", {
                url: "/prescription/createPrescription",
                templateUrl: "/views/prescription/createPrescription.html",
                controller: "prescriptionController"
            }).state("editPrescription", {
                url: "/prescription/editPrescription/:id",
                templateUrl: "/views/prescription/createPrescription.html",
                controller: "prescriptionController"
            }).state("detailsPrescription", {
                url: "/prescription/detailsPrescription/:id",
                templateUrl: "/views/prescription/details.html",
                controller: "prescriptionController"
            });
        })
        .constant("globalConfig", {
            apiAddress: 'http://localhost:3000/api'
        });
})();