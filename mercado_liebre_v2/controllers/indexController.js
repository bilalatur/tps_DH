const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const producto = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
function precioConDescuento (precio,descuento){
    return toThousand(precio*((100-descuento)/100));
}
function productById(id){
    let product = null;
    producto.forEach((prod, i) => {
        if (prod["id"] == id) {
            product = prod;
        }
    });
    return product;
}

let indexController = {
    'home': function (req,res){
        res.render('index', {producto, toThousand})
    },
    'productDetail': function(req,res){
        let prod = productById(req.params.id);
        let precioReal = precioConDescuento(prod.price,prod.discount)
        res.render('productDetail', {prod, toThousand, precioReal})
    }
}

module.exports = indexController;