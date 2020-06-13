(function () {
  'use strict'
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    narrow.searchTerm = "";
    narrow.found = [];

    narrow.search = function () {

      if (narrow.searchTerm.trim() !== "") {

        var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);

        promise.then(function (result) {
            narrow.found = result;
          }
        )
      } else {
        narrow.found = [];
      }
    }
    narrow.removeItem = function (index) {
      narrow.found.splice(index, 1);
    }

    narrow.showIsEmpty = function () {
      return narrow.searchTerm.trim() === "" || narrow.found.length === 0
    }

  }

  MenuSearchService.$inject = ['$http'];

  function MenuSearchService($http) {
    var menuService = this;

    menuService.getMatchedMenuItems = function (searchTerm) {

      return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
        .then(function success(result) {
          var foundItems = result.data.menu_items;
          var filteredItems = [];
          for (var i = 0; i < foundItems.length; i++) {
            if (foundItems[i].description.includes(searchTerm)) {
              filteredItems.push(foundItems[i]);
            }
          }
          return filteredItems;
        });
    }
  }

  function FoundItemsDirective() {
    var ddo = {
      restrict: 'A',
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controllerAs: 'narrow'
    }

    return ddo;
  }


})
()
