//............
//importing
//............
const User = require('../models/user.js')
const {
 StatusCodes
} = require('http-status-codes')
const CustomError = require('../errors')
const jwt = require('jsonwebtoken')
const {
 createJwt,
 isTokenValid
} = require('../Utils')
//............
//app
//............
//register
const register = async (req, res) => {
 //checkEmailExists
 const {
  email,
  name,
  password
 } = req.body
 const emailAlreadyExists = await User.findOne({
  email
 })
 if (emailAlreadyExists) {
  throw new CustomError.BadRequestError('Email Already Exists')
 }
 //letSetFirstAccountIsAdmin
 const isFirstAccount = await User.countDocuments({}) === 0
 const role = isFirstAccount ? "admin" : "user"
 //creatingDataAtMongoDB
 const user = await User.create({
  name,
  email,
  password,
  role
 })
 //creatingJWT
 const tokenUser = {
  name: user.name,
  userId: user._id,
  role: user.role
 }
 const token = createJwt({
  payload: tokenUser
 })
 //sureSetTokenValidForOneDay
 const oneDay = 1000 * 60 * 60 * 24
 res.cookie('token', token, {
  httpOnly: true,
  expires: new Date(Date.now() + oneDay)
 })
 //Response
 res.status(StatusCodes.CREATED).json({
  user: tokenUser
 })
}

//login
const login = async (req, res) => {
 res.send('login')
}

//logout
const logout = async (req, res) => {
 res.send('logout')
}


//............
//exporting
//............
module.exports = {
 register,
 login,
 logout
}