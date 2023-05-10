//............
//importing
//............
const Product = require('../models/product.js')
const {
  StatusCodes
} = require('http-status-codes')
const CustomError = require('../errors')
//pathPackage-toAttachDefaultImage
const path = require('path')
const product = require('../models/product.js')


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
  if (!req.files) {
    throw new CustomError.BadRequestError('No file upload')
  }

  const productImage = req.files.image
  if (!productImage.mimetype.startsWith('image')) {
    throw new CustomError.BadRequestError('Please Upload Image')
  }

  const maxSize = 1024 * 1024
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError('Please upload image smaller than 1MB')
  }

  const imagePath = path.join(__dirname, '../Public/uploads/' + `${productImage.name}`)
  await productImage.mv(imagePath)
  res.status(StatusCodes.OK).json({
    image: `/uploads/${productImage.name}`
  })
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