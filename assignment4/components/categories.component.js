(function () {
  'use strict';

  angular.module("MenuApp")
    .component('categories', {
      templateUrl: 'templates/categories.html',
      controller: 'MenuAppController as $ctrl',
      bindings: {
        categories: '<'
      }

    })
})();
