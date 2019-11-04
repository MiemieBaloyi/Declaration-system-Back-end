
const express = require('express');
Router = express.Router();
myConnection = require('../connection');

Router.post('/users', function(req,res){

   let post = ({usr_id:req.body.usr_id, usr_name:req.body.usr_name,
                usr_surname:req.body.usr_surname});

        myConnection.query("INSERT INTO user SET ?", [post],function(error,results,fields){

            if (error) throw error;

            return res.send({data: results, message: "Successfully entered items"});


        });
});

/*Router.put('/update', function(res,req){


    var id = req.body.usr_id;
    var name=req.body.usr_name;

    myConnection.query('UPDATE user SET usr_name=? WHERE usr_id= ?',id,name, function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Update successful"});
    });
});
*/

Router.delete('/discard', function(req,res){
  
    var deleta = req.body.usr_id;

    myConnection.query('DELETE FROM user WHERE usr_id  = ?', deleta, function(error,results, fields){

        if(error) throw error;

        return res.send({data: results, message:"Successfully deleted the item"});

    } );
});

Router.get('/shows', function(req,res){


    myConnection.query('SELECT * FROM user ', function(error,results,fields){

        if (error) throw error;

        return res.send({data: results, message:"Search Successful"});
    })
});



module.exports = Router;

