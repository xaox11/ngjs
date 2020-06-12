(function () {
  'use strict'

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var tbc = this;


    tbc.buy = function (position) {
      ShoppingListCheckOffService.addItemToAlreadyBoughtList(position);
      ShoppingListCheckOffService.removeItemFromToBuyList(position);
    }

    tbc.getItems = function () {
      return ShoppingListCheckOffService.getToBuyItems();
    }

    tbc.isEmpty = function () {
      return tbc.getItems().length === 0;
    }

  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var abc = this;

    abc.getItems = function () {
      return ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    abc.isEmpty = function () {
      return abc.getItems().length === 0;
    }

  }

  function ShoppingListCheckOffService() {
    var service = this;

    let toBuyItems = [
      {name: 'milk', quantity: 2},
      {name: 'bread', quantity: 1},
      {name: 'cola', quantity: 5},
      {name: 'toothpaste', quantity: 4},
      {name: 'candy', quantity: 9},
      {name: 'pasta', quantity: 1},
    ];

    let alreadyBoughtItems = [];

    service.addItemToAlreadyBoughtList = function (position) {
      alreadyBoughtItems.push(toBuyItems[position]);
    }

    service.removeItemFromToBuyList = function (position) {
      toBuyItems.splice(position, 1);
    }

    service.getToBuyItems = function () {
      return toBuyItems;
    }

    service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
    }

  }

})()
