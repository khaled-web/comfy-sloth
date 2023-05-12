//..........
//importing
//..........
const CustomError = require('../errors')


//..........
//app
//..........

const checkPermission = (requestUser, resourceUserId) => {
 // console.log(requestUser)
 // console.log(resourceUserId)
 // console.log(typeof resourceUserId)
 if (requestUser.role === 'admin') return
 if (requestUser.userId === resourceUserId.toString()) return
 throw new CustomError.UnauthenticatedError('Not authorized to Access route')
}

//..........
//exporting
//..........
module.exports = checkPermission