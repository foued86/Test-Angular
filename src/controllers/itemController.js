'use strict';

app.controller('itemIndex', function($scope, userProvider){
     $scope.create = function(user){
         console.log('ok!');
        userProvider.create(user);
    }

}).controller('itemList', function($rootScope, $scope, itemProvider, $location){
    $scope.items = itemProvider.getItems();
    
    $scope.remove = function(item){
        itemProvider.remove(item);
    }
    
    $scope.edit = function(item){
        $rootScope.itemToEdit = item;
        $location.url('/items/edit');
    }
    
}).controller('itemCreate', function($scope, categoryProvider, itemProvider){
    $scope.categories = categoryProvider.getCategories();
    
    $scope.save = function(item){
       itemProvider.create(item);
    }
}).controller('itemEdit', function($rootScope, $scope, categoryProvider, itemProvider, $location){
    $scope.categories = categoryProvider.getCategories();
    $scope.item = $rootScope.itemToEdit;
    
    $scope.save = function(item){
       itemProvider.update(item);
        $location.url('/items');
    }
    
}); 