'use strict';

app.controller('categoryList', function($rootScope, $scope, categoryProvider, $location){
    $scope.categories = categoryProvider.getCategories();
    
    $scope.remove = function(category){
        
        categoryProvider.remove(category);
    }
    
    $scope.edit = function(category){
        
        $rootScope.categoryToEdit = category;
        $location.url('/categories/edit');
    }
}).controller('categoryCreate', function($scope, categoryProvider){
   $scope.categories = categoryProvider.getCategories();
    
    $scope.save = function(category){
        
        categoryProvider.create(category);
    }
}).controller('categoryEdit', function($rootScope, $scope, categoryProvider, $location){
   
    $scope.category = $rootScope.categoryToEdit;
    
     $scope.save = function(category){
        categoryProvider.update(category);
        $location.url('/categories');
    }
});