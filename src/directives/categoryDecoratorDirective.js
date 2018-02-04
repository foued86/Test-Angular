'use strict';

app.directive('decorateCategory', function(){
    return {
        template : '{{category.name}} with identifier {{category.id}} <a href="" ng-click="edit(category)">Edit</a> | <a href="" ng-click="remove(category)">Remove</a>'
    }
});