const router = require('express').Router();
const mongoose = require('mongoose');
const Product = require('../models/db.js');

mongoose
    .connect('mongodb://localhost/users', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

router.get('/', (req, res) => {
    Product.find().then(data => {
        res.render('product/list', { product: data })
    })

    Product.findByIdAndRemove().then(() => { // 删除
        res.redirect('/products');
    })
})
router.get('/new', (req, res) => {
    res.render('product/new', {});
})
router.get('/update', (req, res) => {
    res.render('product/update', {});

})

router.post('/', (req, res) => {
    let product = new Product(req.body);
    product.save().then(() => {
        res.redirect('/products');
    })
})

module.exports = router;