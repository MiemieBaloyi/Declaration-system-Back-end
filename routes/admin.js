
const express = require('express');
Router = express.Router();
myConnection = require('../connection');




//a_id is used as a staff number
Router.post('/admins', function(req,res){

    var userN = req.body.a_username;
    var userP = req.body.a_password;


    if(!userN || !userP){
        
        return res.send({message: 'Please Enter All The Fields'});
    }

    if(userP.length < 4){
        
        return res.send({message: 'User password must be a minimum of 4 characters'});
    }


    let post=({a_username:req.body.a_username, a_password:req.body.a_password,
             a_name:req.body.a_name, a_id:req.body.a_id}); 
        
            myConnection.query("INSERT INTO admin SET ?" , [post],function(error,results,fields){

                if(error) throw error; 
                return res.send({ data: results, message:'Successfully posted data' });
            });       

});


//a_id is used as a staff number
Router.delete('/remove/(:id)', function(req,res){

    var adminstr = {a_id: req.params.a_id}

    myConnection.query('DELETE FROM admin WHERE userID = ' + req.params.id ,adminstr,function(error,results,fields){

        if(error) throw error;

        return res.send({data: results ,message: "Successfully Deleted User" });
    });

});

//a_id is used as a staff number
Router.put('/updates',function(req,res){

    let ups = ({a_username:req.body.a_username, a_password:req.body.a_password,
                a_name:req.body.a_name});

    let a_id=req.body.a_id;

    myConnection.query('UPDATE admin SET ?  WHERE a_id = ?', [ups,a_id], function(error,results, fields){

        if(error) throw error;

        return res.send({data: results, message:'Successfully Updated'});

    });

});

//a_id is used as a staff number


module.exports = Router;
