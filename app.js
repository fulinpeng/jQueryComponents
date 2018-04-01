/**
 * Created by flp on 2018/3/31.
 */
var express = require('express');
var app = express();


app.use(express.static(__dirname+"/public"));
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/test1.html");
});
app.listen(3000,function () {
    console.log(__dirname);
});