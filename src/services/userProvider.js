'use strict';

app.service('userProvider', function($firebase){
    var ref = new Firebase("https://collectify-test.firebaseio.com");
    
    this.create = function(user)
    {
        ref.createUser({
            email: user.email,
            password: user.password
        }, function(error, user){
            if(error){
                switch(error.code){
                    case "EMAIL_TAKEN":
                        console.log("The new user account cannot be created because the email is already in use.");
                    break;
                    case "INVALID_EMAIL":
                        console.log("The specified email is not a valid email.");
                    break;
                    default:
                    console.log("Error creating user:", error);
                }
            } else {
                console.log("Successfully created user account with uid:", user.uid);
            }

        });
    }
    
    // user logging
    
    function authHandler(error, authData){
        if(error)
            console.log('Login failed!', error);
        else
            console.log('Authenticated successfully with payload:', authData);
    }
    
    this.auth = function(user){
        ref.authWithPassword({
            email : user.email,
            password : user.password
        }, authHandler);
        
        return user;
    }
    
    this.getAuth = function(){
        return ref.getAuth();
    }
    
    this.logout = function(){
        return ref.unauth();
    }

});