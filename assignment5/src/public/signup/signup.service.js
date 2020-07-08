(function () {
    'use strict';
    angular.module('public')
        .service('SignupService', SignupService);

    SignupService.$inject = [];

    function SignupService() {
        var service = this;
        service.user = {};

        service.saveUser = function (user) {
            service.user = user;
            return true;
        }

        service.getUser = function () {
            return service.user;
        }

    }

})();