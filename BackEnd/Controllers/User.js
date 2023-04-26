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
//App
//............
//getAllUsers
const getAllUsers = async (req, res) => {
 console.log(req.user)
 const users = await User.find({
  role: 'user'
 }).select('-password')
 res.status(StatusCodes.OK).json({
  users
 })
}

//getSingleUser
const getSingleUser = async (req, res) => {
 const user = await User.findOne({
  _id: req.params.id
 }).select('-password')
 if (!user) {
  throw new CustomError.NotFoundError(`no user with id ${req.params.id}`)
 }

 res.status(StatusCodes.OK).json({
  user
 })
}

//showCurrentUser
const showCurrentUser = async (req, res) => {
 res.status(StatusCodes.OK).json({
  user: req.user
 })
}

//updateUserPassword
const updatePassword = async (req, res) => {
 const {
  oldPassword,
  newPassword
 } = req.body
 if (!oldPassword || !newPassword) {
  throw new CustomError.BadRequestError('please provide both values')
 }
 const user = await User.findOne({
  _id: req.user.userId
 })
 console.log(req.user.userId)
 const isPasswordCorrect = await user.comparePassword(oldPassword)
 if (!isPasswordCorrect) {
  throw new CustomError.UnauthenticatedError('Invalid Credentials')
 }

 user.password = newPassword
 await user.save()

 res.status(StatusCodes.OK).json({
  msg: 'Success!Password Updated.'
 })
}

//updateUserName
const updateUserName = async (req, res) => {
 res.send(req.body)
}


module.exports = {
 getAllUsers,
 getSingleUser,
 showCurrentUser,
 updatePassword,
 updateUserName
}