(function () {
  'use strict';
  angular.module('MenuApp')
    .config(RoutesConfig)


  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.html',
        controller: 'MenuAppController as $ctrl',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/items/{itemId}',
        templateUrl: 'templates/items.html',
        controller: 'MenuAppController as $ctrl',
        resolve: {
          categories: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsFromCategory($stateParams.itemId)
              .then(function (item) {
                return item.data.menu_items;
              })
          }]
        }
      })
  }

})();
