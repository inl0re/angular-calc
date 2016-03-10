calcModule.controller('calcCtrl', ['$scope', function($scope) {

// VALUES DEFINE
  $scope.currentValue = 0;
  $scope.numString = 0;
  $scope.totalValue = 0;

// IN-APP get FUNCTIONS
  $scope.getTotal = function() {
    return $scope.currentValue;
  }

  $scope.getTemp = function() {
    return $scope.totalValue;
  }

// COMMON METHODS
  $scope.calculate = function(operation) {
    $scope.currentValue = parseFloat($scope.numString);
    switch (operation) {
      case "+":
        $scope.addition();
        break
      case "-":
        $scope.subtract();
        break
      case "*":
        $scope.multiply();
        break
      case "/":
        $scope.divine();
        break
      default:
        if ($scope.totalValue == 0) {
          $scope.totalValue = $scope.currentValue;
        }
    }
    $scope.resetValues();
  }

// VALUES MANIPULATIONS
  $scope.restart = function() {
    $scope.numString = 0;
    $scope.currentValue = 0;
    $scope.totalValue = 0;
    $scope.operationType = "";
  }

  $scope.resetValues = function() {
    $scope.numString = 0;
    $scope.currentValue = 0;
    $scope.operationType = "";
  }

// BUTTONS PRESS
  $scope.numBtnPress = function(x) {
    if ($scope.operationType == '') {
      $scope.totalValue = 0;
    }
    $scope.numString = ($scope.numString + x).toString();

  }

  $scope.dotBtnPress = function() {
    if ($scope.operationType == '') {
      $scope.totalValue = 0;
    }
    $scope.numString = $scope.numString + ".";
    $scope.currentValue = parseFloat($scope.numString);
  }
  $scope.operationBtnPress = function(operation) {
    $scope.calculate($scope.operationType);
    $scope.resetValues();
    $scope.operationType = operation;
  }
  $scope.calcBtnPress = function() {
    $scope.calculate($scope.operationType);
    $scope.resetValues();
  }

  $scope.deleteLastChar = function() {
    $scope.numString = $scope.numString.substr(0, $scope.numString.length - 1);
  }

// OPERATIONAL
  $scope.subtract = function() {
    $scope.totalValue -= $scope.currentValue;
  }

  $scope.addition = function() {
    $scope.totalValue += $scope.currentValue;
  }

  $scope.multiply = function() {
    $scope.totalValue *= $scope.currentValue;
  }

  $scope.divine = function() {
    $scope.totalValue /= $scope.currentValue;
  }

}]);
