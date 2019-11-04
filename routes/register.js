
const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/itemss', function(req,res){

    let post = ({i_serial:req.body.i_serial, usr_id:req.body.usr_id, i_desc:req.body.i_desc,
                    i_type:req.body.i_type, i_brand:req.body.i_brand, date_declred:req.body.date_declred});

        myConnection.query("INSERT INTO items SET ?", [post],function(error,results,fields){

            if (error) throw error;

            return res.send({data: results, message: "Successfully entered items"});
            
        });
});

Router.put('/add', function(req,res){

    let updates = ({i_serial:req.body.i_serial, i_desc:req.body.i_desc,i_type:req.body.i_type, 
                    i_brand:req.body.i_brand, date_declred:req.body.date_declred});

    var usr_id = req.body.usr_id;

    myConnection.query('UPDATE items SET ? WHERE usr_id = ?', [updates, usr_id], function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Update successful"});
    });
});

Router.delete('/remove/(:id)', function(req,res){
  
    var deleta = {user_id:req.params.user_id, i_type:req.params.i_type};

    myConnection.query('DELETE FROM items WHERE usr_id  = AND i_type = ' +req.params.id , deleta, function(error,results, fields){

        if(error) throw error;

        return res.send({data: results, message:"Successfully deleted the item"});

    } );
});

Router.get('/show', function(req,res){

    var search = {user_id:req.params.user_id};

    myConnection.query('SELECT * FROM items ' + req.params.id, search, function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Search Successful"});
    })
});

module.exports = Router;

