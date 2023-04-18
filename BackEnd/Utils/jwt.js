//............
//importing
//............
const jwt = require('jsonwebtoken')

//............
//app
//............
const createJwt = ({
 payload
}) => {
 const token = jwt.sign(payload, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_LIFETIME
 })
 return token
}

const isTokenValid = ({
 token
}) => jwt.verify(token, process.env.JWT_SECRET)

//............
//exporting
//............
module.exports = {
 createJwt,
 isTokenValid
}