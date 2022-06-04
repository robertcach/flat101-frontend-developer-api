const Product = require("../models/Product.model");

module.exports.create = (req, res, next) => {
  const product = { title, description } = req.body

  if (req.file) {
    product.image = req.file.path
  }

  Product.create(product)
    .then(newProduct => res.status(200).json(newProduct))
    .catch(next)
}
