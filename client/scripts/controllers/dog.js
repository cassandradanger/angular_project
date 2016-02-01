/**
 * Created by casie on 5/28/15.
 */
console.log("Dog.js controller is Loaded");

myApp.controller('DogController',["$scope", "$http", function($scope, $http) {
    console.log("woof");

        $scope.message = {};

        $http({
            method: 'GET',
            url: '/dog'
        }).then(function successCallback(response) {
            console.log(response.data.message);
            $scope.message = response.data.message;
        }, function errorCallback(response) {
            console.log("you suck");
        });
}]);
