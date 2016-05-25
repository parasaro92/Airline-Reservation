'use strict';

/**
 * @ngdoc function
 * @name airlinesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the airlinesApp
 */
angular.module('airlinesApp')
  .controller('MainCtrl', function($scope, $firebaseArray) {
    
    var ref = new Firebase('https://airlinesapp.firebaseio.com/' + 'airlines');
    var airline = $firebaseArray(ref);

    $scope.airline = airline;
    $scope.dt = new Date();

    $scope.addFormSubmit = function() {
      // console.log($scope.dt);
      airline.$add({
        source: $scope.source,
        destination: $scope.destination,
        seats: $scope.seats,
        // league: $scope.league,
        // dummy: 'hello',
        dt: new Date().getTime()
      }).then(function(){
        // console.log($scope.dt.toString('dd-MMMM-yyyy'));
        $scope.source = '';
        $scope.destination = '';
        $scope.seats = '';
        $scope.dt = '';    
      });
    }

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

    // Disable weekend selection
    // function disabled(data) {
    //   var date = data.date,
    //     mode = data.mode;
    //   return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    // }

    $scope.toggleMin = function() {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    // $scope.setDate = function(year, month, day) {
    //   $scope.dt = new Date(year, month, day);
    // };

    $scope.formats = ['dd-MMMM-yyyy'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['d!/M!/yyyy'];

    $scope.popup1 = {
      opened: false
    };

    // var tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // var afterTomorrow = new Date();
    // afterTomorrow.setDate(tomorrow.getDate() + 1);
    // $scope.events = [
    //   {
    //     date: tomorrow,
    //     status: 'full'
    //   },
    //   {
    //     date: afterTomorrow,
    //     status: 'partially'
    //   }
    // ];

    // function getDayClass(data) {
    //   var date = data.date,
    //     mode = data.mode;
    //   if (mode === 'day') {
    //     var dayToCheck = new Date(date).setHours(0,0,0,0);

    //     for (var i = 0; i < $scope.events.length; i++) {
    //       var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

    //       if (dayToCheck === currentDay) {
    //         return $scope.events[i].status;
    //       }
    //     }
    //   }

    //   return '';
    // }
  });

angular.module('airlinesApp')
  .controller('ShowCtrl', function($firebaseArray){
    var vm = this;
    var ref = new Firebase('https://airlinesapp.firebaseio.com/' + 'airlines');
    var airline = $firebaseArray(ref);

    vm.airline = airline;
    console.log(vm.airline);
  });
