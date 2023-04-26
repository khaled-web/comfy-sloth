//............
//importing
//............
const express = require('express')
const router = express.Router()
const {
 getAllUsers,
 getSingleUser,
 showCurrentUser,
 updatePassword,
 updateUserName
} = require('../Controllers/User.js')
const {
 authenticateUser,
 authorizePermissions
} = require('../middleware/authenticateUser.js')
//............
//app
//............
router.route('/').get(authenticateUser, authorizePermissions('admin'), getAllUsers)
router.route('/showMe').get(authenticateUser, showCurrentUser)
router.route('/updateUserPassword').patch(authenticateUser, updatePassword)
router.route('/updateUserName').patch(updateUserName)
router.route('/:id').get(authenticateUser, getSingleUser)




//............
//exporting
//............
module.exports = router