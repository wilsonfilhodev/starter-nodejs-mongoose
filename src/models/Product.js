const mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

const ProductSchemma = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ProductSchemma.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchemma);