const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    pid: {
        type: Number,
        required: true
            // unique: true
    },
    pname: {
        type: String,
        required: true
    },
    pprice: {
        type: Number,
        default: 18
    },
    pdesc: {
        type: String,
        default: 'male'
    },
    del: {
        type: String,
        default: '<button type="button" class="btn btn-default">删除</button>'
    },
    update: {
        type: String,
        default: '<a href="/products/update" class="btn btn-primary">更新</a>'
    }
}, {
    timestamps: true
})
const Product = mongoose.model('product', productSchema);
module.exports = Product;