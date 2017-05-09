(function() {
    'use strict';

    angular
        .module('app')
        .controller('drugControllerAS', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'drugService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, drugService, $state, $stateParams) {
        $scope.drugs = [];

        if ($state.current.name == "drugs") {
            $rootScope.Title = "Drug Listing";
            drugService.getDrugs().then(function(res) {
                $scope.drugs = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.deleteDrug = function(id) {
                if (confirm('Are you sure to delete?')) {
                    drugService.deleteDrug(id).then(function(res) {
                        if (res.data == "deleted") {
                            $state.go("drugs", {}, { reload: true });
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "editDrug") {
            $rootScope.Title = "Edit Drug";
            var id = $stateParams.id;
            drugService.getDrug(id).then(function(res) {
                $scope.drug = res.data;
            }).catch(function(err) {
                console.log(err);
            });

            $scope.saveData = function(drug) {
                if ($scope.drugForm.$valid) {
                    drugService.updateDrug(drug).then(function(res) {
                        if (res.data == "updated") {
                            $state.go("drugs");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };
        } else if ($state.current.name == "createDrug") {
            $rootScope.Title = "Create Drug";
            $scope.saveData = function(drug) {
                $scope.IsSubmit = true;
                if ($scope.drugForm.$valid) {
                    drugService.createDrug(drug).then(function(res) {
                        if (res.data == "created") {
                            $state.go("drugs");
                        }
                    }).catch(function(err) {
                        console.log(err);
                    });
                }
            };


        }
        else if ($state.current.name == "placeOrder") {
            $rootScope.Title = "Edit Drug";
            var id = $stateParams.id;
            drugService.getDrug(id).then(function (res) {
                $scope.drug = res.data;
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
})();