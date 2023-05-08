//............
//importing
//............



//............
//App
//............
//create product
const createProduct = async (req, res) => {
 res.send('create product')
}

//getAllProducts
const getAllProducts = async (req, res) => {
 res.send('get all products')
}

//getSingleProduct
const getSingleProduct = async (req, res) => {
 res.send('get single product')
}

//updateProduct
const updateProduct = async (req, res) => {
 res.send('update product')
}

//deleteProduct
const deleteProduct = async (req, res) => {
 res.send('delete product')
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