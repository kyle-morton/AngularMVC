var LandingPageController = function ($scope) {
    $scope.models = {
        helloAngular: 'Angular JS'
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };
};

//inject inject scope object into controller
LandingPageController.$inject = ['$scope'];