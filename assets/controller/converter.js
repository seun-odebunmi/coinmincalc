angular.module("coinConvApp", [])
.controller("myCoinConvCtrl", function ($scope) {

	$scope.presetCoins = [
		{"denomination": "£2", "penceValue": 200},
		{"denomination": "£1", "penceValue": 100},
		{"denomination": "50p", "penceValue": 50},
		{"denomination": "20p", "penceValue": 20},
		{"denomination": "10p", "penceValue": 10},
		{"denomination": "5p", "penceValue": 5},
		{"denomination": "2p", "penceValue": 2},
		{"denomination": "1p", "penceValue": 1}
	];

    // calculate the least number of pennies
	$scope.minNumCoins = function (inputAmount) {
        var amount = inputAmount;
        var result = [];

        $.each($scope.presetCoins, function (index, coinObj) {
            if (Math.floor(amount/coinObj.penceValue) !== 0){ //ensure amount is divisible by current coin at least once
                result.push( { "denomination": coinObj.denomination, "pennyCount": Math.floor(amount/coinObj.penceValue) } );
            }
            amount %= coinObj.penceValue;
        });
        return result;
    };

    $scope.amountValue = "";
    $scope.finalCoins = [];
    $scope.calcMinCoin = function () {
        $scope.finalCoins = $scope.minNumCoins($scope.amountValue);
    }
});