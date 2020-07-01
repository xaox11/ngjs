(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('MenuAppController', MenuAppController);

  MenuAppController.$inject = ['categories'];

  function MenuAppController(categories) {
    var $ctrl = this;
    $ctrl.categories = categories.data;
    $ctrl.items = categories;
  }
})();
