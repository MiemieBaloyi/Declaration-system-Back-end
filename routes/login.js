const express = require('express');
Router = express.Router();
myConnection = require('../connection');
var session = require('express-session');
const jwt = require('jsonwebtoken');

Router.use(session({

    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


Router.post('/login', function(req,res){

    var userN = req.body.a_username;
    var userP = req.body.a_password;
 
    //User checking
    if(!userN || !userP){
        
        return res.send({message: 'Please Enter All The Fields'});
    }

    if(userP.length < 4){
        
        return res.send({message: 'User password must be a minimum of 4 characters'});
    }

    let post=({a_username:req.body.a_username, a_password:req.body.a_password,
             a_name:req.body.a_name, a_id:req.body.a_id}); 
        
            myConnection.query(" SELECT admin SET ?" , [post],function(error,results,fields){

                if(error) throw error; 
                return res.send({ data: results, message:'logged in' });
            });       

});

Router.get('/logout',(req,res) => {

    req.logout();
    req.flash('success tag', 'you logged out');
    res.redirect('/login');
});