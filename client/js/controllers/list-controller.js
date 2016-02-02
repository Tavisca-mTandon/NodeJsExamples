app.controller('listController', ['$scope','$resource',function($scope,$resource){
    
    var listForDemo = $resource('/api/demoList');
    
    listForDemo.query(function(results){
        $scope.demoList = results;    
    });
    
    
    $scope.addName = function(){
        var list = new listForDemo();        
        list.name = $scope.name;
        list.$save(function(result){
            $scope.demoList.push(result);
            $scope.name = "";
        });
        
    }
    
}]);