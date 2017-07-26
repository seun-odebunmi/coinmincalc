describe("myCoinConvCtrl", function() {
    beforeEach(module('coinConvApp'));
    
    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('Minimum coins calculation', function() {
        var $scope, controller;
        
        beforeEach(function() {
          $scope = {};
          controller = $controller('myCoinConvCtrl', { $scope: $scope });
        });
        
        it("123 should equal {£1x1, 20px1, 2px1, 1px1}", function() {
            $scope.resultingValue = [
                {"denomination": "£1", "pennyCount": 1 },
                {"denomination": "20p", "pennyCount": 1 },
                {"denomination": "2p", "pennyCount": 1 },
                {"denomination": "1p", "pennyCount": 1 }
            ];
            expect($scope.minNumCoins(123)).toEqual($scope.resultingValue); 
        });
        
        it("1234 should equal {£2x6, 20px1, 10px1, 2px2}", function() {
            $scope.resultingValue = [
                {"denomination": "£2", "pennyCount": 6 },
                {"denomination": "20p", "pennyCount": 1 },
                {"denomination": "10p", "pennyCount": 1 },
                {"denomination": "2p", "pennyCount": 2 }
            ];
            expect($scope.minNumCoins(1234)).toEqual($scope.resultingValue); 
        });
        
        it("50 should equal {50px1}", function() {
            $scope.resultingValue = [
                {"denomination": "50p", "pennyCount": 1 }
            ];
            expect($scope.minNumCoins(50)).toEqual($scope.resultingValue); 
        });
        
        it("200 should equal {£2x1}", function() {
            $scope.resultingValue = [
                {"denomination": "£2", "pennyCount": 1 }
            ];
            expect($scope.minNumCoins(200)).toEqual($scope.resultingValue); 
        });
        
        it("100 should equal {£1x1}", function() {
            $scope.resultingValue = [
                {"denomination": "£1", "pennyCount": 1 }
            ];
            expect($scope.minNumCoins(100)).toEqual($scope.resultingValue); 
        });
        
        it("£54.04 should equal {£2x27, 2px2}", function() {
            $scope.resultingValue = [
                {"denomination": "£2", "pennyCount": 27 },
                {"denomination": "2p", "pennyCount": 2 }
            ];
            expect($scope.minNumCoins('£54.04')).toEqual($scope.resultingValue); 
        });
        
        it("£16.23p should equal {£2x27, 20px1, 2px1, 1px1}", function() {
            $scope.resultingValue = [
                {"denomination": "£2", "pennyCount": 8 },
                {"denomination": "20p", "pennyCount": 1 },
                {"denomination": "2p", "pennyCount": 1 },
                {"denomination": "1p", "pennyCount": 1 }
            ];
            expect($scope.minNumCoins('£16.23p')).toEqual($scope.resultingValue); 
        });

        
    });

});