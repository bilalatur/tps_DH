const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const producto = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let indexController = {
    'home': function(req,res){
        db.Product.findAll()
        .then(function(product){
            console.log(product)
            res.render('index', {producto: product, toThousand});
        })
    },
}

module.exports = indexController;