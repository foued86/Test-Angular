'use strict';

app.service('itemProvider', function($firebase){
    var ref = new Firebase("https://collectify-test.firebaseio.com/items");
    var sync = $firebase(ref);
    var items = sync.$asArray();
    
    this.getItems = function(){
        return items;
    }
    
    this.create = function(item){
        items.$add(item);
        
    }
    
    this.remove = function(item){
        items.$remove(item);
        
    }
    
    this.update = function(item){
        items.$save(item);
    }
}); 