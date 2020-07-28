const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const producto = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
function saveJSONfile(products) {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
}
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
function addProduct(nuevoProducto) {
    producto.push(nuevoProducto);
    saveJSONfile(producto);
}

let productsController = {
    'products': function (req,res){
        res.render('products', {producto, toThousand})
    },
    'create': function(req,res){
        res.render('createProduct')
    },
    'postProduct': function(req,res, next){
        let nuevoProducto = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            category:req.body.category,    
            price:req.body.price,
            discount:req.body.discount,
            image: req.file.filename
        }
        console.log(nuevoProducto);
        addProduct(nuevoProducto);
        res.render('products', {producto, toThousand})
    },
    'delete': function(req,res){
        let producto = productById(req.params.id);
        res.render('deleteProduct', {prod: producto});
    },
    'deleteProduct': function(req,res){
        let productoBuscado = productById(req.params.id);
        let nuevoArrayProductos = [];
        nuevoArrayProductos = producto.filter(prod => prod.id != productoBuscado.id);
        saveJSONfile(nuevoArrayProductos);
        res.render('products', {producto, toThousand})
    },
    'edit': function(req,res){
        let producto = productById(req.params.id);
        res.render('editProduct', {prod: producto});
    },
    'putEditProduct': function(req,res){
    let product = productById(req.params.id);
    if (product != null) {
        product.name = req.body.name;
        product.description = req.body.description;
        product.category = req.body.category;
        product.price = req.body.price;
        product.discount = req.body.discount;
        
        producto.map((prod) => {
            if(prod.id === product.id){
            prod.name = product.name;
            prod.description = product.description;
            prod.category = product.category;
            prod.price = product.price;
            prod.discount = product.discount;
        }})
        saveJSONfile(producto);
        res.render('products', {producto, toThousand})
    }
},
    'productDetail': function(req,res){
        let prod = productById(req.params.id);
        let precioReal = precioConDescuento(prod.price,prod.discount)
        res.render('productDetail', {prod, toThousand, precioReal})
    }
}

module.exports = productsController;