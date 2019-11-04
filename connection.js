const mysql = require('mysql');
const express = require('express');

const myConnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'declaredb',
    
});

myConnection.connect((err)=>{

    if(err)
    {
        console.log('Cannot Connect to the database');
    }
    else{
        console.log('Successfully connected to the Database');
    }

});

module.exports = myConnection;

