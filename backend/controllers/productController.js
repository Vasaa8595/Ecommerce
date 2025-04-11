const ProductModel = require('../models/productModel');
//Get products API /api/vi/products
exports.getProducts = async (req,res,next) => {
    const query = req.query.keyword?{name : {
        $regex : req.query.keyword,
        $options:'i'
    }}:{}
    const products = await ProductModel.find(query);
    res.json({
        success:true,
        products
    })
}

//Get single product API /api/vi/products/:id
exports.getSingleProducts = async (req,res,next) =>{
   try {
     const product = await ProductModel.findById(req.params.id)
    res.json ({
        success:true,
       product
    })
} catch (error){
    res.status(404).json({
        success:false,
        message:'Product not found'
    })
}

}
