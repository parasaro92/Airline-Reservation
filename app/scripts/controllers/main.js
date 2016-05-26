// 'use strict';

/**
 * @ngdoc function
 * @name airlinesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the airlinesApp
 */

  airlinesApp.service('flightService', function(){
    this.seats = "20";
    this.sources = "Banglore";
    this.destination = "Delhi";
  }); 

   airlinesApp.factory('JsonService', function($resource){
    return $resource('data/flights.json', { }, {
      getData: { method: 'GET', isArray: false }
    });
  });

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

  airlinesApp.controller('MainCtrl', function($scope, JsonService, $location, flightService) {
    
    $scope.date = {
      value: convertToDate('10/31/1997 23:00')
    };

    JsonService.query(function(data){ 
      console.log(data);
      $scope.contents = data;
    });

    $scope.seats = flightService.seats;   
    $scope.sources = flightService.sources;
    $scope.destination = flightService.destination;  

    $scope.$watch('[seats,sources,destination]', function(){
      flightService.seats = $scope.seats;
      flightService.sources = $scope.sources;
      flightService.destination=$scope.destination;
    });

    // $scope.$watch('seats', function(){
    //   seatService.seats = $scope.seats;
    // });

    $scope.submit = function() {
      // contents.b 
        // console.log(dest);
        $location.path('/show');
    };

    // $scope.inlineOptions = {
    // // customClass: getDayClass,
    // minDate: new Date('dd-MMMM-yyyy')
    // // showWeeks: true
    // };

    // $scope.dateOptions = {
    //   // dateDisabled: disabled,
    //   formatYear: 'yy',
    //   maxDate: new Date(2020, 5, 22),
    //   minDate: new Date('dd-MMMM-yyyy')
    //   // startingDay: 1
    // };

    // $scope.toggleMin = function() {
    //   $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    //   $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    // };

    // $scope.toggleMin();

    // $scope.open1 = function() {
    //   $scope.popup1.opened = true;
    // };

    // $scope.formats = ['dd-MMMM-yyyy'];
    // $scope.format = $scope.formats[0];
    // $scope.altInputFormats = ['d!/M!/yyyy'];

    // $scope.popup1 = {
    //   opened: false
    // };
  });

// angular.module('airlinesApp')
  airlinesApp.controller('ShowCtrl', function($scope, JsonService, flightService){
    
    $scope.seats = flightService.seats;
    $scope.sources = flightService.sources;
    $scope.destination = flightService.destination;
  });


function convertToDate(str) {
       var arr = str.split(/[\/ :]/);
       var date = new Date(+arr[2], +arr[0] + 1, +arr[1], +arr[3], +arr[4]);
       return date;
       
     }