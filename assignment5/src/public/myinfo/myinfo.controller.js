(function () {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignupService', 'menu'];

    function MyInfoController(SignupService, menu) {
        var myInfoCtrl = this;


        myInfoCtrl.user = SignupService.getUser();
        myInfoCtrl.menu = menu;

    }

})();