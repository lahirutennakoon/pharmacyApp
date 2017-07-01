/**
 * Created by Vimukthi Mudalige on 6/25/2017.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(UserService, PatientService) {
        var vm = this;

        vm.user = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });

            UserService.GetAll().then(function (users){
                vm.userList = users;
            })
        }




    }

})();