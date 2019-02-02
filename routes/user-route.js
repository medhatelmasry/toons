var express = require('express');
var router = express.Router();
const api = require('../config');
const request = require('request');

router.get('/', function (req, res) {
    const toon_url = api.api_url;
    request({url:toon_url}, (err, response, body) => {
        if(err)
            res.send(err);
        
        var jsondata = JSON.parse(body);

        res.render('index', { title: 'Users', jsondata: jsondata })
    });  
});

module.exports = router;
