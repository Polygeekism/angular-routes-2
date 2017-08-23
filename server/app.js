var express = require('express');
var app = express();
var heroes = require('./routes/heroes.js');
var powers = require('./routes/powers.js');

var port = 5000;

app.use(express.static('server/public'));

app.use('/heroes', heroes);
app.use('/powers', powers);

app.listen(port, function(){
    console.log('app listenning on port', port);
});