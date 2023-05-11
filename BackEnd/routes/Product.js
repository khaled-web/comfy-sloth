//............
//importing
//............
const express = require('express')
const router = express.Router()
const {
 createProduct,
 getAllProducts,
 getSingleProduct,
 updateProduct,
 deleteProduct,
 uploadImage
} = require('../Controllers/Product.js')
const {
 authenticateUser,
 authorizePermissions
} = require('../middleware/authenticateUser.js')
const authAuthenticatedUser = require('../middleware/auth-JWT.js')

//............
//App
//............
router.route('/').post(authenticateUser, authorizePermissions('admin'), createProduct)

router.route('/').get(authAuthenticatedUser, getAllProducts)

router.route('/:id').get(authenticateUser, authorizePermissions('admin'), getSingleProduct)

router.route('/:id').patch(authenticateUser, authorizePermissions('admin'), updateProduct)

router.route('/:id').delete(authenticateUser, authorizePermissions('admin'), deleteProduct)

router.route('/uploadImage').post(uploadImage)

//............
//exporting
//............
module.exports = router