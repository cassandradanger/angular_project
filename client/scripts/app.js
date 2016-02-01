var myApp = angular.module('myApp',['ngRoute', 'appControllers', 'ngMaterial']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/views/routes/home.html",
             controller: 'HomeController'
        }).
        when('/cat', {
            templateUrl: "/views/routes/cat.html",
            controller: 'CatController'
        }).
        when('/dog', {
            templateUrl: "/views/routes/dog.html",
            controller: 'DogController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
