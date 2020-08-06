const db = require('../database/models')
const { check, validationResult, body } = require('express-validator');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
function precioConDescuento (precio,descuento){
    return precio*((100-descuento)/100);
}

let productsController = {
    'products': function(req,res){
        db.Product.findAll()
        .then(function(product){
            res.render('products', {product, toThousand});
        })
    },
    'create': function(req,res,next){
        let errors = [];
        res.render('createProduct',{errors: errors})
    },
    /*'postProduct CON VALIDACIÓN': function(req,res, next){
        let errors = validationResult(req); 
        if(errors.errors.length == 0){
            let nuevoProducto = {
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                discount:req.body.discount,
                precio:req.body.price,
            }
            db.Product.create(nuevoProducto)
                .then(function(){
                    res.redirect('/products');
                    })
        } else {
            res.render('createProduct',{errors:errors.errors})
        }
    },*/
    'postProduct': function(req,res, next){
        let errors = []
        if (req.file != undefined) { 
            console.log(req.file)
            let nuevoProducto = {
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                discount:req.body.discount,
                precio:req.body.price,
                image:req.file.filename,
              }
              db.Product.create(nuevoProducto)
                  .then(function(){
                      res.redirect('/products');
                      })
        } else {
            let error = "Debe subir una imagen para el producto"
            errors.push(error);
            console.log(errors)
            res.render('createProduct',{errors: errors})
        }
    },
    'delete': function(req,res){
        db.Product.findByPk(req.params.id)
         .then(function(product){
            return res.render('deleteProduct',{prod:product});
    })
    },
    'deleteProduct': function(req,res){
        db.Product.destroy({
            where:{
                id: req.params.id
            }
        })
            .then(function(product){
                res.redirect('/products');
            })
    },
    'edit': function(req,res){
        db.Product.findByPk(req.params.id)
            .then(function(product){
                res.render('editProduct', {prod: product});
            })
    },
    'putEditProduct': function(req,res){
    db.Product.update({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        discount:req.body.discount,
        precio:req.body.price,
    }, {
        where:{
            id: req.params.id
        }
    })            
        .then(function(product){
            res.redirect('/products');
    })
    },
    'productDetail': function(req,res){
        db.Product.findByPk(req.params.id)
        .then(function(product){
            let precioReal = precioConDescuento(product.precio,product.discount)
            return res.render('productDetail', {prod: product, toThousand, precioReal});
        })
    }
}


module.exports = productsController;