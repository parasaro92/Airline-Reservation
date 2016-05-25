// 'use strict';

/**
 * @ngdoc function
 * @name airlinesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the airlinesApp
 */

   airlinesApp.factory('JsonService', function($resource){
    return $resource('data/flights.json', { }, {
      getData: { method: 'GET', isArray: false }
    });
  });

  airlinesApp.factory('cityService', function(){
    this.seat = 20;
  }); 

// angular.module('airlinesApp')
  airlinesApp.controller('MainCtrl', function($scope, JsonService, $location) {
    
    JsonService.query(function(data){
      // console.log(data);
      $scope.contents = data;
    })

    // $scope.$watch('cityService', function(){
    //   cityService.seat = $scope.seat;
    // });

    $scope.submit = function() {
        $location.path('/show');
    };

    $scope.inlineOptions = {
    // customClass: getDayClass,
    minDate: new Date('dd-MMMM-yyyy')
    // showWeeks: true
    };

    $scope.dateOptions = {
      // dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date('dd-MMMM-yyyy')
      // startingDay: 1
    };

    $scope.toggleMin = function() {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['d!/M!/yyyy'];

    $scope.popup1 = {
      opened: false
    };
  });

// angular.module('airlinesApp')
  airlinesApp.controller('ShowCtrl', function(JsonService){
    var vm = this;
    JsonService.query(function(data){
      console.log(data);
      vm.price = data[0];
      console.log(vm.price);
    })

    // vm.airline = airline;
    // console.log(vm.airline);
  });

// angular.module('airlinesApp')
