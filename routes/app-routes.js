var express = require('express');
var router = express.Router();

const api = require('../config');
const request = require('request');

// display cartoon characters
router.get('/', function (req, res) {
    const toon_url = api.toon_api_url;
    request({url:toon_url}, (err, response, body) => {
        if(err)
            res.send(err);
        
        var jsondata = JSON.parse(body);

        res.render('toons', { title: 'Toons', jsondata: jsondata })
    });  
});

// display users
router.get('/users', function (req, res) {
    const users_url = api.users_api_url;
    request({url:users_url}, (err, response, body) => {
        if(err)
            res.send(err);
        
        var jsondata = JSON.parse(body);

        res.render('users', { title: 'Users', jsondata: jsondata })
    });  
});

module.exports = router;
