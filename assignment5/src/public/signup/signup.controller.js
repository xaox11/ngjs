(function () {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'SignupService'];


    function SignUpController(MenuService, SignupService) {
        var signUpCtrl = this;
        signUpCtrl.foundMenu;
        signUpCtrl.error;
        signUpCtrl.saved = false;

        signUpCtrl.signUpUser = {
            name: '', lastName: '',
            email: '', phone: '', menuNumber: ''
        };


        signUpCtrl.submit = function () {
            saveUser(signUpCtrl.signUpUser);
        }

        signUpCtrl.isMenuNumberValid = function () {
            checkMenuItemInput();
        }

        var checkMenuItemInput = function () {
            MenuService.getFavoriteMenu(signUpCtrl.signUpUser.menuNumber)
                .then(function (response) {
                    signUpCtrl.error = undefined;
                    signUpCtrl.foundMenu = response.data;
                })
                .catch(function (reason) {
                    signUpCtrl.foundMenu = undefined;
                    signUpCtrl.error = reason.statusText;
                });

        }

        var saveUser = function (user) {
            signUpCtrl.saved = SignupService.saveUser(user);
        }

    }

})();