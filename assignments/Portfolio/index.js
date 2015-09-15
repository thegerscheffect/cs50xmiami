/**
 * Created by M2icp on 9/10/15.
 */
var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send(__dirname + 'index.html')
});

app.listen(port, function(){
    console.log('listening on port ' + port)
});