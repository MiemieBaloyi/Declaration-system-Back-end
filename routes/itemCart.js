const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/', function(req,res){

    let posts = ({c_type:req.body.c_type, c_name:req.body.c_name});

    myConnection.query('INSERT INTO item_cat SET', [posts], function(error,results,fields){

        if(error) throw error;

        return res.send({data:results, message:'Successfully inserted items'});
    });

});

Router.delete('/', function(req,res){

    var c_type = {c_type:req.params.c_type};

    myConnection.query('DELETE FROM item_cat WHERE c_type = ' + req.params.id, c_type, function(error,results,fields){

        if(error) throw error;

        return res.send({data:results, message:'Successfully deleted item'});
    });
});





module.exports = Router;