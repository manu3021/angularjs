 var app = angular.module('weatherApp', []);
 app.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
     function fetchWeather(zip) {
         weatherService.getWeather(zip).then(function(data) {
             $scope.place = data;
         });
     }
     fetchWeather('600091');
     $scope.findWeather = function(zip) {
         $scope.place = '';
         fetchWeather(zip);
     };
 }]);
  
 app.factory('weatherService', ['$http', '$q', function($http, $q) {
             function getWeather(zip) {
                 var deferred = $q.defer();
                 $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=%27+chennai+%27&mode=json&units=metric&#8217')
                     .success(function(data) {
                         deferred.resolve(data);
                     })
                     .error(function(err) {
                         console.log('Error retrieving markets');
                         deferred.reject(err);
                     });
                     return deferred.promise;
                 }
                 return {
                     getWeather: getWeather
                 };
             }]);
