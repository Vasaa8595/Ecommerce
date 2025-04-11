const { getProducts, getSingleProducts } = require("../controllers/productController");

const express =  require('express');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProducts);

module.exports = router;
