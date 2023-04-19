//............
//importing
//............
const jwt = require('jsonwebtoken')
const {
 StatusCodes
} = require('http-status-codes')
const CustomError = require('../errors')
//............
//app
//............
//CreateJWT
const createJwt = ({
 payload
}) => {
 const token = jwt.sign(payload, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_LIFETIME
 })
 return token
}
//verifyJWT
const isTokenValid = ({
 token
}) => jwt.verify(token, process.env.JWT_SECRET)

//createTokenWithResponse
const attachCookiesToResponse = ({
 res,
 user
}) => {

 const token = createJwt({
  payload: user
 })
 //sureSetTokenValidForOneDay
 const oneDay = 1000 * 60 * 60 * 24
 res.cookie('token', token, {
  httpOnly: true,
  expires: new Date(Date.now() + oneDay),
  secure: process.env.NODE_ENV === 'production',
  signed: true
 })

}

//............
//exporting
//............
module.exports = {
 createJwt,
 isTokenValid,
 attachCookiesToResponse
}