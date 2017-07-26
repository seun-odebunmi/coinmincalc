describe("myCoinConvCtrl", function() {
    beforeEach(module('coinConvApp'));
    
    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('Input Validation', function() {
        var $scope, controller;
        
        beforeEach(function() {
          $scope = {};
          controller = $controller('myCoinConvCtrl', { $scope: $scope });
        });
        
        it("Empty string '', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation('')).toEqual($scope.resultingValue); 
        });
        
        it("'0', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation(0)).toEqual($scope.resultingValue); 
        });
        
        it("'null', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation(null)).toEqual($scope.resultingValue); 
        });
        
        it("'2£', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation('2£')).toEqual($scope.resultingValue); 
        });
        
        it("'13x', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation('13x')).toEqual($scope.resultingValue); 
        });
        
        it("'13p02', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation('13p02')).toEqual($scope.resultingValue); 
        });
        
        it("'£p', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation('£p')).toEqual($scope.resultingValue); 
        });
        
        it("'£p2', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation('£p2')).toEqual($scope.resultingValue); 
        });
        
        it("'-200', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation(-200)).toEqual($scope.resultingValue); 
        });
        
        it("'£-200', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation('£-200')).toEqual($scope.resultingValue); 
        });
        
        it("'-£200', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation('-£200')).toEqual($scope.resultingValue); 
        });
        
        it("'-200p', should return false", function() {
            $scope.resultingValue = false;
            expect($scope.inputValidation('-200p')).toEqual($scope.resultingValue); 
        });
        
        it("'£23', should return 2300", function() {
            $scope.resultingValue = 2300;
            expect($scope.inputValidation('£23')).toEqual($scope.resultingValue); 
        });
        
        it("'432', should return 432", function() {
            $scope.resultingValue = 432;
            expect($scope.inputValidation(432)).toEqual($scope.resultingValue); 
        });
        
        it("'213', should return 213", function() {
            $scope.resultingValue = 213;
            expect($scope.inputValidation(213)).toEqual($scope.resultingValue); 
        });
        
        it("'4.32', should return 432", function() {
            $scope.resultingValue = 432;
            expect($scope.inputValidation(4.32)).toEqual($scope.resultingValue); 
        });
        
        it("'£16.23p', should return 1623", function() {
            $scope.resultingValue = 1623;
            expect($scope.inputValidation('£16.23p')).toEqual($scope.resultingValue); 
        });
        
        it("'£14', should return 1400", function() {
            $scope.resultingValue = 1400;
            expect($scope.inputValidation('£14')).toEqual($scope.resultingValue); 
        });
        
        it("'£54.04', should return 5404", function() {
            $scope.resultingValue = 5404;
            expect($scope.inputValidation('£54.04')).toEqual($scope.resultingValue); 
        });
        
        it("'£23.33333', should return 2333", function() {
            $scope.resultingValue = 2333;
            expect($scope.inputValidation('£23.33333')).toEqual($scope.resultingValue); 
        });
        
        it("'£17.123456p', should return 1712", function() {
            $scope.resultingValue = 1712;
            expect($scope.inputValidation('£17.123456p')).toEqual($scope.resultingValue); 
        });
        
        it("'001.41p', should return 141", function() {
            $scope.resultingValue = 141;
            expect($scope.inputValidation('001.41p')).toEqual($scope.resultingValue); 
        });
        
        it("'£2p', should return 200", function() {
            $scope.resultingValue = 200;
            expect($scope.inputValidation('£2p')).toEqual($scope.resultingValue); 
        });

        
    });

});