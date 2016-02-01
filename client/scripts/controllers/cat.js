/**
 * Created by casie on 5/28/15.
 */

myApp.controller('CatController',["$scope", "$http", function($scope, $http) {
    console.log("meow");

    $scope.message = {};

    $http({
        method: 'GET',
        url: '/cat'
    }).then(function successCallback(response) {
    console.log(response.data.message);
        $scope.message = response.data.message;
    }, function errorCallback(response) {
        console.log("you suck");
    });

}]);
