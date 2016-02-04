var LandingPageController = function ($scope) {
    $scope.models = {
        helloAngular: 'I work!'
    };
}

//inject inject scope object into controller
LandingPageController.$inject = ['$scope'];