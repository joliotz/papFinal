const srcLocation = require('../../../srcLocation');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/scripts.js',(req, res) =>{
    res.sendFile(path.join(srcLocation, './controller/scripts.js'))
});

// Rotas de CSS

router.get('/index.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/index.css'))
})

router.get('/carrinho.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/carrinho.css'))
})

router.get('/produto.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/produto.css'))
})

router.get('/catalogo.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/catalogo.css'))
})

router.get('/contacto.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/contacto.css'))
})

router.get('/loginsignup.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/loginsignup.css'))
})
router.get('/feedback.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/feedback.css'))
})

router.get('/footer.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/footer.css'))
})

router.get('/navbar.css',(req,res)=>{
    res.sendFile(path.join(srcLocation, './view/css/nav.css'))
})

module.exports = router;