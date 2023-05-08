//............
//importing
//............
const Product = require('../models/product.js')
const {
 StatusCodes
} = require('http-status-codes')
const CustomError = require('../errors')


//............
//App
//............
//create product
const createProduct = async (req, res) => {
 req.body.user = req.user.userId
 const product = await Product.create(req.body)
 res.status(StatusCodes.CREATED).json({
  product
 })
}

//getAllProducts
const getAllProducts = async (req, res) => {
 const product = await Product.find({})
 res.status(StatusCodes.OK).json({
  count: product.length,
  product
 })
}

//getSingleProduct
const getSingleProduct = async (req, res) => {
 const {
  id: productId
 } = req.params
 const product = await Product.findOne({
  _id: productId
 })
 if (!product) {
  throw new CustomError.NotFoundError(`No product with id: ${productId}`)
 }
 res.status(StatusCodes.OK).json({
  product
 })
}

//updateProduct
const updateProduct = async (req, res) => {
 const {
  id: productId
 } = req.params
 const product = await Product.findOneAndUpdate({
   _id: productId
  },
  req.body, {
   new: true,
   runValidators: true
  }
 )
 if (!product) {
  throw new CustomError.NotFoundError(`No product with id : ${productId}`)
 }

 res.status(StatusCodes.OK).json({
  product
 })
}

//deleteProduct
const deleteProduct = async (req, res) => {
 const {
  id: productId
 } = req.params
 const product = await Product.findByIdAndRemove({
  _id: productId
 })
 if (!product) {
  throw new CustomError.NotFoundError(`No product with id : ${productId}`)
 }


 res.status(StatusCodes.OK).json({
  msg: 'Success! Product removed'
 })
}

//uploadImage
const uploadImage = async (req, res) => {
 res.send('upload image')
}
//............
//exporting
//............
module.exports = {
 createProduct,
 getAllProducts,
 getSingleProduct,
 updateProduct,
 deleteProduct,
 uploadImage
}