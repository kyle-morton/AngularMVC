var LandingPageController = function ($scope) {
    $scope.models = {
        helloAngular: 'Angular JS'
    };
};

//inject inject scope object into controller
LandingPageController.$inject = ['$scope'];