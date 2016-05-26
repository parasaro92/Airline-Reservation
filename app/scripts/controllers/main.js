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
      console.log(data);
      $scope.contents = data;
      // var arr = [];

      // // for(i=0; i<$scope.contents.length; i++){
      // //   arr.push($scope.contents[i].From);
      // // }
      // console.log(arr);
      // var cities = arr.filter(function(elem, index, self){
      //   return index == self.indexOf(elem);
      // });
      // console.log(cities);
    })

    // $scope.$watch('cityService', function(){
    //   cityService.seat = $scope.seat;
    // });

    $scope.submit = function(dest) {
      // contents.b 
        console.log(dest);
        $location.path('/show');
    };
    // $scope.flightDestination = [];
    // $scope.changeData = function(source){
    //   angular.forEach($scope.contents, function(data){
    //       if(source.From == data.From){
    //         $scope.flightDestination.push(data);
    //       }
    //   })
    // }

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
  airlinesApp.controller('ShowCtrl', function($scope, JsonService){
    var vm = this;
    JsonService.query(function(data){
      vm.contents = data;
      console.log(vm.contents);
    })

    $scope.sort = 'source';
  });

// angular.module('airlinesApp')
airlinesApp.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });

      return output;
   };
});