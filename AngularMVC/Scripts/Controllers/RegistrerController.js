var RegisterController = function ($scope, $location, RegistrationFactory) {

    var vm = this;

    vm.registrationFailure = false;
    vm.errors = [];

    vm.registerForm = {
        emailAddress: '',
        password: '',
        confirmPassword: ''
    };

    vm.validateRegistration = function () {
        var valid = true;
        return valid;
    };

    vm.register = function () {

        if (vm.validateRegistration()) {
            var result = RegistrationFactory(vm.registerForm.emailAddress, vm.registerForm.password, vm.registerForm.confirmPassword);
            result.then(function (result) {
                if (result.success) {
                    $location.path('/routeOne');
                } else {
                    vm.registrationFailure = true;
                }
            });
        }
    };


}

RegisterController.$inject = ['$scope', '$location', 'RegistrationFactory'];