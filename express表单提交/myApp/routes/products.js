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
})
router.get('/new', (req, res) => {
        res.render('product/new', {});
    })
    // 新添接口
router.post('/', (req, res) => {
    let product = new Product(req.body);
    product.save().then(() => {
        res.redirect('/products');
    })
});

router.get('/update', (req, res) => { // 编辑
    Product.findById(req.query.id).then(product => {
        res.render('product/update', { product });
    })
})
router.post('/update/:id', (req, res) => { //编辑接口
    console.log(req.params.id)
    console.log(req.body)
    Product.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.redirect('/products');
    })
})
router.delete('/del/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json({ code: 1, msg: '删除成功' });
        })
        .catch(() => {
            res.json({ code: 0, msg: '删除失败' });
        })
})

module.exports = router;