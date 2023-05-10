//............
//importing
//............
const mongoose = require('mongoose')

//............
//App
//............
const ProductSchema = new mongoose.Schema({
 name: {
  type: String,
  trim: true,
  required: [true, 'Please provide product name'],
  maxLength: [100, 'Name can not be more than 100 characters']
 },
 price: {
  type: Number,
  required: [true, 'please provide product price'],
  default: 0
 },
 description: {
  type: String,
  required: [true, 'Please provide product description'],
  maxLength: [1000, 'Name can not be more that 1000 characters'],
  default: 'excellent Product with awesome material...'
 },
 image: {
  type: String,
  default: '/uploads/example.jpeg'
 },
 category: {
  type: String,
  required: [true, 'Please provide product category'],
  enum: ['office', 'kitchen', 'bedroom', 'living room', 'dining', 'kids']
 },
 company: {
  type: String,
  required: [true, 'Please provide company name'],
  enum: {
   values: ['ikea', 'liddy', 'marcos', 'caressa'],
   message: '{VALUE} is not supported'
  }
 },
 colors: {
  type: [String],
  default: ['#222'],
  required: true
 },
 featured: {
  type: Boolean,
  default: false
 },
 freeShipping: {
  type: Boolean,
  default: false
 },
 inventory: {
  type: Number,
  required: true,
  default: 15
 },
 averageRating: {
  type: Number,
  default: 0
 },
 user: {
  type: mongoose.Types.ObjectId,
  ref: 'User',
  required: true
 }
}, {
 timestamps: true
})


//............
//exporting
//............
module.exports = mongoose.model('Product', ProductSchema)