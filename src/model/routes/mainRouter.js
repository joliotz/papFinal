const srcLocation = require('../../srcLocation');

const path = require('path');
const express = require('express');

const router = express.Router();

router.use('/files', require('./fileRouter'));

router.use('/api', require('./apiRouter'));

const connection = require("../dbconnection");

router.get('/',(req, res) =>{
    res.sendFile(path.join(srcLocation, './view/html/home.html'));
}); 

router.get('/carrinho',(req, res) =>{
    res.sendFile(path.join(srcLocation, './view/html/carrinho.html'));
}); 

router.get('/feedback', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/feedback.html'));
});

router.get('/contacto', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/contacto.html'));
});

router.get('/catalog', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/catalogo.html'));
});

router.get('/loginsignup', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/loginsignup.html'));
});

router.get('/surf', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/product/surf.html'));
});

router.get('/tenis', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/product/tenis.html'));
});

router.get('/ginasticaAquatica', function(req, res) {
    res.sendFile(path.join(srcLocation, './view/html/product/ginasticaAquatica.html'));
});

router.get('/catalogCon', function(req, respo) {
    connection.query('SELECT * FROM products', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else {
            console.log(result) //formato json
            respo.json(result)
        }
    })
})

router.get('/recom', function(req, respo) {
    connection.query('SELECT * FROM products ORDER by products.avaliacao DESC', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else {
            console.log(result) //formato json
            respo.json(result)
        }
    })
})

module.exports = router