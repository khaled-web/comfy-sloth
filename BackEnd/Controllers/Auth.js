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
 isTokenValid,
 attachCookiesToResponse
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

 //ResponseWithJWTAsCookies
 attachCookiesToResponse({
  res,
  user: tokenUser
 })

 res.status(StatusCodes.CREATED).json({
  tokenUser
 })
}

//login
const login = async (req, res) => {
 const {
  email,
  password
 } = req.body
 if (!email || !password) {
  throw new CustomError.BadRequestError("Please provide email and password")
 }

 const user = await User.findOne({
  email
 })
 if (!user) {
  throw new CustomError.UnauthenticatedError("Invalid Credentials")
 }

 const isPasswordCorrect = await user.comparePassword(password)
 if (!isPasswordCorrect) {
  throw new CustomError.UnauthenticatedError("Invalid Credentials")
 }

 //creatingJWT
 const tokenUser = {
  name: user.name,
  userId: user._id,
  role: user.role
 }

 //ResponseWithJWTAsCookies
 attachCookiesToResponse({
  res,
  user: tokenUser
 })

 res.status(StatusCodes.CREATED).json({
  tokenUser
 })

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