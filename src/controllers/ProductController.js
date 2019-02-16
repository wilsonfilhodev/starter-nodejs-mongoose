const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const Product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, {page, limit: 3});
        return res.json(products);
    },

    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id ,  req.body, { new: true});
        return res.json(product);
    },

    async remove(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
}