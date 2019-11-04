const express = require('express');
const bodyparser = require('body-parser');
const myConnection = require('./connection');
const AdminRoute = require('./routes/admin');
//const cors = require('cors')

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.get('/', function(req,res,next){
    //handle get routes
})

app.use('/',require('./routes/user'));
app.use('/',require('./routes/item'));
app.use('/',require('./routes/admin'));
app.use('/',require('./routes/itemCart'));
app.use('/',require('./routes/userDeclare'));


app.listen(8080);

