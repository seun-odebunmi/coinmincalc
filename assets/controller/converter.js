angular.module("coinConvApp", [])
.controller("myCoinConvCtrl", function myCoinConvCtrl ($scope) {
	
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
		
        if ((/^(\u00A3)?([0-9\.]+)p?$/).test(amount) && amount !== 0) {
            
            amount = amount.toString();
            if(amount.indexOf("£") > -1 || amount.indexOf(".") > -1) {
                amount = amount.replace(/[^\d.-]/g, ''); 
                amount = parseFloat(amount).toFixed(2);
                amount = (amount * 100).toFixed(0);
            } 
            else {
                amount = amount.replace(/[^\d.-]/g, '');
                amount = parseFloat(amount).toFixed(0);
            }
			$scope.errorMsg = "";
            return parseFloat(amount);
            
		}else{
			$scope.errorMsg = "Please enter a valid amount ex. ($24.50)";
			//$scope.coinCalcForm.amountValue.$invalid = true;
            return false;
		}
		
	};

    // calculate the least number of pennies
	$scope.minNumCoins = function (inputAmount) {
        var amount = $scope.inputValidation(inputAmount);
        var result = [];
        
        if (amount){
            
            $.each($scope.presetCoins, function (index, coinObj) {
                if (Math.floor(amount/coinObj.penceValue) !== 0){ //ensure current amount is not zero
                    result.push( { "denomination": coinObj.denomination, "pennyCount": Math.floor(amount/coinObj.penceValue) } );
                }
                amount %= coinObj.penceValue;
            });
            return result;
        }else{
            return false;
        }
        
    };

    $scope.amountValue = "";
	$scope.errorMsg = "Must be a valid number!";
    $scope.finalCoins = [];
    $scope.calcMinCoin = function () {
        $scope.finalCoins = $scope.minNumCoins($scope.amountValue);
    }
});