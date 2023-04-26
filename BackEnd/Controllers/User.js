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
 res.send('show current user')
}

//updateUserPassword
const updatePassword = async (req, res) => {
 res.send('update user password')
}

//test
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