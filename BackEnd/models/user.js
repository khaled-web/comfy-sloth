//............
//importing
//............
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

//............
//app
//............
const UserSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, 'Please provide name'],
  minLength: 3,
  maxLength: 50
 },
 email: {
  type: String,
  required: [true, 'Please provide email'],
  unique: true,
  validate: {
   message: 'Please provide valid email',
   validator: validator.isEmail
  }
 },
 password: {
  type: String,
  required: [true, 'Please provide password']
 },
 role: {
  type: String,
  enum: ['admin', 'user'],
  default: 'user'
 }
})

//hashPassword
UserSchema.pre('save', async function () {
 //ifWeUserUser.save()-updateName,email-controller.js
 if (!this.isModified('password')) return

 const salt = await bcrypt.genSalt(10)
 this.password = await bcrypt.hash(this.password, salt)
})
//comparePassword
UserSchema.methods.comparePassword = async function (pass) {
 const isMatch = await bcrypt.compare(pass, this.password);
 return isMatch;
}

//............
//export
//............
module.exports = mongoose.model('User', UserSchema)