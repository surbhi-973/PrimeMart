import express from 'express'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'
// ye htaya because used productController.js for cleanup, as routes sirf route dikhaayenge
import {getProducts, getProductById} from '../controllers/productController.js'
const router = express.Router()


// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
// router.get('/', asyncHandler(async(req, res) => {
//     const products = await Product.find({})

//     //Message.js k alert dekhne k liye error (commentout kiya h)->

//     // throw new Error('Some Error')

//     res.json(products)
// }))

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public

// router.get('/:id', asyncHandler(async(req, res) => {
//     // const product = products.find((p) => p._id === req.params.id)
//     const product = await Product.findById(req.params.id)
    
//     if (product) {
//         res.json(product)
//     } else {
//         // res.status(404).json({ message: 'Product not found'})
//         res.status(404)
//         throw new Error('Product not found')
//     }

// }))

export default router