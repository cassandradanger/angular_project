/**
 * Created by casie on 5/28/15.
 */
console.log("Home.js controller is Loaded");

myApp.controller('HomeController',["$scope", "$http", function($scope, $http) {
    console.log("home");
    
    $scope.message = {};

    $http({
        method: 'GET',
        url: '/home'
    }).then(function successCallback(response) {
        console.log(response.data.message);
        $scope.message = response.data.message;
    }, function errorCallback(response) {
        console.log("you suck");
    });



}]);


