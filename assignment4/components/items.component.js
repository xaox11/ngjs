(function () {
    'use strict';

    angular.module('MenuApp')
      .component('items', {
        templateUrl: 'templates/items.html',
        controller: 'MenuAppController as $ctrl',
        bindings: {
          items: '<'
        }
      })
  }

)();
