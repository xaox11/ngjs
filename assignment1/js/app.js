(function () {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];

    function LunchCheckController($scope) {

      $scope.writtenString = "";
      $scope.textStyle = {color: 'black', border: 'none'};
      $scope.listOfMyStrings = function () {
        $scope.listings = $scope.writtenString.split(',');
        removeWhitespacesFromItems();
        $scope.pushOutEmptyItems();
      }

      $scope.pushOutEmptyItems = function () {

        for (let i = 0; i < $scope.listings.length; i++) {
          if ($scope.listings[i].trim() === "") {
            $scope.listings.splice(i, 1);
          }
        }
      }

      function removeWhitespacesFromItems() {
        for (let i = 0; i < $scope.listings.length; i++) {
          $scope.listings[i] = $scope.listings[i].trim();
        }

      }

      $scope.showWarning = function () {
        $scope.listOfMyStrings();
        if ($scope.listings.length === 0) {
          $scope.textStyle = {'color': 'red','border': '1px solid red'};
          $scope.warning = "Please enter data first";
        } else {
          $scope.textStyle = {'color': 'green', 'border': '1px solid green'};
          if ($scope.listings.length <= 3 && $scope.listings.length > 0) {
            $scope.warning = "Enjoy";
          } else if ($scope.listings.length > 3) {
            $scope.warning = "Too Much";
          }
        }

      }


    }


  }

)
();
