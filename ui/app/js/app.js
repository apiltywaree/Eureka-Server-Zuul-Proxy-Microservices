var app = angular.module('myApp', []);

app.config(['$httpProvider', function($httpProvider) {

    $httpProvider.defaults.timeout = 20000;

}]);

app.controller('myCtrl', function($scope, $http) {

    this.retrieve = function() {

    $http.get('http://127.0.0.1:8302/api/stock-service/rest/stock/' + $scope.name)
    .then(function (response) {

        console.log('Inside Controller: '+ response);
        $scope.quotes = response.data;

    }, function (response) {

        console.log('Response came here');
        console.log('Response is: ' + response);
    });
    };


    this.add = function() {

        var messageObj = {
            userName: $scope.name,
            quotes: [$scope.quote]
        };

        $http.post('http://127.0.0.1:8302/api/db-service/rest/db/add', messageObj)
            .then(function(response) {

                console.log("Success response is: " + response);
                $scope.quotes = response.data;

            }, function(response) {

                console.log('Error is: ' + response);
            });
    }
});