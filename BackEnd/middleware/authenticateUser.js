//..............
//importingData
//..............
const CustomError = require('../errors')
const jwt = require('jsonwebtoken')
const {
 isTokenValid
} = require('../Utils')

//.........
//AppData
//.........
const authenticateUser = async (req, res, next) => {
 const token = req.signedCookies.token

 if (!token) {
  throw new CustomError.UnauthenticatedError('Authentication Invalid')
 }

 try {
  const {
   name,
   userId,
   role
  } = isTokenValid({
   token
  })

  req.user = {
   name,
   userId,
   role
  }

  next()
 } catch (error) {
  throw new CustomError.UnauthenticatedError('Authentication Invalid')
 }
}

//forAdminOnly
const authorizePermissions = (...roles) => {
 return (req, res, next) => {
  if (!roles.includes(req.user.role)) {
   throw new CustomError.UnauthorizedError('Unauthorized to access this route')
  }
  next()
 }
}


//..............
//exportingData
//..............

module.exports = {
 authenticateUser,
 authorizePermissions
}