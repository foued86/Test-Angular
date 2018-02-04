'use strict';

app.directive('decorateItem', function(){
    return {
        template : '{{item.name}} est dans la catégorie {{item.category_id}} <a href="" ng-click="edit(item)">Edit</a> | <a href="" ng-click="remove(item)">Remove</a>'
    }
});