angular.module("coinConvApp", [])
.controller("myCoinConvCtrl", function ($scope) {
	
	//store all possible coins and their value
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
	
	//input validation to allow input that starts with £ currency
	$scope.inputValidation = function (inputAmount) {
		var amount = inputAmount;
		
		if (amount.match(/(?=.)^\£?(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/)) {
			if (amount.charAt(0) === '£') {
				amount = amount.substr(1) * 100;
			}
			$scope.errorMsg = "";
		}else{
			amount = 0;
			$scope.errorMsg = "Please enter a valid amount ex. ($24.50)";
			$scope.coinCalcForm.amountValue.$invalid = true;
		}
		return parseInt(amount);
	};

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
	$scope.errorMsg = "Must be a valid number!";
    $scope.finalCoins = [];
    $scope.calcMinCoin = function () {
		var validAmount = $scope.inputValidation($scope.amountValue);
        $scope.finalCoins = $scope.minNumCoins(validAmount);
    }
});