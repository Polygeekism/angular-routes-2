var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');


router.get('/', function(req,res){
    pool.connect(function(errorConnecting, client, done){
        if(errorConnecting){
            console.log('error connecting', errorConnecting)
        }else{
            client.query('SELECT * FROM powers', function(errorMakingQuery, result){
                done();
                if(errorMakingQuery){
                    console.log('error making query', errorMakingQuery);
                    res.sendStatus(500);
                }else{
                    res.send(result.rows);
                }
            })
        }
    })
});


module.exports = router;