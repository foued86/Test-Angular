'use strict';


app.service('categoryProvider', function($firebase){
    var ref = new Firebase("https://collectify-test.firebaseio.com/categories");
    var sync = $firebase(ref);
    var categories = sync.$asArray();
    
    this.getCategories = function(){
        return categories;
    }
    
    this.create = function(category){
        category['id'] = categories.length + 1;
        categories.$add(category);
        
    }
    
    this.remove = function(category){
        categories.$remove(category);
    }
    
    this.update = function(category){
        categories.$save(category);
    }
});