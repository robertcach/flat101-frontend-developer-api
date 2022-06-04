const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller")

const upload = require("./storage.config")

/* ROUTES */
router.get("/", (req, res, next) => res.status(200).json({ ok: true}))
router.post("/new-product", upload.single('image'), productController.create)

module.exports = router