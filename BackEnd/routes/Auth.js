//............
//importing
//............
const express = require('express')
const router = express.Router()
const {
 register,
 login,
 logout
} = require('../Controllers/Auth.js')
//............
//app
//............
router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)



//............
//exporting
//............
module.exports = router