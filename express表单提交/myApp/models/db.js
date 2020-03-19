const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
    }
}, {
    timestamps: true
})
const Product = mongoose.model('product', productSchema);
module.exports = Product;