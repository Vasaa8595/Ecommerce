const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

//Create order API /api/v1/orders
exports.createOrder = async (req, res) => {
    try {
        const cartItems = req.body;
        const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
        const status = 'pending';

        const order = await orderModel.create({ cartItems, amount, status })
///update  product stock

        cartItems.forEach(async(item)=>{
            const product = await productModel.findById(item.product._id);
            product.stock = product.stock - item.qty;
            await product.save(); 
        })


        res.status(201).json({
            success: true,
            order
        });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({
            success: false,
            message: "Failed to place order",
        });
    }
};
