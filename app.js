var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static('public')); // enables access to the public folder which has the images

// Express Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'js')));

app.get('/index.html',function(req,res){
   res.sendFile(path.join(__dirname + '/index.html')); 
});

app.get('/js/three.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/three.js')); 
});
app.get('/js/dat.gui.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/dat.gui.js')); 
});

app.get('/js/dat.gui.min.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/dat.gui.min.js')); 
});


app.get('/js/TrackballControls.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/TrackballControls.js')); 
});


app.get('/', function(req, res) {
    res.redirect('index.html');
});

app.listen(3000);
console.log("Server running at Port 3000");