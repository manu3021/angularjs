function MyControl($scope){
    $scope.values = ["a","b","c","d","e","f","h"];
    $scope.selectedIndex = -1;
    
    $scope.toggleSelect = function(ind){
        if( ind === $scope.selectedIndex ){
            $scope.selectedIndex = -1;
        } else{
            $scope.selectedIndex = ind;
        }
        $scope.someMethod(ind);
    }
    
    $scope.getClass = function(ind){
        if( ind === $scope.selectedIndex ){
            return "selected";
        } else{
            return "";
        }
    }
    $scope.getButtonLabel = function(ind){
        if( ind === $scope.selectedIndex ){
            return "Deselect";
        } else{
            return "Select";
        }

    }

    $scope.something = false;
    $scope.someMethod = function (ind) {
       if (ind > 4 ) {
            $scope.something = true;
       } else {
               $scope.something = false;
       }
    };

}