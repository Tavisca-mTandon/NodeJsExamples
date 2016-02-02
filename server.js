console.log('SERVER : Starting to listen');

var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    listController = require('./server/controllers/list-controller');


mongoose.connect('mongodb://test:test@ds039185.mongolab.com:39185/meanjs');

app.use(bodyParser.json());

//Called at an Application Start the first Call for index.html
app.get( '/' , function(req , res ){
    console.log('SERVER: Got a get request');
    res.sendFile(__dirname + '/client/views/index.html');
});


//Routes for RestFullApiService
app.get('/api/demoList',listController.list);
app.post('/api/demoList',listController.addName);



//Declaring the path for /js as specified below
app.use('/js',express.static(__dirname + '/client/js'));


//Code to start listening on specified port number above
app.listen(3000,function(){
    console.log('SERVER: Listening on port = 3000');
});

