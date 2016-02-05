//REM: $q is a promise -> value returned when done processing
var LoginFactory = function ($http, $q) {
    return function (emailAddress, password, rememberMe) {

        var deferredObject = $q.defer();


        //send login/password to mvc endpoint
        $http.post(
            '/Account/Login', {
                Email: emailAddress,
                Password: password,
                RememberMe: rememberMe
            }
        ).
        success(function (data) {
            //if success, check if creds valid
            if (data == "True") {
                deferredObject.resolve({ success: true });
            } else {
                deferredObject.resolve({ success: false });
            }
        }).
        error(function () {
            deferredObject.resolve({ success: false });
        });

        //return the credential check value
        return deferredObject.promise;
    }
}

LoginFactory.$inject = ['$http', '$q'];