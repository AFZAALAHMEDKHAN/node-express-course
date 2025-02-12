const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')


router.post('/',auth)
//u can also do like this:
//router.route('/).post(auth).put('anotherauth')
//what I mean to say, u can specify the route once
//and keep chaining the methods(get,put,delete)
//  with their respective functions, like I used auth and anotheauth
module.exports = router