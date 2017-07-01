/**
 * Created by Vimukthi Mudalige on 6/25/2017.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('Add_Patient.IndexController', Controller);

    function Controller($window, PatientService, FlashService) {
        var vm = this;

        vm.user = null;
        vm.saveUser = saveUser;




        function saveUser() {
            PatientService.Create(vm.user)
                .then(function () {
                    FlashService.Success('User created');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }


    }

})();