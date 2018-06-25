var app = angular.module("app", ["ngRoute"])

app.config(['$routeProvider',
function($routeProvider)
{
  $routeProvider
  .when('/', {templateUrl : "resources/home.html"})
  .when('/about', {templateUrl : "resources/about.html"})
  .otherwise({templateUrl : "resources/404.html"})
}
]);

app.controller('quote', ['$scope', '$http',
  function quote($scope, $http)
  {
    $http.get("/~jsiao/resources/quotes1.txt")
    .then(
      function (response)
      {
        $scope.lines = response.data.split('\n');
        $scope.num   = Math.floor((Math.random() * ($scope.lines.length-1)));
        $scope.part1 = $scope.lines[$scope.num];
      }
    );
    $http.get("/~jsiao/resources/quotes2.txt")
    .then(
      function (response)
      {
        $scope.lines = response.data.split('\n');
        $scope.num   = Math.floor((Math.random() * ($scope.lines.length-1)));
        $scope.part2 = $scope.lines[$scope.num];
      }
    );
  }
]);
