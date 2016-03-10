calcModule.controller('calcCtrl', ['$scope', function($scope) {

// VALUES DEFINE
  $scope.totalValue = 0;
  $scope.numString = 0;
  $scope.tempValue = 0;

// IN-APP get FUNCTIONS
  $scope.getTotal = function() {
    return $scope.totalValue;
  }

  $scope.getTemp = function() {
    return $scope.tempValue;
  }

// COMMON METHODS
  $scope.calculate = function(operation) {
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
        if ($scope.tempValue == 0) {
          $scope.tempValue = $scope.totalValue;
        }
    }
    $scope.resetValues();
  }

// VALUES MANIPULATIONS
  $scope.restart = function() {
    $scope.numString = 0;
    $scope.totalValue = 0;
    $scope.tempValue = 0;
    $scope.operationType = "";
  }

  $scope.resetValues = function() {
    $scope.numString = 0;
    $scope.totalValue = 0;
    $scope.operationType = "";
  }

// BUTTONS PRESS
  $scope.numBtnPress = function(x) {
    $scope.numString = ($scope.numString + x).toString();
    $scope.totalValue = parseFloat($scope.numString);
  }

  $scope.dotBtnPress = function() {
    $scope.numString = $scope.numString + ".";
    $scope.totalValue = parseFloat($scope.numString);
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

// OPERATIONAL
  $scope.subtract = function() {
    $scope.tempValue -= $scope.totalValue;
  }

  $scope.addition = function() {
    $scope.tempValue += $scope.totalValue;
  }

  $scope.multiply = function() {
    $scope.tempValue *= $scope.totalValue;
  }

  $scope.divine = function() {
    $scope.tempValue /= $scope.totalValue;
  }

}]);
