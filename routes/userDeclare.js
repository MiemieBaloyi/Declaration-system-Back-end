
const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/declare', function(req,res){

   let post = ({d_id:req.body, a_id:req.body, usr_id:req.body, date_declared:req.body});

        myConnection.query("INSERT INTO user_declare SET ?", [post],function(error,results,fields){

            if (error) throw error;

            return res.send({data: results, message: "Successfully entered items"});


        });
});

Router.put('/add', function(res,req){

    let post = ({d_id:req.body, a_id:req.body, usr_id:req.body, date_declared:req.body});

    let d_id = req.body.d_id;

    myConnection.query('UPDATE user_declare SET ? WHERE usr_id = ?', [updates, d_id], function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Update successful"});
    });
});

Router.delete('/remove', function(req,res){
  
    var deleta = req.body.d_id;

    myConnection.query('DELETE FROM user_declare WHERE d_id  = ?', deleta, function(error,results, fields){

        if(error) throw error;

        return res.send({data: results, message:"Successfully deleted the item"});

    } );
});

Router.get('/list', function(req,res){

    var search = {user_id:req.params.user_id};

    myConnection.query('SELECT * FROM user_declare ' + req.params.id, search, function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Search Successful"});
    })
});

module.exports = Router;

