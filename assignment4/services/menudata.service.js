(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService)

  MenuDataService.$inject = ['$http'];

  function MenuDataService($http) {
    var $ctrl = this;
    $ctrl.getAllCategories = function () {
      return $http.get('https://davids-restaurant.herokuapp.com/categories.json');
    }

    $ctrl.getItemsFromCategory = function (categoryShortName) {
      return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json',
        {params: {category: categoryShortName}})
    }

  }

})();
