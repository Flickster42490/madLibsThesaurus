var express = require("express");
var NodeCache = require("node-cache");
var bodyParser = require('body-parser');

var app = express();
var myCache = new NodeCache();

var port = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(bodyParser());

app.get('/', function(req, res){
    res.render('index');
})

app.post('/save', function(req, res){
    res.send('saved');
    myCache.set("story", req.body, function(err, success){
        if(!err && success){
            console.log('success');
        }
    })
})
app.get('/save', function(req, res){
    myCache.get("story", function(err, value){
        res.send(value);
        console.log(value.story);        
    })
})

app.listen(port, function(){
    console.log("Listening on " + port);
});