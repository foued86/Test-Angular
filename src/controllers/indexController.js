app.controller('createUserController', function($scope, userProvider){
   
    $scope.create = function(user){
        userProvider.create(user);
    }
}).controller('index', function($scope, userProvider, $location){
     $scope.session = userProvider.getAuth();
     $scope.logout = userProvider.logout();
    
    $scope.auth = function(user){
        $scope.session = userProvider.auth(user);
        console.log($scope.session);
        //$location.url('/home');
    }
});