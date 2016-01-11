angular.module('docsSimpleDirective', [])
.controller('Controller', ['$scope', function($scope) { }])
.directive('userList',  ['$http',  function($http){
    return {
      restrict: 'E',
      scope: true,
      transclude: true,
      replace: true,
      template:'<html><ul><li ng-repeat="list in userlist | filter: search"><b>Name :-</b> <i>{{list.uname}}</i>, <b>Email :-</b> <i>{{list.email}}</i></li></ul></html>',
      controller: ['$scope',function($scope){
      }],

           link: function(scope, element, attrs) {
            console.log('here');
            var url='list.php';
            var httpHeaders = { 'If-Modified-Since': "0" };
            var userList = [];
            $http({method: 'GET', url: url, cache: true, headers: httpHeaders}).
              success(function(data, status, headers, config) {
                console.log("success");
                scope.userlist = data;
                console.log(scope); 
            }).
            error(function(data, code, status, headers, config) {
              console.log("Failure")
            });
        }

    }
}]);