// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var routeApp = angular.module('routeApp', ['ngRoute']);

    // configure our routes
    routeApp.config(['$routeProvider' , function($routeProvider) {
        $routeProvider.

            // route for the home page
            .when('/pages', {
                templateUrl : 'home.html',
                controller  : 'mainCtrl'
            });
    }]);

    // create the controller and inject Angular's $scope
    function mainCtrl($scope, Page) {
      /*console.log(Page);*/
      $scope.page= Page; 
   }

    