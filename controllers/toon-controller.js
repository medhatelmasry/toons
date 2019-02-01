const api = require('../src/config/api')
const request = require('request')

const getController = (req, res) => {    

    const toon_url = api.api_url;

    request({url:toon_url}, function (error, response, body) {
        if (error) 
            return sendError(error);
        else       
            return res.json(body);
    })
};

// Metodo Privado genérico para tratar erro 
const sendError = (res) => {
    return res.status(500).end()
}

module.exports = {
    get: getController
}
