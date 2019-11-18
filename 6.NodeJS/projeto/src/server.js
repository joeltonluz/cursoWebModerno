const porta = 3003;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./database');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
    res.send(database.getAllProducts());
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id));
});

app.post('/produtos', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    });
    res.send(product); //Converte o ojbeto em JSON 
});

app.put('/produtos/:id', (req, res, next) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    });
    res.send(product); //Converte o ojbeto em JSON 
});

app.delete('/produtos/:id', (req, res, next) => {
    const product = database.deleteProduct(req.params.id);
    res.send(product); //Converte o ojbeto em JSON  
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`);
});